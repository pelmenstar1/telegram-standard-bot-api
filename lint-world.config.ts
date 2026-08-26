import { defineConfig, eslint, prettier, knip, tsc } from 'lint-world';

export default defineConfig({
  tools: [
    eslint(),
    prettier({ target: '**/*.{js,ts,md,json,yml}', cache: true }),
    knip(),
    tsc({ build: 'tsconfig.build.json' }),
  ],
});
