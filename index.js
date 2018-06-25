const node = require('./rules/node');
const es6 = require('./rules/ecmascript-6');
const variables = require('./rules/variables');
const strictMode = require('./rules/strict-mode');
const pluginReact = require('./rules/plugin-react');
const pluginImport = require('./rules/plugin-import');
const bestPractices = require('./rules/best-practices');
const pluginPrettier = require('./rules/plugin-prettier');
const possibleErrors = require('./rules/possible-errors');
const stylisticIssues = require('./rules/stylistic-issues');
const pluginImportSettings = require('./settings/plugin-import');
const pluginReactSettings = require('./settings/plugin-react');

module.exports = {
  extends: ['prettier', 'prettier/react'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: ['react', 'import', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
  },
  settings: Object.assign(pluginImportSettings, pluginReactSettings),
  rules: Object.assign(
    es6,
    node,
    variables,
    strictMode,
    pluginReact,
    pluginImport,
    bestPractices,
    pluginPrettier,
    possibleErrors,
    stylisticIssues,
  ),
};
