import { ValueType } from '../types';
import { fieldToString } from './field';

export function valueTypeToString(
  value: ValueType,
  indent: number = 0
): string {
  switch (value.type) {
    case 'array': {
      return `${valueTypeToString(value.element)}[]`;
    }
    case 'union': {
      if (value.types.length === 0) {
        throw new Error('No types in union');
      }

      return value.types.map((type) => valueTypeToString(type)).join(' | ');
    }
    case 'object': {
      if (value.fields.length === 0) {
        return `Record<string, never>`;
      }

      let result = `{\n`;
      result += value.fields
        .map((field) => fieldToString(field, indent + 2))
        .join('\n\n');
      result += '\n}';

      return result;
    }
    case 'ref': {
      return value.name;
    }
    case 'boolean': {
      return 'boolean';
    }
    case 'false': {
      return 'false';
    }
    case 'float': {
      return 'number';
    }
    case 'int': {
      return 'number';
    }
    case 'string': {
      return 'string';
    }
    case 'string-literal': {
      return `'${value.value}'`;
    }
    case 'true': {
      return 'true';
    }
  }
}
