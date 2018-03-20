const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src/app');

const config = {
  entry: `${APP_DIR}/index.server.js`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: 'babel-loader'
      }
    ]
  },
  target: 'node'
};

module.exports = config;
