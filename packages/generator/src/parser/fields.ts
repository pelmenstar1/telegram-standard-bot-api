import { ParsedField, ValueType } from '../types';
import { parseValueType } from './valueType';

function getImplicitStringLiteralType(content: string): ValueType | null {
  let match = content.match(/Type.+must be one of (.+?)\./i);
  if (match !== null) {
    const types: ValueType[] = [...match[1].matchAll(/“([\w/_]+)”/g)].map(
      (part) => ({
        type: 'string-literal',
        value: part[1],
      })
    );

    return { type: 'union', types };
  }

  match = content.match(/type.+must be <em>([\w_]+)/i);

  if (match !== null) {
    return { type: 'string-literal', value: match[1] };
  }

  return null;
}

export function parseTypeTableToFields(content: string): ParsedField[] {
  const rows = [...content.matchAll(/<td>(.*?)<\/td>/gm)];
  const fields: ParsedField[] = [];

  for (let i = 0; i < rows.length; i += 3) {
    const name = rows[i][1];
    const type = rows[i + 1][1];
    const description = rows[i + 2][1];

    const optional = description.startsWith('<em>Optional</em>');

    const fieldType =
      getImplicitStringLiteralType(description) ?? parseValueType(type);

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

    const optional = required === 'Yes';

    fields.push({ name, type: parseValueType(type), optional, description });
  }

  return fields;
}
