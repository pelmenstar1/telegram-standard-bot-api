// @ts-check

import unicorn from 'eslint-plugin-unicorn';
import prettier from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  {
    ignores: [
      'node_modules',
      'prettier.config.js',
      'eslint.config.js',
      'packages/api/dist',
      'packages/shared/dist',
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  unicorn.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/no-negated-condition': 'off',
      'unicorn/name-replacements': 'off',
      'unicorn/no-useless-recursion': 'off',
      'unicorn/consistent-boolean-name': 'off',
      'unicorn/no-array-reverse': 'off',
      'unicorn/no-array-sort': 'off',
      'unicorn/prefer-global-number-constants': 'off',
      'unicorn/prefer-iterator-to-array': 'off',
      'import/no-anonymous-default-export': 'off',
    },
  },
  // prettier must be at the end
  prettier
);
