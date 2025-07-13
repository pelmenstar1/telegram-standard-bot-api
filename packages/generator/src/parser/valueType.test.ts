import { expect, test } from 'vitest';

import { ValueType, ValueTypeKind } from '../types';
import { parseValueType } from './valueType';

test.each<[string, ValueType]>([
  ['String', { kind: ValueTypeKind.STRING }],
  ['Boolean', { kind: ValueTypeKind.BOOLEAN }],
  ['Integer', { kind: ValueTypeKind.INT }],
  ['Float', { kind: ValueTypeKind.FLOAT }],
  ['True', { kind: ValueTypeKind.TRUE }],
  ['False', { kind: ValueTypeKind.FALSE }],
  [
    '  Array of String ',
    { kind: ValueTypeKind.ARRAY, element: { kind: ValueTypeKind.STRING } },
  ],
  ['<a>Some_Object</a>', { kind: ValueTypeKind.REF, name: 'Some_Object' }],
  [
    'String or Integer',
    {
      kind: ValueTypeKind.UNION,
      types: [{ kind: ValueTypeKind.STRING }, { kind: ValueTypeKind.INT }],
    },
  ],
  [
    'String or <a>InputFile</a>',
    {
      kind: ValueTypeKind.UNION,
      types: [
        { kind: ValueTypeKind.STRING },
        { kind: ValueTypeKind.REF, name: 'InputFile' },
      ],
    },
  ],
])('parseValueType', (input, expected) => {
  const actual = parseValueType(input);

  expect(actual).toEqual(expected);
});
