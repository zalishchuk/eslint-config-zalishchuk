const restrictedGlobals = require('eslint-restricted-globals');

module.exports = {
  'init-declarations': 'off',
  'no-catch-shadow': 'error',
  'no-delete-var': 'error',
  'no-label-var': 'error',
  'no-restricted-globals': ['error', ...restrictedGlobals],
  'no-shadow': [
    'error',
    {
      builtinGlobals: false,
      hoist: 'functions',
      allow: [],
    },
  ],
  'no-shadow-restricted-names': 'error',
  'no-undef': ['error', { typeof: true }],
  'no-undef-init': 'error',
  'no-undefined': 'error',
  'no-unused-vars': [
    'error',
    {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true,
      caughtErrors: 'none',
    },
  ],
  'no-use-before-define': [
    'error',
    { functions: true, classes: true, variables: true },
  ],
};
