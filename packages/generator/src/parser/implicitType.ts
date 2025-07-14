import { LiteralValueType, ValueType, ValueTypeKind } from '../types';

const IMPLICIT_STRING_ENUM_PREFIXES = ['must be one of', 'Entities other than'];

const parseMode: ValueType = {
  kind: ValueTypeKind.UNION,
  types: ['HTML', 'Markdown', 'MarkdownV2'].map((value) => ({
    kind: ValueTypeKind.LITERAL,
    value,
  })),
};

function parseMaybeNumbers(parts: string[]): ValueType[] {
  return parts
    .map(
      (part): LiteralValueType => ({
        kind: ValueTypeKind.LITERAL,
        value: part.includes('x') ? Number.NaN : Number.parseInt(part),
      })
    )
    .filter(({ value }) => !Number.isNaN(value));
}

function parseStringPart(text: string): ValueType {
  const imgMatch = text.match(/<img .*? alt="(.*?)" \/>/);
  const value = imgMatch !== null ? imgMatch[1] : text;

  return { kind: ValueTypeKind.LITERAL, value };
}

function parseEnum(text: string): ValueType | null {
  let types: ValueType[] = [...text.matchAll(/“(.*?)”/g)].map((part) =>
    parseStringPart(part[1])
  );

  if (types.length === 0) {
    const parts = [...text.matchAll(/(\d+)\s*\*\s*(\d+)/g)];

    types = parts.map((match) => ({
      kind: ValueTypeKind.LITERAL,
      value: Number.parseInt(match[1]) * Number.parseInt(match[2]),
    }));
  }

  if (types.length === 0) {
    types = parseMaybeNumbers(
      [...text.matchAll(/[\dabcdefx]+/gi)].map((match) => match[0])
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

  let match = content.match(/(?:type|Error source).+must be <em>([\w_]+)/i);
  if (match === null) {
    match = content.match(/always “(.*?)”/i);
  }

  if (match !== null) {
    return { kind: ValueTypeKind.LITERAL, value: match[1] };
  }

  return null;
}
