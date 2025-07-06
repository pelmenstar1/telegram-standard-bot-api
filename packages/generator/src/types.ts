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

export type PrimitiveTypeName =
  | 'int'
  | 'float'
  | 'string'
  | 'boolean'
  | 'true'
  | 'false';

export type ValueType =
  | {
      type: PrimitiveTypeName;
    }
  | {
      type: 'array';
      element: ValueType;
    }
  | {
      type: 'ref';
      name: string;
    }
  | {
      type: 'union';
      types: ValueType[];
    }
  | {
      type: 'object';
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
