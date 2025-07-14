import fsp from 'node:fs/promises';
import path from 'node:path';

import {
  FullParseResult,
  ParsedField,
  ParsedMethod,
  ValueType,
  ValueTypeKind,
} from '../types';
import { prettify } from '../utils/prettify';
import { capitalize } from '../utils/string';
import { textToTsDocComment } from './comment';
import { GENERATED_HEADER } from './constants';
import { EmitMeta } from './meta';
import { valueTypeToString } from './valueType';

const SRC_PATH = path.join(import.meta.dirname, '../../../api/src');

function applyToType<T>(
  value: ValueType,
  apply: (type: ValueType) => T,
  reduce: (values: T[]) => T
): T {
  switch (value.kind) {
    case ValueTypeKind.ARRAY: {
      return applyToType(value.element, apply, reduce);
    }
    case ValueTypeKind.UNION: {
      return reduce(
        value.types.flatMap((type) => applyToType(type, apply, reduce))
      );
    }
    default: {
      return apply(value);
    }
  }
}

function findRefs(value: ValueType): string[] {
  return applyToType(
    value,
    (value) => (value.kind === ValueTypeKind.REF ? [value.name] : []),
    (values) => values.flat()
  );
}

function fieldHasFiles(value: ValueType): boolean {
  return applyToType(
    value,
    (value) => value.kind === ValueTypeKind.REF && value.name === 'InputFile',
    (values) => values.includes(true)
  );
}

function methodHasFiles(fields: ParsedField[]): boolean {
  return fields.some((field) => fieldHasFiles(field.type));
}

function resolveImports(types: ValueType[]): string {
  const result = types.flatMap((type) => findRefs(type));

  const content = [...new Set(result)]
    .sort((a, b) => a.localeCompare(b))
    .join(',');

  return `import { ${content} } from './types.js';\n`;
}

function createMethodReturnTypeFunction(
  { name, fields, returnType }: Omit<ParsedMethod, 'description'>,
  meta: EmitMeta
) {
  const payloadName = capitalize(name);
  const returnTypeString = valueTypeToString(returnType, meta);

  if (fields.length === 0) {
    return `() => ${returnTypeString}`;
  }

  const payloadModifier = fields.every((field) => field.optional) ? '?' : '';

  return `(payload${payloadModifier}: ${payloadName}) => ${returnTypeString}`;
}

function methodToFileContent(
  { name, fields, description, returnType }: ParsedMethod,
  meta: EmitMeta
): string {
  const payloadName = capitalize(name);

  const returnTypeFunc = createMethodReturnTypeFunction(
    { name, fields, returnType },
    meta
  );

  const hasFiles = methodHasFiles(fields);
  const helperArgs = hasFiles
    ? `'${name}', formDataPayloadTransformer`
    : `'${name}'`;

  let result = '';

  if (fields.length > 0) {
    result += `export type ${payloadName} = ${valueTypeToString({ kind: ValueTypeKind.OBJECT, fields }, meta)};\n\n`;
  }

  result += `${textToTsDocComment(description, { meta })}\n`;
  result += `export const ${name} = /* @__PURE__ */ botMethod<${returnTypeFunc}>(${helperArgs})\n`;

  return result;
}

function exportDefault(methods: ParsedMethod[]): string {
  const sortedMethods = [...methods].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const exportDefaultContent = sortedMethods
    .map((method) => method.name)
    .join(', ');

  return `export default { ${exportDefaultContent} };`;
}

export async function emitMethods(
  { methods }: FullParseResult,
  meta: EmitMeta
) {
  const parts = methods.map((method) => methodToFileContent(method, meta));

  let content = `${GENERATED_HEADER}\n`;
  content += `import { botMethod } from './method.js';\n`;
  content += `import { formDataPayloadTransformer } from './payload.js';`;
  content += resolveImports(
    methods.flatMap((method) => [
      ...method.fields.map((field) => field.type),
      method.returnType,
    ])
  );
  content += '\n';
  content += parts.join('\n');
  content += '\n';
  content += exportDefault(methods);

  content = await prettify(content);

  await fsp.writeFile(path.join(SRC_PATH, 'methods.ts'), content, 'utf8');
}
