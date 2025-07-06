import { expectTypeOf, test } from 'vitest';

import methods from '../../../api/src/methods';
import methodsData from '../../data/methods.json';

type MethodType = keyof typeof methods;

test('all methods', () => {
  expectTypeOf(methodsData).toExtend<Record<MethodType, string>>();
});
