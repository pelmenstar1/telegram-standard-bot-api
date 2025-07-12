import { FullParseResult } from '../types';
import { EmitMeta } from './meta';
import { emitMethods } from './method';
import { emitNamedTypes } from './namedType';

export async function emitParsedResult(result: FullParseResult) {
  const meta: EmitMeta = {
    namedTypes: result.types.map(({ name }) => name),
  };

  await Promise.all([emitNamedTypes(result, meta), emitMethods(result, meta)]);
}
