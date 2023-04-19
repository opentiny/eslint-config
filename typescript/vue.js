module.exports = {
  extends: [
    '../typescript',
    '../vue'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    /**
     * 在TS使用中，enum使用报错，先禁用
     */
    'no-unused-vars': 'off',
  }
};
