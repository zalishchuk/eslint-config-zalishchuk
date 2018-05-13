# eslint-config-zalishchuk

[![Travis CI build](https://img.shields.io/travis/zalishchuk/eslint-config-zalishchuk.svg)](https://travis-ci.org/zalishchuk/eslint-config-zalishchuk)
[![npm version](https://img.shields.io/npm/v/eslint-config-zalishchuk.svg)](https://www.npmjs.com/package/eslint-config-zalishchuk)
[![npm downloads in the last month](https://img.shields.io/npm/dm/eslint-config-zalishchuk.svg)](https://www.npmjs.com/package/eslint-config-zalishchuk)
[![Styled with Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

My own ESLint configuration rules collected from all corners of the universe. 🚀

## Usage

This configuration uses `prettier` for code formatting and contains React&ECMAScript 6+ best practices, possible errors, stylistic issues, etc. It requires some dependencies for advanced ESLint setup:

* [eslint](https://www.npmjs.com/package/eslint)
* [prettier](https://www.npmjs.com/package/prettier)
* [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
* [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
* [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
* [eslint-plugin-flowtype](https://www.npmjs.com/package/eslint-plugin-flowtype) (optional)

### Installation

1.  Install each package specified in peer dependencies, using this command:

```sh
$ yarn add --dev eslint prettier eslint-config-zalishchuk eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-plugin-react
```

Or if you are using npm:

```sh
$ npm install --save-dev eslint prettier eslint-config-zalishchuk eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-plugin-react
```

2.  Add `eslint-config-zalishchuk` to your ESLint configuration [extends](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) section.

```json
{
  "extends": "zalishchuk"
}
```

### Flowtype

1.  Install `eslint-plugin-flowtype` and `babel-eslint` packages, using this command:

```sh
$ yarn add --dev eslint-plugin-flowtype babel-eslint
```

Or if you are using npm:

```sh
$ npm install --save-dev eslint-plugin-flowtype babel-eslint
```

2.  Add `zalishchuk/flowtype` shareable configuration and set `parser` to `babel-eslint` in your ESLint configuration file.

```json
{
  "parser": "babel-eslint",
  "extends": ["zalishchuk", "zalishchuk/flowtype"]
}
```
