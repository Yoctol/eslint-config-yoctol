module.exports = {
  extends: [
    'eslint-config-yoctol-base',
    'eslint-config-yoctol-base/rules/strict',
    'eslint-config-airbnb',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {},
};
