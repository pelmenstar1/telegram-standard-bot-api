import { defineConfig, oxlint, oxfmt, knip, tsc } from 'lint-world';

export default defineConfig({
  tools: [oxlint(), oxfmt(), knip(), tsc({ build: 'tsconfig.build.json' })],
});
