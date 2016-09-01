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
  rules: {
    // Prevent usage of deprecated methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': ['warn'],

    // only .js files may have JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    // Proposal - https://github.com/Yoctol/eslint-config-yoctol/issues/21
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
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
