import { ValueType } from '../types';
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
  meta: EmitMeta,
  indent: number = 0
): string {
  switch (valueType.type) {
    case 'array': {
      return `${valueTypeToString(valueType.element, meta)}[]`;
    }
    case 'union': {
      const { types } = valueType;

      if (types.length === 0) {
        throw new Error('No types in union');
      }

      const parts = types.map((type) => valueTypeToString(type, meta));

      return [...new Set(parts)].join(' | ');
    }
    case 'object': {
      const { fields } = valueType;

      if (fields.length === 0) {
        return `Record<string, never>`;
      }

      let result = `{\n`;
      result += fields
        .map((field) => fieldToString(field, meta, indent + 2))
        .join('\n\n');
      result += '\n}';

      return result;
    }
    case 'ref': {
      return valueType.name;
    }
    case 'int':
    case 'float': {
      return 'number';
    }
    case 'literal': {
      const { value } = valueType;

      return typeof value == 'string'
        ? `'${value}'`
        : formatNumberNotation(value.toString());
    }
    default: {
      return valueType.type;
    }
  }
}
