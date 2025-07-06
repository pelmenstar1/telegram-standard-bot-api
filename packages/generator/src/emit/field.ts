import { ParsedField } from '../types';
import { textToTsDocComment } from './comment';
import { ind } from './indent';
import { valueTypeToString } from './valueType';

export function fieldToString(field: ParsedField, indent: number = 0): string {
  const optionalMarker = field.optional ? '?' : '';

  let result = `${ind(indent)}${textToTsDocComment(field.description, { indent })}\n`;
  result += `${ind(indent)}${field.name}${optionalMarker}: ${valueTypeToString(field.type)};`;

  return result;
}
