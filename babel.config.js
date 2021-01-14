module.exports = {
  // ================================================ //
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.0.0',
        targets: {
          esmodules: true,
          ie: 11,
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1',
          node: 'current',
        },
      },
    ],
    ['@babel/preset-react'],
    [
      '@babel/plugin-transform-react-jsx',
      {
        'runtime': 'automatic',
        'pragmaFrag': 'React.Fragment',
      },
    ],
    [
      '@emotion/babel-preset-css-prop',
      {
        autoLabel: true,
        labelFormat: '[local]',
      },
    ],
  ],
  // ================================================ //
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        'runtime': 'automatic',
      },
    ],
    [
      '@emotion',
      {
        'sourceMap': false,
        'autoLabel': 'dev-only',
        'labelFormat': '[local]',
        'cssPropOptimization': true,
      },
    ],
  ],
};
