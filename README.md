# eslint-config-yoctol

> Fork from [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

[![npm version](https://badge.fury.io/js/eslint-config-yoctol.svg)](http://badge.fury.io/js/eslint-config-yoctol)

## Usage

### eslint-config-yoctol

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-yoctol eslint-plugin-react eslint`
2. add `"extends": "yoctol"` to your .eslintrc

### eslint-config-yoctol/base

Lints ES6+ but does not lint React. Requires `eslint`.

1. `npm install --save-dev eslint-config-yoctol eslint`
2. add `"extends": "yoctol/base"` to your .eslintrc

### eslint-config-yoctol/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-yoctol eslint`
2. add `"extends": "yoctol/legacy"` to your .eslintrc

See [Airbnb's Javascript styleguide](https://github.com/yoctol/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Rules be overwrited 

- react/jsx-no-bind: 0
