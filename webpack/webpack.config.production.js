const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const BabiliPlugin = require('babili-webpack-plugin')

module.exports = merge(require('./webpack.config'), {
  devtool: 'none',

  plugins: [
    new BabiliPlugin({
      test: /\.jsx?$/
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        comparisons: true,
        booleans: true,
        unused: true,
        loops: true,
        reduce_vars: true,
        if_return: true,
        join_vars: true,
        drop_console: false,
        warnings: false
      },
      output: { comments: false },
      sourceMap: false
    })
  ]
})
