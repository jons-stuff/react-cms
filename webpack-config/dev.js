const common = require('./common.js');
const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'main.js',
  },
  devServer: {
    contentBase: './dist',
  },
});
