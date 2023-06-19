module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['import', 'simple-import-sort'],
  extends: ['plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // Already checked by Typescript
    'import/named': 'off',
    'import/no-unresolved': 'off',
    // disabled
    'import/no-anonymous-default-export': 'off',
  },
};
