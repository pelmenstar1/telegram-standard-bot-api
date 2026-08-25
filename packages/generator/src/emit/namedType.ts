import fsp from 'node:fs/promises';
import path from 'node:path';

import { FullParseResult, NamedType, ValueType, ValueTypeKind } from '../types';
import { prettify } from '../utils/prettify';
import { textToTsDocComment } from './comment';
import { GENERATED_HEADER } from './constants';
import { EmitMeta } from './meta';
import { valueTypeToString } from './valueType';

function getTypeFieldNames(type: ValueType): string[] {
  switch (type.kind) {
    case ValueTypeKind.OBJECT: {
      return type.fields.map(({ name }) => name);
    }
    case ValueTypeKind.DISCRIMINATED_UNION: {
      const result = new Set<string>();

      for (const variant of type.variants) {
        for (const { name } of variant) {
          result.add(name);
        }
      }

      return [...result];
    }
    default: {
      return [];
    }
  }
}

function namedTypeToString(type: NamedType, meta: EmitMeta): string {
  try {
    const { name, underlyingType, description } = type;

    const comment = textToTsDocComment(description, {
      meta,
      typeName: name,
      fieldNames: getTypeFieldNames(underlyingType),
    });

    let result = `${comment}\n`;
    result += `export type ${name} = ${valueTypeToString(underlyingType, meta)};`;

    return result;
  } catch (error) {
    throw new Error(`Failed to emit named type "${type.name}"`, {
      cause: error,
    });
  }
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
