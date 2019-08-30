module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint-config-yoctol-base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ].map(require.resolve),
  plugins: ['@typescript-eslint'],
  rules: {},
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
