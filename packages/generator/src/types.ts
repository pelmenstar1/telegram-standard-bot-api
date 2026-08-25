export type ParsedField = {
  name: string;
  type: ValueType;
  optional: boolean;
  description: string;
};

export type ParsedMethod = {
  name: string;
  description: string;
  fields: ParsedField[];
  returnType: ValueType;
};

export const enum ValueTypeKind {
  INT = 0,
  FLOAT = 1,
  STRING = 2,
  BOOLEAN = 3,
  TRUE = 4,
  FALSE = 5,
  LITERAL = 6,
  ARRAY = 7,
  REF = 8,
  UNION = 9,
  OBJECT = 10,
  RAW = 11,
  DISCRIMINATED_UNION = 12,
}

export type PrimitiveTypeKind = 0 | 1 | 2 | 3 | 4 | 5;

export type LiteralValueType = {
  kind: ValueTypeKind.LITERAL;
  value: number | string;
};

export type DiscriminatedUnionValueType = {
  kind: ValueTypeKind.DISCRIMINATED_UNION;

  /**
   * The complete shape of every variant, in the field order of the object they
   * were split out of. The discriminator is narrowed to the values its variant
   * covers, and the fields that belong to other values are left out.
   */
  variants: ParsedField[][];
};

export type ValueType =
  | LiteralValueType
  | DiscriminatedUnionValueType
  | {
      kind: PrimitiveTypeKind;
    }
  | {
      kind: ValueTypeKind.ARRAY;
      element: ValueType;
    }
  | {
      kind: ValueTypeKind.REF;
      name: string;
    }
  | {
      kind: ValueTypeKind.UNION;
      types: ValueType[];
    }
  | {
      kind: ValueTypeKind.OBJECT;
      fields: ParsedField[];
    }
  | {
      kind: ValueTypeKind.RAW;
      expression: string;
    };

export type NamedType = {
  name: string;
  description: string;
  underlyingType: ValueType;
};

export type FullParseResult = {
  types: NamedType[];
  methods: ParsedMethod[];
};
