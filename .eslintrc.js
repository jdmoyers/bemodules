module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['standard', 'plugin:jest/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never']
  }
};
