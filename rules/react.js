module.exports = {
  'plugins': [
    'react'
  ],
  'ecmaFeatures': {
    'jsx': true
  },
  // View link below for react rules documentation
  // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
  'rules': {
    // Prevent usage of .bind() and arrow functions in JSX props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    // Proposal - https://github.com/Yoctol/eslint-config-yoctol/issues/2
    'react/jsx-no-bind': 0
  }
};
