import { ValueType, ValueTypeKind } from '../types';
import { fieldToString } from './field';
import { EmitMeta } from './meta';

function formatNumberNotation(value: string): string {
  if (value.length <= 4) {
    return value;
  }

  const parts: string[] = [];

  let i = value.length;

  for (; i >= 0; i -= 3) {
    parts.push(value.slice(Math.max(0, i - 3), i));
  }

  return parts.reverse().filter(Boolean).join('_');
}

export function valueTypeToString(
  valueType: ValueType,
  meta: EmitMeta
): string {
  switch (valueType.kind) {
    case ValueTypeKind.ARRAY: {
      return `${valueTypeToString(valueType.element, meta)}[]`;
    }
    case ValueTypeKind.UNION: {
      const { types } = valueType;

      if (types.length === 0) {
        throw new Error('No types in union');
      }

      const parts = types.map((type) => valueTypeToString(type, meta));

      return [...new Set(parts)].join(' | ');
    }
    case ValueTypeKind.OBJECT: {
      const { fields } = valueType;

      if (fields.length === 0) {
        return `Record<string, never>`;
      }

      let result = `{\n`;
      result += fields.map((field) => fieldToString(field, meta)).join('\n\n');
      result += '\n}';

      return result;
    }
    case ValueTypeKind.REF: {
      return valueType.name;
    }
    case ValueTypeKind.LITERAL: {
      const { value } = valueType;

      return typeof value == 'string'
        ? `'${value}'`
        : formatNumberNotation(value.toString());
    }
    case ValueTypeKind.BOOLEAN: {
      return 'boolean';
    }
    case ValueTypeKind.TRUE: {
      return 'true';
    }
    case ValueTypeKind.FALSE: {
      return 'false';
    }
    case ValueTypeKind.STRING: {
      return 'string';
    }
    case ValueTypeKind.INT:
    case ValueTypeKind.FLOAT: {
      return 'number';
    }
    default: {
      return '';
    }
  }
}
