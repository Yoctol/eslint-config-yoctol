module.exports = {
  plugins: ['jsx-a11y', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md#rule-details
    // Proposal - https://github.com/Yoctol/eslint-config-yoctol/issues/101
    'jsx-a11y/aria-role': ['error', { ignoreNonDOM: true }],
  },
};
