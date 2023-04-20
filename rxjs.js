const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    project: path.join(__dirname, './tsconfig.json'),
    sourceType: 'module',
  },
  extends: [],
  plugins: ['rxjs'],
  rules: {
    // 参考 rxjs/recommended: https://github.com/cartant/eslint-plugin-rxjs
    'rxjs/no-async-subscribe': 'warn',
    'rxjs/no-create': 'warn',
    'rxjs/no-ignored-notifier': 'warn',
    'rxjs/no-ignored-replay-buffer': 'warn',
    'rxjs/no-ignored-takewhile-value': 'warn',
    'rxjs/no-implicit-any-catch': 'warn',
    'rxjs/no-index': 'warn',
    'rxjs/no-internal': 'warn',
    'rxjs/no-nested-subscribe': 'warn',
    'rxjs/no-redundant-notify': 'warn',
    'rxjs/no-sharereplay': 'warn',
    'rxjs/no-subject-unsubscribe': 'warn',
    'rxjs/no-unbound-methods': 'warn',
    'rxjs/no-unsafe-subject-next': 'warn',
    'rxjs/no-unsafe-takeuntil': 'warn',
  },
};
