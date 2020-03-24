const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/YOUR_COMPONENT.js',
  output: {
    path: path.resolve('lib'),
    filename: 'YOUR_COMPONENT.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
};
