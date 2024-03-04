module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'linebreak-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
  },
};
