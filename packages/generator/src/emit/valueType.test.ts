import { expect, test } from 'vitest';

import { ParsedField, ValueType, ValueTypeKind } from '../types';
import { valueTypeToString } from './valueType';

function literal(value: string | number): ValueType {
  return { kind: ValueTypeKind.LITERAL, value };
}

function field(name: string, type: ValueType, optional: boolean): ParsedField {
  return { name, type, optional, description: '' };
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

test('emit discriminated union', () => {
  const actual = valueTypeToString(
    {
      kind: ValueTypeKind.DISCRIMINATED_UNION,
      variants: [
        [field('type', literal('plain'), false)],
        [
          field('type', literal('link'), false),
          field('url', { kind: ValueTypeKind.STRING }, true),
        ],
      ],
    },
    { namedTypes: [] }
  );

  // The blank lines are where the doc comments of the fields would go; the
  // layout itself is left to prettier.
  expect(actual).toEqual(
    [
      '{',
      '',
      `type: 'plain';`,
      '}|{',
      '',
      `type: 'link';`,
      '',
      '',
      'url?: string | undefined;',
      '}',
    ].join('\n')
  );
});
