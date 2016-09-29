# eslint-config-yoctol

> Fork from [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][david_img]][david_site]

## Usage

### eslint-config-yoctol

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

1. Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=eslint-config-yoctol;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-yoctol eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

2. Add `"extends": "yoctol"` to your .eslintrc

### eslint-config-yoctol/base

This entry point is deprecated. See [eslint-config-yoctol-base](https://npmjs.com/eslint-config-yoctol-base).

### eslint-config-yoctol/legacy

This entry point is deprecated. See [eslint-config-yoctol-base](https://npmjs.com/eslint-config-yoctol-base).

See [Airbnb's Javascript styleguide](https://github.com/yoctol/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Rules be overwritted

#### react

```
- react/sort-prop-types: ['error', {
  callbacksLast: true,
  ignoreCase: false,
  requiredFirst: false,
}]
- react/no-deprecated: ['warn']
- react/prefer-stateless-function: 'off'
- react/jsx-filename-extension: ['error', { extensions: ['.js'] }]
```

[npm-image]: https://badge.fury.io/js/eslint-config-yoctol.svg
[npm-url]: https://npmjs.org/package/eslint-config-yoctol
[travis-image]: https://travis-ci.org/Yoctol/eslint-config-yoctol.svg
[travis-url]: https://travis-ci.org/Yoctol/eslint-config-yoctol
[david_img]: https://david-dm.org/Yoctol/eslint-config-yoctol.svg
[david_site]: https://david-dm.org/Yoctol/eslint-config-yoctol
