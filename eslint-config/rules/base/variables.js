module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'off',
    'no-undef-init': 'off',
    'no-undefined': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'off',
      { functions: true, classes: true, variables: true },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/array-type': [2, { default: 'array-simple' }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['snake_case', 'UPPER_CASE'],
      },
    ],
  },
};
