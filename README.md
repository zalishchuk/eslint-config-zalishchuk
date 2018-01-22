# eslint-config-zalishchuk

[![npm version](https://img.shields.io/npm/v/eslint-config-zalishchuk.svg)](https://www.npmjs.com/package/eslint-config-zalishchuk)
[![npm downloads in the last month](https://img.shields.io/npm/dm/eslint-config-zalishchuk.svg)](https://www.npmjs.com/package/eslint-config-zalishchuk)
[![styled with prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

My own configuration collected from the best places in the universe. 🚀

## Usage

This configuration uses `prettier` for code formatting and contains React&ECMAScript 6+ best practices, possible errors, stylistic issues, etc. It requires some dependencies for advanced ESLint setup:

* [eslint](https://www.npmjs.com/package/eslint)
* [prettier](https://www.npmjs.com/package/prettier)
* [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
* [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
* [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)

### Installation

1. Install each package specified in peer dependencies, using this command:

```sh
$ yarn add --dev eslint prettier eslint-config-zalishchuk eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-plugin-react
```

Or if you are using npm:

```sh
$ npm install --save-dev eslint prettier eslint-config-zalishchuk eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-plugin-react
```

2. Add `eslint-config-zalishchuk` to your ESLint configuration [extends](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) section.

```json
{
  "extends": "zalishchuk"
}
```
