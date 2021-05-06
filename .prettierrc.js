module.exports = {
  printWidth: 100, //  超过最大值换行。 默认80
  tabWidth: 2, // tab缩进大小,默认为2
  useTabs: false, // 使用tab缩进，默认false
  semi: true, // 使用分号, 默认true
  singleQuote: true, // 使用单引号, 默认false(在jsx中配置无效jsxSingleQuote, 默认都是双引号)
  jsxSingleQuote: true,// jsx/tsx中使用单引号
  trailingComma: 'none', // 行尾逗号,默认none,可选 none|es5|all  es5 包括es5中的数组、对象  all 包括函数对象等所有可选
  jsxBracketSameLine: true, // JSX标签闭合位置 默认false true 闭合标签不换行 flase闭合标签换行
  arrowParens: 'always' // 箭头函数参数括号 默认avoid 可选 avoid| always avoid 能省略括号的时候就省略 例如x => x  always 总是有括号
}