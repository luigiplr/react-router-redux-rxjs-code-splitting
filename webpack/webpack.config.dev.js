const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')

module.exports = merge(require('./webpack.config'), {
  devtool: 'source-map',

  plugins: [

  ],

  devServer: {
    compress: true,
    port: 9000,
    contentBase: path.resolve(__dirname, '../src')
  }
})
