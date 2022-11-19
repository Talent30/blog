module.exports = {
  root: true,
  extends: [
    'xo',
    'xo-typescript',
    'xo-react',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:unicorn/recommended',
    'plugin:@next/next/recommended',
    'plugin:playwright/playwright-test',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [ '.ts', '.tsx' ],
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [ './tsconfig.json' ],
  },
  ignorePatterns: [
    'node_modules',
    '*.config.js',
    '.eslintrc.js',
    'dist',
    'next-env.d.ts',
    '.next',
  ],
  rules: {
    'prefer-arrow-callback': 'error',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          getServerSideProps: true,
          props: true,
          ref: true,
          refs: true,
        },
      },
    ],
  },
  overrides: [
    // For React
    {
      files: [ '**/*.tsx' ],
      excludedFiles: [ '**/pages/**/*.tsx', '**/pages/**/*.ts' ],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            case: 'pascalCase',
          },
        ],
      },
    }, ]
};
