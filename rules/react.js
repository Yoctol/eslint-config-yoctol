module.exports = {
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  ecmaFeatures: {
    jsx: true
  },

  // View link below for react rules documentation
  // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
  'rules': {
    // Allow usage of .bind() and arrow functions in JSX props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    // Proposal - https://github.com/Yoctol/eslint-config-yoctol/issues/2
    'react/jsx-no-bind': 0,

    // Prevent usage of deprecated methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': [1, { react: '15.0.0' }],
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json']
      }
    },
    react: {
      pragma: 'React',
      version: '15'
    },
  }
};
