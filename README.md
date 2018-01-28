# eslint-config-yoctol

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Greenkeeper badge](https://badges.greenkeeper.io/Yoctol/eslint-config-yoctol.svg)](https://greenkeeper.io/)
[![Dependency Status][david_img]][david_site]

> Yoctol Info. ESLint config, fork from [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

## Usage

### eslint-config-yoctol

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-jsx-a11y` and `eslint-plugin-prettier`.

1. Install the correct versions of each package, which are listed by the command:


```sh
npm info "eslint-config-yoctol@latest" peerDependencies
```

Linux/OSX users can simply run

```sh
(
  export PKG=eslint-config-yoctol;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Which produces and runs a command like:

```sh
npm install --save-dev eslint-config-yoctol eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-prettier@^#.#.#
```

Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

```sh
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-yoctol
```

The cli will produce and run a command like:

```sh
npm install --save-dev eslint-config-yoctol eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-prettier@^#.#.#
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
