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
}

export type PrimitiveTypeKind = 0 | 1 | 2 | 3 | 4 | 5;

export type LiteralValueType = {
  kind: ValueTypeKind.LITERAL;
  value: number | string;
};

export type ValueType =
  | LiteralValueType
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
