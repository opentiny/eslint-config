## Opentiny eslint 规范

ESLint 规则不仅是一套科学的 ESLint 配置规范，而且也是你配置个性化 ESLint 规则的最佳参考。

## 规则列表

| 名称                                      | 包含规则                                                                                                           | 解析器                                      |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [标准规则](#标准规则)                     | [ESLint 规则][]                                                                                                    | [babel-eslint][]                            |
| [React](#react)                           | ESLint 规则、[eslint-plugin-react][]                                                                               | babel-eslint                                |
| [Vue](#vue)                               | ESLint 规则、[eslint-plugin-vue][]                                                                                 | [vue-eslint-parser][]                       |
| [TypeScript](#typescript)                 | ESLint 规则、[@typescript-eslint][]                                                                                | [@typescript-eslint/parser][]               |
| [TypeScript Vue](#typescript-vue)         | ESLint 规则、@typescript-eslint、eslint-plugin-vue                                                                 | vue-eslint-parser @typescript-eslint/parser |
| [TypeScript React](#typescript-react)     | ESLint 规则、@typescript-eslint、eslint-plugin-react                                                               | @typescript-eslint/parser                   |
| [TypeScript Angular](#typescript-angular) | ESLint 规则、@typescript-eslint、[@angular-eslint/eslint-plugin](https://github.com/angular-eslint/angular-eslint) | @typescript-eslint/parser                   |

[babel-eslint]: https://github.com/babel/babel-eslint
[vue-eslint-parser]: https://github.com/mysticatea/vue-eslint-parser
[@typescript-eslint/parser]: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
[eslint 规则]: https://eslint.org/docs/rules/
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[eslint-plugin-vue]: https://eslint.vuejs.org/rules/
[@typescript-eslint]: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
[@angular-eslint/eslint-plugin]: https://github.com/angular-eslint/angular-eslint

### 使用方法

#### 自动安装（强烈推荐）

执行`$ tiny lint init`，可自动安装 eslint 的运行环境到项目中。

- 需先确保本机已安装 TinyCLI，[TinyCLI 安装方式请点击此处](https://opentiny.design/tiny-cli/docs/start#Installed)
- TinyCLI 中 lint 插件文档：[TinyCLI lint 规范工具](https://opentiny.design/tiny-cli/docs/plugin/lint)

#### 手动安装

```bash
npm install --save-dev eslint babel-eslint @opentiny/eslint-config
```

#### 相关依赖参考

如果 eslint 运行有问题，建议使用如下依赖：

```
 *   eslint 7.16.0
 *   babel-eslint 10.1.0
 *   eslint-plugin-react 7.21.5
 *   vue-eslint-parser 7.3.0
 *   eslint-plugin-vue 7.3.0
 *   @typescript-eslint/parser 4.11.0
 *   @typescript-eslint/eslint-plugin 4.11.0
 *   eslint-plugin-rxjs  3.3.5
```

### 标准规则

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
  extends: ['@opentiny/eslint-config'],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // jQuery: false,
    // $: false
  },
  rules: {
    // 这里填入你的项目需要的个性化配置，比如：
    //
    // // 一个缩进必须用两个空格替代
    // 'indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ]
  }
}
```

### React

安装：

```bash
npm install --save-dev eslint babel-eslint eslint-plugin-react @opentiny/eslint-config
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
  extends: ['@opentiny/eslint-config/react'],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // React: false,
    // ReactDOM: false
  },
  rules: {
    // 这里填入你的项目需要的个性化配置，比如：
    //
    // // 一个缩进必须用两个空格替代
    // 'indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ],
    // // jsx 的 children 缩进必须为两个空格
    // 'react/jsx-indent': [
    //     'error',
    //     2
    // ],
    // // jsx 的 props 缩进必须为两个空格
    // 'react/jsx-indent-props': [
    //     'error',
    //     2
    // ]
  }
}
```

### Vue

安装：

```bash
npm install --save-dev eslint babel-eslint vue-eslint-parser eslint-plugin-vue @opentiny/eslint-config
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
  extends: ['@opentiny/eslint-config/vue'],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // Vue: false
  },
  rules: {
    // 这里填入你的项目需要的个性化配置，比如：
    //
    // // @fixable 一个缩进必须用两个空格替代
    // 'indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ]
  }
}
```

### TypeScript

安装：

```bash
npm install --save-dev eslint babel-eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin @opentiny/eslint-config
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
  extends: ['@opentiny/eslint-config/typescript'],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // jQuery: false,
    // $: false
  },
  rules: {
    // 这里填入你的项目需要的个性化配置，比如：
    //
    // // 一个缩进必须用两个空格替代
    // 'indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ]
    // // 一个缩进必须用两个空格替代
    // '@typescript-eslint/indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ]
  }
}
```

### TypeScript Vue

安装：

```bash
npm install --save-dev eslint babel-eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-vue vue-eslint-parser  @opentiny/eslint-config
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
  extends: ['@opentiny/eslint-config/typescript/vue'],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // jQuery: false,
    // $: false
  },
  rules: {
    // 这里填入你的项目需要的个性化配置，比如：
    //
    // // 一个缩进必须用两个空格替代
    // 'indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ]
    // // 一个缩进必须用两个空格替代
    // '@typescript-eslint/indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ]
  }
}
```

### TypeScript React

安装：

```bash
npm install --save-dev eslint babel-eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react @opentiny/eslint-config
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
  extends: ['@opentiny/eslint-config/typescript/react'],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // jQuery: false,
    // $: false
  },
  rules: {
    // 这里填入你的项目需要的个性化配置，比如：
    //
    // // 一个缩进必须用两个空格替代
    // 'indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ]
    // // 一个缩进必须用两个空格替代
    // '@typescript-eslint/indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ]
  }
}
```

### TypeScript Angular

安装：

```bash
npm install --save-dev eslint babel-eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin @angular-eslint/eslint-plugin eslint-plugin-rxjs @opentiny/eslint-config
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
  extends: [
    '@opentiny/eslint-config/angular',
    '@opentiny/eslint-config/rxjs'
  ],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // jQuery: false,
    // $: false
  },
  rules: {
    // 这里填入你的项目需要的个性化配置，比如：
    //
    // // 一个缩进必须用两个空格替代
    // 'indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ]
    // // 一个缩进必须用两个空格替代
    // '@typescript-eslint/indent': [
    //     'error',
    //     2,
    //     {
    //         SwitchCase: 1,
    //         flatTernaryExpressions: true
    //     }
    // ]
  }
}
```