/*
 * @Description: 模块
 * @Author: DA-HUA
 * @Date: 2020-02-10 16:54:56
 * @LastEditTime: 2020-03-12 14:58:20
 * @LastEditors: 小刀
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "always",
      "asyncArrow": "always"
    }], 
     'semi':['err','always']
  }
}
