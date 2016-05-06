module.exports = {
  extends: [
    'eslint-config-yoctol/base',
    'eslint-config-airbnb/rules/strict',
    'eslint-config-airbnb/rules/react',
    'eslint-config-yoctol/rules/strict',
    'eslint-config-yoctol/rules/react',
  ].map(require.resolve),
  rules: {},
};
