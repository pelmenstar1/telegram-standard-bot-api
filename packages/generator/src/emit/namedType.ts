import fsp from 'node:fs/promises';
import path from 'node:path';

import { FullParseResult, NamedType, ValueType } from '../types';
import { prettify } from '../utils/prettify';
import { textToTsDocComment } from './comment';
import { GENERATED_HEADER } from './constants';
import { EmitMeta } from './meta';
import { valueTypeToString } from './valueType';

function getTypeFieldNames(type: ValueType): string[] {
  return type.type === 'object' ? type.fields.map(({ name }) => name) : [];
}

function namedTypeToString(type: NamedType, meta: EmitMeta): string {
  const { name, underlyingType, description } = type;

  const comment = textToTsDocComment(description, {
    meta,
    typeName: name,
    fieldNames: getTypeFieldNames(underlyingType),
  });

  let result = `${comment}\n`;
  result += `export type ${name} = ${valueTypeToString(underlyingType, meta)};`;

  return result;
}

function emitToString(types: NamedType[], meta: EmitMeta): string {
  const content = types
    .map((type) => namedTypeToString(type, meta))
    .join('\n\n');

  return `${GENERATED_HEADER}${content}\n`;
}

export async function emitNamedTypes(result: FullParseResult, meta: EmitMeta) {
  let content = emitToString(result.types, meta);
  content = await prettify(content);

  const filePath = path.join('../api/src/types.generated.ts');

  await fsp.writeFile(filePath, content);
}
