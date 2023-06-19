const ERROR = 'error';
const OFF = 'off';

module.exports = {
  env: {
    es6: true,
    es2017: true,
    es2020: true,
    commonjs: true,
    node: true,
    mocha: true,
  },
  extends: ['standard', 'plugin:chai-friendly/recommended', 'eslint:recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    project: ['tsconfig.json'],
  },
  plugins: ['chai-friendly', 'mocha', 'unicorn'],
  rules: {
    // eslint
    'no-process-env': ERROR,
    'no-console': ERROR,
    'no-unused-expression': OFF,
    'no-inner-declarations': OFF,
    'no-useless-constructor': OFF,
    'no-redeclare': OFF,
    // unicorn
    'unicorn/explicit-length-check': [ERROR],
    // typescript
    '@typescript-eslint/no-floating-promises': [ERROR],
  },
};
