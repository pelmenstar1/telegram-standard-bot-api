import { expect, test } from 'vitest';

import { ParsedField, ValueType, ValueTypeKind } from '../types';
import { parseOnlyForValues, toDiscriminatedUnion } from './discriminatedUnion';

function literal(value: string): ValueType {
  return { kind: ValueTypeKind.LITERAL, value };
}

function literalUnion(values: string[]): ValueType {
  return {
    kind: ValueTypeKind.UNION,
    types: values.map((value) => literal(value)),
  };
}

function required(
  name: string,
  type: ValueType,
  description = ''
): ParsedField {
  return { name, type, optional: false, description };
}

function optional(name: string, description: string): ParsedField {
  return {
    name,
    type: { kind: ValueTypeKind.STRING },
    optional: true,
    description,
  };
}

test.each<[string, string[] | null]>([
  ['For “text_link” only, URL that will be opened', ['text_link']],
  ['For “date_time” only, the Unix time associated', ['date_time']],
  [
    'Information about the paid media; for “paid_media_payment” transactions only',
    ['paid_media_payment'],
  ],
  [
    'Can be available only for “invoice_payment” and “paid_media_payment” transactions.',
    ['invoice_payment', 'paid_media_payment'],
  ],
  [
    'User&#39;s verified email address; available only for “email” type',
    ['email'],
  ],
  [
    'Encrypted file with the selfie; available if requested for “passport”, “driver_license” and “identity_card”.',
    ['passport', 'driver_license', 'identity_card'],
  ],
  // A restriction that names no value cannot narrow anything.
  ['The field is available only for channel chats.', null],
  ['Unique identifier of the message', null],
  // A value merely mentioned in passing is not a restriction.
  ['Poll type, currently can be “regular” or “quiz”', null],
])('parseOnlyForValues', (description, expected) => {
  expect(parseOnlyForValues(description)).toEqual(expected);
});

test('toDiscriminatedUnion splits by the restricted fields', () => {
  const fields = [
    required('type', literalUnion(['plain', 'link', 'mention']), 'Entity type'),
    required('offset', { kind: ValueTypeKind.INT }),
    optional('url', 'For “link” only, the URL'),
    optional('user', 'For “mention” only, the user'),
    optional('note', 'Some unrelated note'),
  ];

  const [type, offset, url, user, note] = fields;

  expect(toDiscriminatedUnion(fields)).toEqual({
    kind: ValueTypeKind.DISCRIMINATED_UNION,
    variants: [
      // The unrestricted fields keep both their place and their order.
      [{ ...type, type: literal('plain') }, offset, note],
      [{ ...type, type: literal('link') }, offset, url, note],
      [{ ...type, type: literal('mention') }, offset, user, note],
    ],
  });
});

test('toDiscriminatedUnion merges values that allow the same fields', () => {
  const fields = [
    required('type', literalUnion(['a', 'b', 'c'])),
    optional('data', 'For “a” and “b” only, the data'),
  ];

  const [type, data] = fields;

  expect(toDiscriminatedUnion(fields)?.variants).toEqual([
    [{ ...type, type: literalUnion(['a', 'b']) }, data],
    [{ ...type, type: literal('c') }],
  ]);
});

test('toDiscriminatedUnion picks the field the restrictions refer to', () => {
  const fields = [
    required('type', literalUnion(['x', 'y'])),
    required('transaction_type', literalUnion(['gift', 'refund'])),
    optional('gift', 'For “gift” transactions only, the gift'),
  ];

  const [type, transactionType, gift] = fields;

  // `type` holds a closed set of values too, but no field is restricted to any
  // of them, so it is left whole.
  expect(toDiscriminatedUnion(fields)?.variants).toEqual([
    [type, { ...transactionType, type: literal('gift') }, gift],
    [type, { ...transactionType, type: literal('refund') }],
  ]);
});

test.each<[string, ParsedField[]]>([
  [
    'no restricted fields',
    [
      required('type', literalUnion(['a', 'b'])),
      optional('data', 'Just some data'),
    ],
  ],
  [
    'no closed set of values',
    [
      required('type', { kind: ValueTypeKind.STRING }),
      optional('data', 'For “a” only, the data'),
    ],
  ],
  [
    'a single literal is not a discriminator',
    [
      required('type', { kind: ValueTypeKind.LITERAL, value: 'a' }),
      optional('data', 'For “a” only, the data'),
    ],
  ],
  [
    'values outside the discriminator set',
    [
      required('type', literalUnion(['a', 'b'])),
      optional('data', 'For “personal_details” only, the data'),
    ],
  ],
  [
    'every value allows the same fields',
    [
      required('type', literalUnion(['a', 'b'])),
      optional('data', 'For “a” and “b” only, the data'),
    ],
  ],
])('toDiscriminatedUnion returns null on %s', (_, fields) => {
  expect(toDiscriminatedUnion(fields)).toBeNull();
});
