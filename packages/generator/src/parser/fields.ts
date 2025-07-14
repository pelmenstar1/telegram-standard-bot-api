import { ParsedField, ValueType, ValueTypeKind } from '../types';
import { getImplicitStringLiteralType } from './implicitType';
import { ParserMeta } from './meta';
import { parseValueType } from './valueType';

type FieldInput = {
  name: string;
  description: string;
  type: string;
};

function parseFieldType(
  { name, description, type }: FieldInput,
  meta: ParserMeta
): ValueType {
  if (name === 'currency') {
    return {
      kind: ValueTypeKind.UNION,
      types: [...meta.currencies, 'XTR'].map((value) => ({
        kind: ValueTypeKind.LITERAL,
        value,
      })),
    };
  }

  return getImplicitStringLiteralType(description) ?? parseValueType(type);
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
