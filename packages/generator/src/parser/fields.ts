import { ParsedField, ValueType, ValueTypeKind } from '../types';
import { getImplicitStringLiteralType } from './implicitType';
import { parseValueType } from './valueType';
import { CURRENCY_TYPE_NAME } from './virtualTypes';

type FieldInput = {
  name: string;
  description: string;
  type: string;
};

// Fields that accept only a few currencies list them instead of referring to
// the whole set of supported ones, e.g. "must be one of “XTR” or “TON”".
const CURRENCY_ENUM_PATTERN = /(?:must be )?one of (.+)/i;
const QUOTED_PATTERN = /“(.*?)”/g;

function parseCurrencyType(description: string): ValueType {
  const enumMatch = description.match(CURRENCY_ENUM_PATTERN);
  const listed =
    enumMatch === null
      ? []
      : Array.from(enumMatch[1].matchAll(QUOTED_PATTERN), ([, value]) => value);

  // The listed codes are not always ISO 4217 ones, e.g. "TON", so a narrowed
  // set cannot be expressed in terms of the whole one.
  if (listed.length === 0) {
    return { kind: ValueTypeKind.REF, name: CURRENCY_TYPE_NAME };
  }

  return {
    kind: ValueTypeKind.UNION,
    types: listed.map((value) => ({
      kind: ValueTypeKind.LITERAL,
      value,
    })),
  };
}

// A description that enumerates allowed values only narrows the declared type
// when that type is a primitive. For example, `text_entities` is declared as
// `Array of MessageEntity` while its description lists the entity types that
// are not ignored.
const narrowableKinds = new Set<ValueTypeKind>([
  ValueTypeKind.STRING,
  ValueTypeKind.INT,
  ValueTypeKind.FLOAT,
]);

function isNarrowableByDescription({ kind }: ValueType): boolean {
  return narrowableKinds.has(kind);
}

function parseFieldType({ name, description, type }: FieldInput): ValueType {
  switch (name) {
    case 'currency': {
      return parseCurrencyType(description);
    }
    case 'allowed_updates': {
      return {
        kind: ValueTypeKind.RAW,
        expression: `Exclude<keyof Update, 'update_id'>[]`,
      };
    }
    default: {
      const declaredType = parseValueType(type);

      if (!isNarrowableByDescription(declaredType)) {
        return declaredType;
      }

      return getImplicitStringLiteralType(description) ?? declaredType;
    }
  }
}

export function parseTypeTableToFields(content: string): ParsedField[] {
  const rows = [...content.matchAll(/<td>(.*?)<\/td>/gm)];
  const fields: ParsedField[] = [];

  for (let i = 0; i < rows.length; i += 3) {
    const name = rows[i][1];
    const type = rows[i + 1][1];
    const description = rows[i + 2][1];

    const optional = description.startsWith('<em>Optional</em>');

    const fieldType = parseFieldType({ name, description, type });

    fields.push({ name, type: fieldType, optional, description });
  }

  return fields;
}

export function parseMethodTableToFields(content: string): ParsedField[] {
  const rows = [...content.matchAll(/<td>(.*?)<\/td>/gm)];
  const fields: ParsedField[] = [];

  for (let i = 0; i < rows.length; i += 4) {
    const name = rows[i][1];
    const type = rows[i + 1][1];
    const required = rows[i + 2][1];
    const description = rows[i + 3][1];

    const optional = required !== 'Yes';

    const fieldType = parseFieldType({ name, description, type });

    fields.push({ name, type: fieldType, optional, description });
  }

  return fields;
}
