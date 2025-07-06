import fsp from 'node:fs/promises';
import path from 'node:path';

import { FullParseResult, NamedType, ValueType } from '../types';
import { prettify } from '../utils/prettify';
import { textToTsDocComment } from './comment';
import { GENERATED_HEADER } from './constants';
import { valueTypeToString } from './valueType';

function getTypeFieldNames(type: ValueType): string[] {
  return type.type === 'object' ? type.fields.map(({ name }) => name) : [];
}

function namedTypeToString(type: NamedType): string {
  const { name, underlyingType, description } = type;

  const comment = textToTsDocComment(description, {
    typeName: name,
    fieldNames: getTypeFieldNames(underlyingType),
  });

  let result = `${comment}\n`;
  result += `export type ${name} = ${valueTypeToString(underlyingType)};`;

  return result;
}

function emitToString(types: NamedType[]): string {
  const content = types.map((type) => namedTypeToString(type)).join('\n\n');

  return `${GENERATED_HEADER}${content}\n`;
}

export async function emitNamedTypes(result: FullParseResult) {
  let content = emitToString(result.types);
  content = await prettify(content);

  const filePath = path.join('../api/src/types.generated.ts');

  await fsp.writeFile(filePath, content);
}
