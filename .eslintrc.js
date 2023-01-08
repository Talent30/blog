module.exports = {
  root: true,
  extends: [
    'xo',
    'xo-typescript',
    'xo-react',
    'plugin:unicorn/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:@next/next/recommended',
    'plugin:playwright/playwright-test',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [
    'node_modules',
    '*.config.js',
    '.eslintrc.js',
    'dist',
    'next-env.d.ts',
    '.next',
    '.contentlayer',
  ],
  rules: {
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
    // For App dir
    {
      files: [ '**/*.tsx' ],
      excludedFiles: [ '**/app/**/*.tsx' ],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            case: 'pascalCase',
          },
        ],
      },
    },
  ],
};
