import { ParsedField } from '../types';
import { textToTsDocComment } from './comment';
import { ind } from './indent';
import { EmitMeta } from './meta';
import { valueTypeToString } from './valueType';

export function fieldToString(
  field: ParsedField,
  meta: EmitMeta,
  indent: number = 0
): string {
  const optionalMarker = field.optional ? '?' : '';

  let result = `${ind(indent)}${textToTsDocComment(field.description, { indent, meta })}\n`;
  result += `${ind(indent)}${field.name}${optionalMarker}: ${valueTypeToString(field.type, meta)};`;

  return result;
}
