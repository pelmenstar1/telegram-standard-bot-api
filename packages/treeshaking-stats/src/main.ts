import { OutputOptions, rollup } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import path from 'node:path';
import fsp from 'node:fs/promises';

async function main() {
  const fixturesPath = path.join(import.meta.dirname, 'fixtures');
  const entries = await fsp.readdir(fixturesPath);

  for (const entry of entries) {
    const entryPath = path.join(fixturesPath, entry);
    const outputDir = path.join(import.meta.dirname, '../dist');
    const output: OutputOptions = {
      dir: outputDir,
      format: 'es',
    };

    const b = await rollup({
      input: [entryPath],
      plugins: [resolve(), terser()],
      output,
    });

    await b.write(output);

    const outputIndexPath = path.join(outputDir, entry);
    const outputFileStat = await fsp.stat(outputIndexPath);

    console.log(`Output for ${entry}: ${outputFileStat.size} bytes`);
  }
}

void main();
