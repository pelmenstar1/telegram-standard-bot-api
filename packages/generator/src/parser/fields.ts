import { ParsedField, ValueType, ValueTypeKind } from '../types';
import { getImplicitStringLiteralType } from './implicitType';
import { ParserMeta } from './meta';
import { parseValueType } from './valueType';

type FieldInput = {
  name: string;
  description: string;
  type: string;
};

// Fields that accept only a few currencies list them instead of referring to
// the whole set of supported ones, e.g. "must be one of “XTR” or “TON”".
const CURRENCY_ENUM_PATTERN = /(?:must be )?one of (.+)/i;
const QUOTED_PATTERN = /“(.*?)”/g;

function parseCurrencyType(description: string, meta: ParserMeta): ValueType {
  const enumMatch = description.match(CURRENCY_ENUM_PATTERN);
  const listed =
    enumMatch === null
      ? []
      : Array.from(enumMatch[1].matchAll(QUOTED_PATTERN), ([, value]) => value);

  const values = listed.length > 0 ? listed : [...meta.currencies, 'XTR'];

  return {
    kind: ValueTypeKind.UNION,
    types: values.map((value) => ({
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

function parseFieldType(
  { name, description, type }: FieldInput,
  meta: ParserMeta
): ValueType {
  switch (name) {
    case 'currency': {
      return parseCurrencyType(description, meta);
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

export function parseTypeTableToFields(
  content: string,
  meta: ParserMeta
): ParsedField[] {
  const rows = [...content.matchAll(/<td>(.*?)<\/td>/gm)];
  const fields: ParsedField[] = [];

  for (let i = 0; i < rows.length; i += 3) {
    const name = rows[i][1];
    const type = rows[i + 1][1];
    const description = rows[i + 2][1];

    const optional = description.startsWith('<em>Optional</em>');

    const fieldType = parseFieldType({ name, description, type }, meta);

    fields.push({ name, type: fieldType, optional, description });
  }

  return fields;
}

export function parseMethodTableToFields(
  content: string,
  meta: ParserMeta
): ParsedField[] {
  const rows = [...content.matchAll(/<td>(.*?)<\/td>/gm)];
  const fields: ParsedField[] = [];

  for (let i = 0; i < rows.length; i += 4) {
    const name = rows[i][1];
    const type = rows[i + 1][1];
    const required = rows[i + 2][1];
    const description = rows[i + 3][1];

    const optional = required !== 'Yes';

    const fieldType = parseFieldType({ name, description, type }, meta);

    fields.push({ name, type: fieldType, optional, description });
  }

  return fields;
}
