import { LiteralValueType, ValueType, ValueTypeKind } from '../types';

const IMPLICIT_STRING_PREFIX_ENUM = 'must be one of';

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

  return { kind: ValueTypeKind.UNION, types };
}

export function getImplicitStringLiteralType(
  content: string
): ValueType | null {
  const startIndex = content.indexOf(IMPLICIT_STRING_PREFIX_ENUM);
  if (startIndex !== -1) {
    return parseEnum(
      content.slice(startIndex + IMPLICIT_STRING_PREFIX_ENUM.length)
    );
  }

  const match = content.match(/(?:type|Error source).+must be <em>([\w_]+)/i);

  if (match !== null) {
    return { kind: ValueTypeKind.LITERAL, value: match[1] };
  }

  return null;
}
