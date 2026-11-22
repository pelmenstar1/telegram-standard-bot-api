import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['typescript', 'eslint', 'unicorn', 'node', 'vitest'],
  categories: {
    perf: 'error',
    correctness: 'error',
    restriction: 'error',
  },
  options: {
    typeAware: true,
  },
  rules: {
    'no-undefined': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-await-in-loop': 'off',
    'typescript/explicit-function-return-type': 'off',
    'typescript/explicit-module-boundary-types': 'off',
    'typescript/explicit-member-accessibility': 'off',
    'typescript/non-nullable-type-assertion-style': 'off',
    'vitest/require-test-timeout': 'off',

    'no-use-before-define': ['error', { functions: false }],
    'no-void': ['error', { allowAsStatement: true }],

    eqeqeq: 'error',
    radix: 'error',
    'no-duplicate-imports': 'error',
    'typescript/return-await': 'error',
    'typescript/no-unsafe-enum-assignment': 'error',
    'typescript/no-unnecessary-condition': 'error',
    'typescript/no-unsafe-assignment': 'error',
    'typescript/no-unsafe-call': 'error',
    'typescript/no-unsafe-member-access': 'error',
    'typescript/no-unsafe-argument': 'error',
    'typescript/no-unsafe-return': 'error',
    'typescript/no-unnecessary-type-assertion': 'error',
    'typescript/no-misused-promises': 'error',
    'typescript/restrict-template-expressions': [
      'error',
      {
        allowAny: false,
        allowBoolean: true,
        allowNever: false,
        allowNullish: false,
        allowNumber: true,
        allowRegExp: false,
      },
    ],
    'typescript/consistent-type-imports': [
      'error',
      { fixStyle: 'inline-type-imports' },
    ],
    'typescript/switch-exhaustiveness-check': [
      'error',
      { considerDefaultExhaustiveForUnions: true },
    ],
    'typescript/prefer-nullish-coalescing': [
      'error',
      { ignoreIfStatements: true },
    ],
  },
  overrides: [
    {
      files: ['**/packages/generator/**', '**/packages/treeshaking-stats/**'],
      rules: { 'no-console': 'off' },
    },
    {
      files: ['**/packages/treeshaking-stats/src/fixtures/**'],
      rules: { 'node/no-top-level-await': 'off' },
    },
    {
      files: ['**/__tests__/**', '**/*.test.ts'],
      rules: {
        'node/no-process-env': 'off',
        'typescript/promise-function-async': 'off',
      },
    },
    {
      files: ['**/*.test-d.ts'],
      rules: { 'vitest/expect-expect': 'off' },
    },
  ],
});
