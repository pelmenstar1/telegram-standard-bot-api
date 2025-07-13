import { LiteralValueType, ValueType } from '../types';

const IMPLICIT_STRING_PREFIX_ENUM = 'must be one of';

function parseMaybeNumbers(parts: string[]): ValueType[] {
  return parts
    .map(
      (part): LiteralValueType => ({
        type: 'literal',
        value: part.includes('x') ? Number.NaN : Number.parseInt(part),
      })
    )
    .filter(({ value }) => !Number.isNaN(value));
}

function parseStringPart(text: string): ValueType {
  const imgMatch = text.match(/<img .*? alt="(.*?)">/);

  if (imgMatch !== null) {
    return {
      type: 'literal',
      value: imgMatch[1],
    };
  }

  return { type: 'literal', value: text };
}

function parseEnum(text: string): ValueType | null {
  let types: ValueType[] = [...text.matchAll(/“(.*?)”/g)].map((part) =>
    parseStringPart(part[1])
  );

  if (types.length === 0) {
    const parts = [...text.matchAll(/(\d+)\s*\*\s*(\d+)/g)];

    types = parts.map((match) => ({
      type: 'literal',
      value: Number.parseInt(match[1]) * Number.parseInt(match[2]),
    }));
  }

  if (types.length === 0) {
    types = parseMaybeNumbers(
      [...text.matchAll(/[\dabcdefx]+/gi)].map((match) => match[0])
    );
  }

  return { type: 'union', types };
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
    return { type: 'literal', value: match[1] };
  }

  return null;
}
