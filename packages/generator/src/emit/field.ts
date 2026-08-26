import { ParsedField } from '../types';
import { textToTsDocComment } from './comment';
import { EmitMeta } from './meta';
import { valueTypeToString } from './valueType';

export function fieldToString(field: ParsedField, meta: EmitMeta): string {
  let result = `${textToTsDocComment(field.description, { meta })}\n${field.name}`;
  if (field.optional) {
    result += '?';
  }
  result += `: ${valueTypeToString(field.type, meta)}`;
  if (field.optional) {
    result += ' | undefined';
  }

  result += ';';

  return result;
}
