module.exports = {
  'import/resolver': {
    node: {
      extensions: ['.js', '.mjs', '.json'],
    },
  },
  'import/extensions': ['.js', '.mjs', '.jsx'],
  'import/core-modules': [],
  'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
  'import/external-module-folders': ['node_modules'],
};
