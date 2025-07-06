import { ParsedField } from '../types';
import { parseValueType } from './valueType';

export function parseTypeTableToFields(content: string): ParsedField[] {
  const rows = [...content.matchAll(/<td>(.*?)<\/td>/gm)];
  const fields: ParsedField[] = [];

  for (let i = 0; i < rows.length; i += 3) {
    const name = rows[i][1];
    const type = rows[i + 1][1];
    const description = rows[i + 2][1];

    const optional = description.startsWith('<em>Optional</em>');

    fields.push({ name, type: parseValueType(type), optional, description });
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
