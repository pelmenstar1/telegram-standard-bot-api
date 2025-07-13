import { expect, test } from 'vitest';

import { ValueType, ValueTypeKind } from '../types';
import { valueTypeToString } from './valueType';

function literal(value: string | number): ValueType {
  return { kind: ValueTypeKind.LITERAL, value };
}

test.each<[ValueType, string]>([
  [literal('123'), "'123'"],
  [literal(123), '123'],
  [literal(1234), '1234'],
  [literal(12_345), '12_345'],
  [literal(123_456), '123_456'],
  [literal(1_234_567), '1_234_567'],
])('emit', (type, expected) => {
  const actual = valueTypeToString(type, { namedTypes: [] });

  expect(actual).toEqual(expected);
});
