const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new CopyWebpackPlugin([
      { from: 'src/mockApi/mockData', to: 'mockApiData' },
    ]),
  ],
  resolve: {
    alias: {
      API: path.resolve(__dirname, '../src/mockApi/'),
      Assets: path.resolve(__dirname, '../src/assets/'),
      Components: path.resolve(__dirname, '../src/components/'),
      Utilities: path.resolve(__dirname, '../src/utilities/'),
    },
  },
};
