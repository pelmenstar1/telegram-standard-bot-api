import type { KnipConfig } from 'knip';

export default {
  workspaces: {
    '.': {
      entry: ['lint-world.config.ts'],
    },
    'packages/treeshaking-stats': {
      entry: ['src/fixtures/*.js'],
    },
  },
} satisfies KnipConfig;
