'use strict';

let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/script.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist'
  },
  watch: true,
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.scss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader, 
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ]
};