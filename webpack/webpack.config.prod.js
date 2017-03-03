const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const BabiliPlugin = require('babili-webpack-plugin')

module.exports = merge(require('./webpack.config'), {
  devtool: 'none',

  output: {
    path: path.join(__dirname, '../docs')
  },

  plugins: [
    new BabiliPlugin({
      test: /\.jsx?$/
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
})
