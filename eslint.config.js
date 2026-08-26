// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  {
    ignores: [
      'node_modules',
      'prettier.config.js',
      'eslint.config.js',
      'vitest.config.ts',
      'lint-world.config.ts',
      'knip.config.ts',
      'packages/*/dist',
      '**/fixtures/**',
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowNumber: true, allowBoolean: true },
      ],
    },
  }
);
