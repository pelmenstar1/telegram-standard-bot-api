import { ValueType } from '../types';
import { fieldToString } from './field';
import { EmitMeta } from './meta';

export function valueTypeToString(
  value: ValueType,
  meta: EmitMeta,
  indent: number = 0
): string {
  switch (value.type) {
    case 'array': {
      return `${valueTypeToString(value.element, meta)}[]`;
    }
    case 'union': {
      if (value.types.length === 0) {
        throw new Error('No types in union');
      }

      return value.types
        .map((type) => valueTypeToString(type, meta))
        .join(' | ');
    }
    case 'object': {
      if (value.fields.length === 0) {
        return `Record<string, never>`;
      }

      let result = `{\n`;
      result += value.fields
        .map((field) => fieldToString(field, meta, indent + 2))
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
