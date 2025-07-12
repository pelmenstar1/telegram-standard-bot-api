import fsp from 'node:fs/promises';

import {
  FullParseResult,
  ParsedField,
  ParsedMethod,
  ValueType,
} from '../types';
import { prettify } from '../utils/prettify';
import { capitalize } from '../utils/string';
import { textToTsDocComment } from './comment';
import { GENERATED_HEADER } from './constants';
import { EmitMeta } from './meta';
import { valueTypeToString } from './valueType';

const METHODS_PATH = '../api/src/methods';

function applyToType<T>(
  value: ValueType,
  apply: (type: ValueType) => T,
  reduce: (values: T[]) => T
): T {
  if (value.type === 'array') {
    return applyToType(value.element, apply, reduce);
  }

  if (value.type === 'union') {
    return reduce(
      value.types.flatMap((type) => applyToType(type, apply, reduce))
    );
  }

  return apply(value);
}

function findRefs(value: ValueType): string[] {
  return applyToType(
    value,
    (value) => (value.type === 'ref' ? [value.name] : []),
    (values) => values.flat()
  );
}

function fieldHasFiles(value: ValueType): boolean {
  return applyToType(
    value,
    (value) => value.type === 'ref' && value.name === 'InputFile',
    (values) => values.includes(true)
  );
}

function methodHasFiles(fields: ParsedField[]): boolean {
  return fields.some((field) => fieldHasFiles(field.type));
}

function resolveImports(types: ValueType[]): string[] {
  const result = types.flatMap((type) => findRefs(type));

  return [...new Set(result)].sort((a, b) => a.localeCompare(b));
}

function methodToFileContent(
  { name, fields, description, returnType }: ParsedMethod,
  meta: EmitMeta
): string {
  const payloadName = capitalize(name);
  const imports = resolveImports([
    ...fields.map(({ type }) => type),
    returnType,
  ]);

  const returnTypeString = valueTypeToString(returnType, meta);

  const helperInvokation =
    fields.length > 0
      ? `botMethod<${payloadName}, ${returnTypeString}>`
      : `botMethod<${returnTypeString}>`;

  const hasFiles = methodHasFiles(fields);
  const helperArgs = hasFiles
    ? `'${name}', formDataPayloadTransformer`
    : `'${name}'`;

  let result = GENERATED_HEADER;

  result += `import { botMethod } from '../method';\n`;

  if (hasFiles) {
    result += `import { formDataPayloadTransformer } from '../payload'\n`;
  }

  if (imports.length > 0) {
    result += `import { ${imports.join(', ')} } from '../types';\n`;
  }

  result += '\n';

  if (fields.length > 0) {
    result += `export type ${payloadName} = ${valueTypeToString({ type: 'object', fields }, meta)};\n\n`;
  }

  result += `${textToTsDocComment(description, { meta })}\n`;
  result += `export const ${name} = ${helperInvokation}(${helperArgs})\n`;

  return result;
}

function getMethodFilePath(name: string) {
  return `${METHODS_PATH}/${name}.ts`;
}

async function createIndexFile(methods: ParsedMethod[]): Promise<string> {
  const sortedMethods = [...methods].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const exportDefaultContent = sortedMethods
    .map((method) => method.name)
    .join(', ');

  let content = '// This file is generated. Do not edit.\n\n';
  content += sortedMethods
    .map(({ name, fields }) => {
      const items = fields.length > 0 ? [capitalize(name), name] : [name];

      return `import { ${name} } from './${name}';\nexport { ${items.join(', ')} } from './${name}';`;
    })
    .join('\n');
  content += `export default { ${exportDefaultContent} };`;
  content += '\n';

  return prettify(content);
}

export async function emitMethods(result: FullParseResult, meta: EmitMeta) {
  await fsp.mkdir(METHODS_PATH, { recursive: true });

  await Promise.all(
    result.methods.map(async (method) => {
      let content = methodToFileContent(method, meta);
      content = await prettify(content);

      await fsp.writeFile(getMethodFilePath(method.name), content);
    })
  );

  await fsp.writeFile(
    getMethodFilePath('index'),
    await createIndexFile(result.methods)
  );
}
