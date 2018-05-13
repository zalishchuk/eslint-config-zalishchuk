const pluginFlowtype = require('./rules/plugin-flowtype');
const pluginFlowtypeSettings = require('./settings/plugin-flowtype');

module.exports = {
  extends: ['prettier/flowtype'],
  plugins: ['flowtype'],
  settings: Object.assign(pluginFlowtypeSettings),
  rules: Object.assign(pluginFlowtype),
};
