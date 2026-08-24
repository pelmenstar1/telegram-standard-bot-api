import { PrimitiveTypeKind, ValueType, ValueTypeKind } from '../types';

const primitiveTypes: Record<string, PrimitiveTypeKind | undefined> = {
  String: ValueTypeKind.STRING,
  Int: ValueTypeKind.INT,
  Integer: ValueTypeKind.INT,
  Float: ValueTypeKind.FLOAT,
  Boolean: ValueTypeKind.BOOLEAN,
  True: ValueTypeKind.TRUE,
  False: ValueTypeKind.FALSE,
};

const ARRAY_PATTERN = /(?:an )?array of (.+)/i;

const REF_PATTERN = /<a.*?>(.*?)<\/a>/;
const EM_PATTERN = /<em.*?>(.*?)<\/em>/;

// An enumeration of alternatives, e.g. "InputMediaAudio, InputMediaDocument
// and InputMediaPhoto". Splitting it apart is only safe when every part is a
// type on its own, as the separators are common in the surrounding prose too.
const ENUM_SEPARATOR_PATTERN = /\s*,\s*|\s+(?:and|or)\s+/;
const SIMPLE_TYPE_PATTERN = /^(?:<a.*?>.*?<\/a>|[A-Z]\w*)$/;

export function parseValueType(content: string): ValueType {
  content = content.trim();

  const emMatch = content.match(EM_PATTERN);
  if (emMatch !== null) {
    return parseValueType(emMatch[1]);
  }

  const primitiveType = primitiveTypes[content];
  if (primitiveType !== undefined) {
    return { kind: primitiveType };
  }

  const arrayMatch = content.match(ARRAY_PATTERN);

  if (arrayMatch !== null) {
    return {
      kind: ValueTypeKind.ARRAY,
      element: parseValueType(arrayMatch[1]),
    };
  }

  const enumParts = content.split(ENUM_SEPARATOR_PATTERN).filter(Boolean);
  if (
    enumParts.length > 1 &&
    enumParts.every((part) => SIMPLE_TYPE_PATTERN.test(part))
  ) {
    return {
      kind: ValueTypeKind.UNION,
      types: enumParts.map((part) => parseValueType(part)),
    };
  }

  const unionParts = content.split(' or ');
  if (unionParts.length > 1) {
    return {
      kind: ValueTypeKind.UNION,
      types: unionParts.map((part) => parseValueType(part)),
    };
  }

  const refResult = content.match(REF_PATTERN);

  if (refResult !== null) {
    let name = refResult[1];

    if (name === 'Messages') {
      name = 'Message';
    }

    return {
      kind: ValueTypeKind.REF,
      name,
    };
  }

  throw new Error(`Unknown type '${content}'`);
}
