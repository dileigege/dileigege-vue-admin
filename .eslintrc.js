/*
 * @Description: 模块
 * @Author: DA-HUA
 * @Date: 2020-02-10 16:54:56
 * @LastEditTime: 2020-03-21 14:16:25
 * @LastEditors: 项目组长
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
    semi: 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'always',
      asyncArrow: 'always'
    }]
    //  'semi':['err','always']
  }
}
