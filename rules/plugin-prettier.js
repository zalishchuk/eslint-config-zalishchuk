module.exports = {
  'prettier/prettier': [
    'error',
    {
      singleQuote: true,
      printWidth: 80,
      useTabs: false,
      tabWidth: 2,
      semi: true,
      trailingComma: 'all',
      bracketSpacing: true,
      jsxBracketSameLine: false,
      parser: 'babylon',
      arrowParens: 'avoid',
    },
  ],
};
