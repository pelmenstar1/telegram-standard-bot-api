import { expect, test } from 'vitest';

import { ValueType, ValueTypeKind } from '../types';
import { parseTypeTableToFields } from './fields';

function typeTableRow(name: string, type: string, description: string): string {
  return `<td>${name}</td><td>${type}</td><td>${description}</td>`;
}

function parseSingleFieldType(description: string): ValueType {
  const fields = parseTypeTableToFields(
    typeTableRow('currency', 'String', description)
  );

  return fields[0].type;
}

test('a currency field refers to the virtual Currency type', () => {
  const type = parseSingleFieldType(
    'Three-letter ISO 4217 currency code, see more on currencies'
  );

  expect(type).toEqual({ kind: ValueTypeKind.REF, name: 'Currency' });
});

// The listed codes are not always ISO 4217 ones, so they cannot be narrowed
// down from Currency and stay spelled out.
test('a currency field listing its codes keeps them inline', () => {
  const type = parseSingleFieldType(
    'Currency in which the post will be paid, must be one of “XTR” or “TON”'
  );

  expect(type).toEqual({
    kind: ValueTypeKind.UNION,
    types: [
      { kind: ValueTypeKind.LITERAL, value: 'XTR' },
      { kind: ValueTypeKind.LITERAL, value: 'TON' },
    ],
  });
});
