import { expect, test } from 'vitest';

import { bumpMinor } from './version';

test('bumpMinor', () => {
  const actual = bumpMinor('1.0.3');

  expect(actual).toBe('1.1.0');
});
