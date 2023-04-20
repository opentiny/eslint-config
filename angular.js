module.exports = {
  env: {
    jasmine: true,
  },
  extends: ['./typescript'],
  plugins: ['@angular-eslint/eslint-plugin'],
  rules: {
    /**
     * 禁止出现没必要的 constructor
     * @reason angular场景下，constructor为空的情况很多，也是官方推荐的用法
     */
    '@typescript-eslint/no-useless-constructor': 'error',
    /**
     * 禁止出现没必要的 constructor
     * @reason angular场景下，constructor为空的情况很多，也是官方推荐的用法
     */
    'no-useless-constructor': 'error',

    /**
     * 函数的参数禁止超过 5 个，不适合angular场景
     */
    'max-params': 'error',
  },
};
