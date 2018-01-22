module.exports = {
  camelcase: ['error', { properties: 'never' }],
  'capitalized-comments': 'off',
  'consistent-this': ['error', 'that'],
  'func-name-matching': [
    'error',
    'always',
    {
      includeCommonJSModuleExports: false,
    },
  ],
  'func-names': ['warn', 'always'],
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  'id-blacklist': 'off',
  'id-length': 'off',
  'id-match': 'off',
  'line-comment-position': [
    'error',
    {
      position: 'above',
      applyDefaultIgnorePatterns: true,
    },
  ],
  'linebreak-style': ['error', 'unix'],
  'lines-between-class-members': [
    'error',
    'always',
    { exceptAfterSingleLine: false },
  ],
  'max-depth': ['error', { max: 5 }],
  'max-lines': 'off',
  'max-nested-callbacks': ['error', { max: 5 }],
  'max-params': 'off',
  'max-statements': 'off',
  'max-statements-per-line': 'off',
  'multiline-comment-style': ['off', 'starred-block'],
  'new-cap': [
    'error',
    {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: [],
      properties: true,
    },
  ],
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  'no-continue': 'error',
  'no-inline-comments': 'off',
  'no-lonely-if': 'error',
  'no-multi-assign': 'error',
  'no-negated-condition': 'off',
  'no-nested-ternary': 'warn',
  'no-new-object': 'error',
  'no-plusplus': 'error',
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'ForOfStatement',
      message:
        'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    },
    {
      selector: 'LabeledStatement',
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],
  'no-ternary': 'off',
  'no-underscore-dangle': [
    'off',
    {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: false,
    },
  ],
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'one-var': [
    'error',
    {
      var: 'never',
      let: 'never',
      const: 'never',
      separateRequires: true,
    },
  ],
  'operator-assignment': ['error', 'always'],
  // TODO: review padding-line-between-statements rule
  'padding-line-between-statements': 'off',
  'require-jsdoc': 'off',
  'sort-keys': ['off', 'asc', { caseSensitive: true, natural: true }],
  'sort-vars': ['off', { ignoreCase: false }],
  'spaced-comment': [
    'error',
    'always',
    {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'],
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'],
        balanced: true,
      },
    },
  ],
};
