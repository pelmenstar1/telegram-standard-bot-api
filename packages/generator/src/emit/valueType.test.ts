import { expect, test } from 'vitest';

import { ValueType, ValueTypeKind } from '../types';
import { valueTypeToString } from './valueType';

function literal(value: string | number): ValueType {
  return { kind: ValueTypeKind.LITERAL, value };
}

function array(element: ValueType): ValueType {
  return { kind: ValueTypeKind.ARRAY, element };
}

function union(types: ValueType[]): ValueType {
  return { kind: ValueTypeKind.UNION, types };
}

test.each<[ValueType, string]>([
  [literal('123'), "'123'"],
  [literal(123), '123'],
  [literal(1234), '1234'],
  [literal(12_345), '12_345'],
  [literal(123_456), '123_456'],
  [literal(1_234_567), '1_234_567'],
  [array({ kind: ValueTypeKind.STRING }), '(string)[]'],
  [array(union([{ kind: ValueTypeKind.REF, name: 'First' }])), '(First)[]'],
  [
    array(
      union([
        { kind: ValueTypeKind.REF, name: 'First' },
        { kind: ValueTypeKind.REF, name: 'Second' },
      ])
    ),
    '(First | Second)[]',
  ],
])('emit', (type, expected) => {
  const actual = valueTypeToString(type, { namedTypes: [] });

  expect(actual).toEqual(expected);
});
