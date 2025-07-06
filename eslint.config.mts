import unicorn from 'eslint-plugin-unicorn';
import prettier from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'node_modules',
      'prettier.config.mjs',
      'eslint.config.mts',
      'packages/api/dist',
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
        project: [
          './tsconfig.json',
        ],
        tsconfigRootDir: __dirname,
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
      'import/no-anonymous-default-export': 'off',
    },
  },
  // prettier must be at the end
  prettier
);
