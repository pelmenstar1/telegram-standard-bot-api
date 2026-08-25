import { expect, test } from 'vitest';
import { OutputOptions, rollup } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import path from 'node:path';
import fsp from 'node:fs/promises';

test('treeshaking works', async () => {
  const outputDir = path.join(import.meta.dirname, '../dist');
  const output: OutputOptions = {
    dir: outputDir,
    format: 'es',
  };

  const b = await rollup({
    input: [path.join(import.meta.dirname, 'index.ts')],
    plugins: [resolve()],
    output,
  });

  await b.write(output);

  const outputIndexPath = path.join(outputDir, 'index.js');
  const outputIndexContent = await fsp.readFile(outputIndexPath, 'utf-8');

  expect(outputIndexContent).toEqual('\n');
});
