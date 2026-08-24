import { LiteralValueType, ValueType, ValueTypeKind } from '../types';

const IMPLICIT_STRING_ENUM_PREFIXES = ['must be one of', 'Entities other than'];

// Wordings that introduce the closed set of values a field holds, e.g. "can be
// “private”, “group”…", "Must be either “approve” or “decline”" or "Poll type,
// “quiz” or “regular”". The quoted list has to follow right away, so that a
// description merely mentioning some values, like "available only for
// “personal_details”", is left alone.
const ENUM_ANCHOR_PATTERN =
  /(?:one of|either|can be|\btype,)\s*(?:the following)?[:,]?\s*(“.*)/is;

const parseMode: ValueType = {
  kind: ValueTypeKind.UNION,
  types: ['HTML', 'Markdown', 'MarkdownV2'].map((value) => ({
    kind: ValueTypeKind.LITERAL,
    value,
  })),
};

function parseMaybeNumbers(parts: string[]): ValueType[] {
  return parts
    .map((part): LiteralValueType => ({
      kind: ValueTypeKind.LITERAL,
      value: part.includes('x') ? Number.NaN : Number.parseInt(part),
    }))
    .filter(({ value }) => !Number.isNaN(value));
}

const NUMBER_PRODUCT_PATTERN = /\d+\s*\*\s*\d+/;
const NUMBER_TERM_PATTERN = /\d+(?:\s*\*\s*\d+)*/g;

function parseNumberTerm(term: string): number {
  const factors = term.split('*').map((factor) => Number.parseInt(factor));

  return factors.reduce((result, factor) => result * factor);
}

// Such a list can mix products with plain numbers,
// e.g. "must be one of 6 * 3600, 12 * 3600, 86400, or 2 * 86400".
function parseNumberProducts(text: string): ValueType[] {
  if (NUMBER_PRODUCT_PATTERN.test(text)) {
    return Array.from(text.matchAll(NUMBER_TERM_PATTERN), ([term]) => ({
      kind: ValueTypeKind.LITERAL,
      value: parseNumberTerm(term),
    }));
  }

  return [];
}

function parseStringPart(text: string): ValueType {
  const imgMatch = text.match(/<img .*? alt="(.*?)" \/>/);
  const value = imgMatch !== null ? imgMatch[1] : text;

  return { kind: ValueTypeKind.LITERAL, value };
}

function parseEnum(text: string): ValueType | null {
  let types = Array.from(text.matchAll(/“(.*?)”/g), (part) =>
    parseStringPart(part[1])
  );

  if (types.length === 0) {
    types = parseNumberProducts(text);
  }

  if (types.length === 0) {
    types = parseMaybeNumbers(
      Array.from(text.matchAll(/[\dabcdefx]+/gi), (match) => match[0])
    );
  }

  if (types.length === 0) {
    return null;
  }

  return { kind: ValueTypeKind.UNION, types };
}

export function getImplicitStringLiteralType(
  content: string
): ValueType | null {
  if (content.includes('Mode for parsing entities')) {
    return parseMode;
  }

  let matchString = IMPLICIT_STRING_ENUM_PREFIXES[0];
  let startIndex = -1;

  for (const prefix of IMPLICIT_STRING_ENUM_PREFIXES) {
    matchString = prefix;

    startIndex = content.indexOf(matchString);
    if (startIndex !== -1) {
      break;
    }
  }

  if (startIndex !== -1) {
    return parseEnum(content.slice(startIndex + matchString.length));
  }

  const anchorMatch = content.match(ENUM_ANCHOR_PATTERN);
  if (anchorMatch !== null) {
    return parseEnum(anchorMatch[1]);
  }

  let match = content.match(/(?:type|Error source).+must be <em>([\w_]+)/i);
  if (match === null) {
    match = content.match(/always “(.*?)”/i);
  }

  if (match !== null) {
    return { kind: ValueTypeKind.LITERAL, value: match[1] };
  }

  return null;
}
