import { PrimitiveTypeKind, ValueType, ValueTypeKind } from '../types';

const primitiveTypes: Record<string, PrimitiveTypeKind | undefined> = {
  String: ValueTypeKind.STRING,
  Integer: ValueTypeKind.INT,
  Float: ValueTypeKind.FLOAT,
  Boolean: ValueTypeKind.BOOLEAN,
  True: ValueTypeKind.TRUE,
  False: ValueTypeKind.FALSE,
};

const primitiveTypeDataNames: Record<string, PrimitiveTypeKind | undefined> = {
  string: ValueTypeKind.STRING,
  int: ValueTypeKind.INT,
  float: ValueTypeKind.FLOAT,
  boolean: ValueTypeKind.BOOLEAN,
  true: ValueTypeKind.TRUE,
  false: ValueTypeKind.FALSE,
};

const ARRAY_PREFIX = 'Array of';

const REF_REGEX = /<a.*?>(.*?)<\/a>/;

export function parseValueType(content: string): ValueType {
  content = content.trim();

  const primitiveType = primitiveTypes[content];
  if (primitiveType !== undefined) {
    return { kind: primitiveType };
  }

  if (content.startsWith(ARRAY_PREFIX)) {
    return {
      kind: ValueTypeKind.ARRAY,
      element: parseValueType(content.slice(ARRAY_PREFIX.length)),
    };
  }

  const unionParts = content.split(' or ');
  if (unionParts.length > 1) {
    return {
      kind: ValueTypeKind.UNION,
      types: unionParts.map((part) => parseValueType(part)),
    };
  }

  const refResult = content.match(REF_REGEX);

  if (refResult !== null) {
    return {
      kind: ValueTypeKind.REF,
      name: refResult[1],
    };
  }

  throw new Error(`Unknown type '${content}'`);
}

export function parseMethodDataToType(value: string): ValueType {
  const primitiveTypeKind = primitiveTypeDataNames[value];
  if (primitiveTypeKind !== undefined) {
    return { kind: primitiveTypeKind };
  }

  const unionParts = value.split('|');
  if (unionParts.length > 1) {
    return {
      kind: ValueTypeKind.UNION,
      types: unionParts.map((part) => parseMethodDataToType(part.trim())),
    };
  }

  const arraySpecIndex = value.indexOf('[]');
  if (arraySpecIndex > 0) {
    const elementName = value.slice(0, arraySpecIndex);

    return {
      kind: ValueTypeKind.ARRAY,
      element: parseMethodDataToType(elementName),
    };
  }

  return { kind: ValueTypeKind.REF, name: value };
}
