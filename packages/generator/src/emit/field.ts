import { ParsedField } from '../types';
import { textToTsDocComment } from './comment';
import { EmitMeta } from './meta';
import { valueTypeToString } from './valueType';

export function fieldToString(field: ParsedField, meta: EmitMeta): string {
  const optionalMarker = field.optional ? '?' : '';

  let result = `${textToTsDocComment(field.description, { meta })}\n`;
  result += `${field.name}${optionalMarker}: ${valueTypeToString(field.type, meta)};`;

  return result;
}
