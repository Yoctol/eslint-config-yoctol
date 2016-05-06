module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-yoctol-base',
    'eslint-config-yoctol-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {},
};
