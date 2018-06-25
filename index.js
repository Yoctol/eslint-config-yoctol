module.exports = {
  extends: [
    'eslint-config-yoctol-base',
    'eslint-config-yoctol-base/rules/strict',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    './rules/react',
    './rules/react-a11y',
    'eslint-config-prettier/react',
  ].map(require.resolve),
  rules: {},
};
