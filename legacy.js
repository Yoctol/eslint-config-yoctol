module.exports = {
  extends: [
    'eslint-config-yoctol/rules/best-practices',
    'eslint-config-yoctol/rules/errors',
    'eslint-config-yoctol/rules/legacy',
    'eslint-config-yoctol/rules/node',
    'eslint-config-yoctol/rules/style',
    'eslint-config-yoctol/rules/variables',
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false,
  },
  ecmaFeatures: {},
  globals: {},
  rules: {},
};
