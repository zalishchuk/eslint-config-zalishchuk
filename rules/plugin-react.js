module.exports = {
  'react/boolean-prop-naming': [
    'error',
    {
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
    },
  ],
  'react/default-props-match-prop-types': [
    'error',
    {
      allowRequiredDefaults: false,
    },
  ],
  'react/jsx-boolean-value': ['error', 'never'],
  'react/button-has-type': 'error',
  'react/destructuring-assignment': 'off',
  'react/display-name': [
    'off',
    {
      ignoreTranspilerName: false,
    },
  ],
  'react/forbid-component-props': 'off',
  'react/forbid-dom-props': 'off',
  'react/forbid-elements': 'off',
  'react/forbid-prop-types': [
    'warn',
    {
      forbid: ['any', 'array', 'object'],
    },
  ],
  'react/forbid-foreign-prop-types': 'error',
  'react/no-access-state-in-setstate': 'error',
  'react/no-array-index-key': 'warn',
  'react/no-children-prop': 'error',
  'react/no-danger': 'warn',
  'react/no-danger-with-children': 'error',
  'react/no-deprecated': 'error',
  'react/no-did-mount-set-state': 'error',
  'react/no-did-update-set-state': 'error',
  'react/no-direct-mutation-state': 'error',
  'react/no-find-dom-node': 'error',
  'react/no-is-mounted': 'error',
  'react/no-multi-comp': [
    'error',
    {
      ignoreStateless: true,
    },
  ],
  'react/no-redundant-should-component-update': 'error',
  'react/no-render-return-value': 'error',
  'react/no-set-state': 'off',
  'react/no-typos': 'error',
  'react/no-string-refs': 'error',
  'react/no-this-in-sfc': 'off',
  'react/no-unescaped-entities': 'error',
  'react/no-unknown-property': 'error',
  'react/no-unused-prop-types': [
    'error',
    {
      skipShapeProps: true,
    },
  ],
  'react/no-unused-state': 'error',
  'react/no-will-update-set-state': 'error',
  'react/prefer-es6-class': ['error', 'always'],
  'react/prefer-stateless-function': [
    'error',
    {
      ignorePureComponents: true,
    },
  ],
  'react/prop-types': [
    'warn',
    {
      skipUndeclared: true,
    },
  ],
  'react/react-in-jsx-scope': 'error',
  'react/require-default-props': 'error',
  'react/require-optimization': 'off',
  'react/require-render-return': 'error',
  'react/self-closing-comp': 'error',
  'react/sort-comp': [
    'error',
    {
      order: [
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^(on|handle).+$/',
        'getters',
        'setters',
        'instance-methods',
        'everything-else',
        '/^render.+$/',
        'render',
      ],
    },
  ],
  'react/sort-prop-types': [
    'off',
    {
      ignoreCase: true,
      callbacksLast: true,
      sortShapeProp: true,
      requiredFirst: false,
    },
  ],
  'react/style-prop-object': 'error',
  'react/void-dom-elements-no-children': 'error',
  'react/jsx-filename-extension': [
    'error',
    {
      extensions: ['.jsx'],
    },
  ],
  'react/jsx-handler-names': [
    'error',
    {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    },
  ],
  'react/jsx-key': 'error',
  'react/jsx-no-depth': 'off',
  'react/jsx-no-bind': [
    'error',
    {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
    },
  ],
  'react/jsx-no-comment-textnodes': 'error',
  'react/jsx-no-duplicate-props': [
    'error',
    {
      ignoreCase: true,
    },
  ],
  'react/jsx-no-literals': [
    'off',
    {
      noStrings: true,
    },
  ],
  'react/jsx-no-target-blank': 'error',
  'react/jsx-no-undef': 'error',
  'react/jsx-curly-brace-presence': [
    'error',
    {
      props: 'never',
      children: 'never',
    },
  ],
  'react/jsx-pascal-case': [
    'error',
    {
      allowAllCaps: true,
    },
  ],
  // TODO: review sort rules
  'react/jsx-sort-default-props': [
    'off',
    {
      ignoreCase: true,
    },
  ],
  'react/jsx-sort-props': [
    'off',
    {
      ignoreCase: true,
      callbacksLast: false,
      shorthandLast: true,
      shorthandFirst: false,
      noSortAlphabetically: false,
      reservedFirst: false,
    },
  ],
  'react/jsx-uses-react': 'error',
  'react/jsx-uses-vars': 'error',
};
