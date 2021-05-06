module.exports = {
  parser: '@typescript-eslint/parser', // 解析器
  extends: [
    // 继承的规则 [扩展]
    'eslint-config-airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'react'], // 插件
  rules: {
    //  0 = 允许 1 = 告警  2 = 错误
    '@typescript-eslint/no-unused-vars': 2, // 通过 禁止使用未使用的变量   开发环境告警-生产环境错误
    '@typescript-eslint/explicit-function-return-type': 0, // 通过 在函数和类方法上需要显式的返回类型 https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-module-boundary-types': 0, // 通过 在导出的函数和类的公共类方法上要求显式的返回值和参数类型,确保从模块返回的值属于预期类型。https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
    '@typescript-eslint/no-explicit-any': 0, // 禁止使用any类型 口头协定 能不用就不用
    '@typescript-eslint/no-var-requires': 0, // 除导入语句外，禁止使用require语句
    'react/prop-types': 0, // ？ 防止在React组件定义中缺少验证的props  https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prop-types.md
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }], // 强制使用tsx
    'react/jsx-no-comment-textnodes': 2, // 防止将注释作为文本节点插入  https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-comment-textnodes.md
    'react/prefer-stateless-function': 2, // 无状态组件需要改写为纯函数
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 1, //
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1, //
    'no-alert': 2, // 不使用alert
    'no-use-before-define': 0,
    camelcase: 2, // 变量名不能使用_等形式
    'class-methods-use-this': 0, // ？ 类方法没有使用this可以使其变成静态函数http://www.verydoc.net/eslint/00003327.html
    'func-names': 2, // 给函数表达式以名称方便调试 http://www.verydoc.net/eslint/00003345.html
    'import/no-extraneous-dependencies': 2, // 禁止使用无关的软件包 https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/extensions': 0, // import 忽略后缀名
    'import/no-unresolved': 0, // eslint不识别webpack的路径别名
    'jsx-a11y/no-static-element-interactions': 0, // 禁止给div span等元素添加事件等 https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    'jsx-a11y/click-events-have-key-events': 0, // 强制一个可单击的非交互式元素至少具有一个键盘事件侦听器
    'prefer-destructuring': 0,
    'func-style': 2,
    'prettier/prettier': [
      'error',
      { semi: true, useTabs: false, printWidth: 100, trailingComma: 'none' }
    ] // 使用分号
  }
};
