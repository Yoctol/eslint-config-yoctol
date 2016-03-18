module.exports = {
  extends: [
    'eslint-config-yoctol/legacy',
    'eslint-config-yoctol/rules/es6',
  ].map(require.resolve),
  rules: {},
};
