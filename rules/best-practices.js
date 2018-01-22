module.exports = {
  'accessor-pairs': ['error', { setWithoutGet: true, getWithoutSet: false }],
  'array-callback-return': ['error', { allowImplicit: true }],
  'block-scoped-var': 'error',
  'class-methods-use-this': [
    'error',
    {
      exceptMethods: [
        'render',
        'getInitialState',
        'getDefaultProps',
        'getChildContext',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
      ],
    },
  ],
  complexity: ['off', { max: 10 }],
  'consistent-return': 'error',
  'default-case': ['error', { commentPattern: '^no default$' }],
  'dot-notation': ['error', { allowKeywords: true }],
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'guard-for-in': 'error',
  'no-alert': 'warn',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-div-regex': 'error',
  'no-else-return': ['error', { allowElseIf: false }],
  'no-empty-function': [
    'error',
    { allow: ['arrowFunctions', 'functions', 'methods'] },
  ],
  'no-empty-pattern': 'error',
  'no-eq-null': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-fallthrough': 'error',
  'no-global-assign': ['error', { exceptions: [] }],
  'no-implicit-coercion': [
    'error',
    { boolean: false, number: true, string: true, allow: [] },
  ],
  'no-implicit-globals': 'off',
  'no-implied-eval': 'error',
  'no-invalid-this': 'error',
  'no-iterator': 'error',
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
  'no-lone-blocks': 'error',
  'no-loop-func': 'error',
  'no-magic-numbers': [
    'error',
    {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    },
  ],
  'no-multi-str': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': ['error', { props: false }],
  'no-proto': 'error',
  'no-redeclare': ['error', { builtinGlobals: false }],
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    },
  ],
  'no-return-assign': ['error', 'except-parens'],
  'no-return-await': 'error',
  'no-script-url': 'error',
  'no-self-assign': ['error', { props: true }],
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-throw-literal': 'error',
  'no-unmodified-loop-condition': 'off',
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: true,
    },
  ],
  'no-unused-labels': 'error',
  'no-useless-call': 'error',
  'no-useless-concat': 'error',
  'no-useless-escape': 'error',
  'no-useless-return': 'error',
  'no-void': 'error',
  'no-warning-comments': [
    'warn',
    {
      terms: [
        'todo',
        'fixme',
        'changed',
        'xxx',
        'idea',
        'hack',
        'note',
        'review',
        'nb',
        'bug',
        'question',
        'combak',
        'temp',
        'debug',
        'optimize',
        'warning',
      ],
      location: 'start',
    },
  ],
  'no-with': 'error',
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
  radix: 'error',
  // TODO: review require-await rule
  'require-await': 'off',
  'vars-on-top': 'error',
  yoda: ['error', 'never', { exceptRange: true, onlyEquality: false }],
};