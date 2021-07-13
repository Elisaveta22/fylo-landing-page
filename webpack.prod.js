const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'main.[contentHash].js', //contentHash doesn't work
    path: path.resolve(__dirname, 'dist'),
  },
});
