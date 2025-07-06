import { expect, test } from 'vitest';

import { ValueType } from '../types';
import { parseValueType } from './valueType';

test.each<[string, ValueType]>([
  ['String', { type: 'string' }],
  ['Boolean', { type: 'boolean' }],
  ['Integer', { type: 'int' }],
  ['Float', { type: 'float' }],
  ['True', { type: 'true' }],
  ['False', { type: 'false' }],
  ['  Array of String ', { type: 'array', element: { type: 'string' } }],
  ['<a>Some_Object</a>', { type: 'ref', name: 'Some_Object' }],
  [
    'String or Integer',
    { type: 'union', types: [{ type: 'string' }, { type: 'int' }] },
  ],
  [
    'String or <a>InputFile</a>',
    {
      type: 'union',
      types: [{ type: 'string' }, { type: 'ref', name: 'InputFile' }],
    },
  ],
])('parseValueType', (input, expected) => {
  const actual = parseValueType(input);

  expect(actual).toEqual(expected);
});
