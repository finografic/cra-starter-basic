module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'import', '@emotion'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: ['.js', '.jsx'],
      },
      react: {
        pragma: 'React',
        version: 'detect',
      },
      'linkComponents': ['Hyperlink', { name: 'Link', 'linkAttribute': 'to' }],
    },
  },
  rules: {
    '@emotion/pkg-renaming': 'error',
    'array-bracket-newline': ['warn', { 'multiline': true }],
    'array-bracket-spacing': [
      'error',
      'always',
      {
        'singleValue': false,
        'objectsInArrays': false,
        'arraysInArrays': false,
      },
    ],
    'array-element-newline': ['warn', { 'multiline': true, 'minItems': 3 }],
    'comma-dangle': [
      'warn',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'never',
        'exports': 'never',
        'functions': 'never',
      },
    ],
    'indent': ['error', 2, { 'SwitchCase': 1 }], // HUH ?? NOT WORKING 😡
    'linebreak-style': ['error', 'unix'],
    'max-len': [
      'warn',
      {
        'code': 110,
        'tabWidth': 2,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,
      },
    ],
    'no-unused-vars': 0,
    'no-undef': 1,
    'object-curly-spacing': [
      'error',
      'always',
      {
        'arraysInObjects': false,
        'objectsInObjects': false,
      },
    ],
    'object-property-newline': [
      'error',
      {
        'allowAllPropertiesOnSameLine': true,
      },
    ],
    'semi': 2,
    'spaced-comment': 1,
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'import/no-unresolved': 1,
    'import/no-duplicates': 1,
    'react/display-name': 0,
  },
};
