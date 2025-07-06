import { PrimitiveTypeName, ValueType } from '../types';

const primitiveTypes: Record<string, PrimitiveTypeName | undefined> = {
  String: 'string',
  Integer: 'int',
  Float: 'float',
  Boolean: 'boolean',
  True: 'true',
  False: 'false',
};

const primitiveTypeNames = new Set<PrimitiveTypeName>([
  'string',
  'int',
  'float',
  'boolean',
  'true',
  'false',
]);

const ARRAY_PREFIX = 'Array of';

const REF_REGEX = /<a.*?>(.*?)<\/a>/;

export function parseValueType(content: string): ValueType {
  content = content.trim();

  const primitiveType = primitiveTypes[content];
  if (primitiveType !== undefined) {
    return { type: primitiveType };
  }

  if (content.startsWith(ARRAY_PREFIX)) {
    return {
      type: 'array',
      element: parseValueType(content.slice(ARRAY_PREFIX.length)),
    };
  }

  const unionParts = content.split(' or ');
  if (unionParts.length > 1) {
    return {
      type: 'union',
      types: unionParts.map((part) => parseValueType(part)),
    };
  }

  const refResult = content.match(REF_REGEX);

  if (refResult !== null) {
    return {
      type: 'ref',
      name: refResult[1],
    };
  }

  throw new Error(`Unknown type '${content}'`);
}

export function parseMethodDataToType(value: string): ValueType {
  if (primitiveTypeNames.has(value as PrimitiveTypeName)) {
    return { type: value as PrimitiveTypeName };
  }

  const unionParts = value.split('|');
  if (unionParts.length > 1) {
    return {
      type: 'union',
      types: unionParts.map((part) => parseMethodDataToType(part.trim())),
    };
  }

  const arraySpecIndex = value.indexOf('[]');
  if (arraySpecIndex > 0) {
    const elementName = value.slice(0, arraySpecIndex);

    return parseMethodDataToType(elementName);
  }

  return { type: 'ref', name: value };
}
