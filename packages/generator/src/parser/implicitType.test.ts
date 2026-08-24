import { expect, test } from 'vitest';

import { ValueType, ValueTypeKind } from '../types';
import { getImplicitStringLiteralType } from './implicitType';

function union(values: (string | number)[]): ValueType {
  return {
    kind: ValueTypeKind.UNION,
    types: values.map((value) => ({ kind: ValueTypeKind.LITERAL, value })),
  };
}

test.each<[string, ValueType | null]>([
  ['Mode for parsing entities', union(['HTML', 'Markdown', 'MarkdownV2'])],
  ['Type of the sticker, must be one of “mask”', union(['mask'])],
  [
    'Period in seconds; must be one of 6 * 3600, 12 * 3600, 86400, or 2 * 86400',
    union([21_600, 43_200, 86_400, 172_800]),
  ],
  [
    'Color in RGB format; must be one of 7322096 (0x6FB9F0) or 16766590 (0xFFD67E)',
    union([7_322_096, 16_766_590]),
  ],
  [
    'Type of the chat, can be either “private”, “group” or “channel”',
    union(['private', 'group', 'channel']),
  ],
  [
    'The section which has the error, one of “passport”, “address”',
    union(['passport', 'address']),
  ],
  // A description that only mentions values does not describe the field itself.
  ['Encrypted data; available only for “personal_details”, “passport”', null],
  ['Unique identifier of the message', null],
])('getImplicitStringLiteralType', (input, expected) => {
  const actual = getImplicitStringLiteralType(input);

  expect(actual).toEqual(expected);
});
