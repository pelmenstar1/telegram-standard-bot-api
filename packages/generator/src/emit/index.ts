import { FullParseResult } from '../types';
import { emitMethods } from './method';
import { emitNamedTypes } from './namedType';

export async function emitParsedResult(result: FullParseResult) {
  await Promise.all([emitNamedTypes(result), emitMethods(result)]);
}
