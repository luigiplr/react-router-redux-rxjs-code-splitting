const path = require('path')
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const { sync: mkdirp } = require('mkdirp')

const assetsPath = path.join(__dirname, '../dist')

mkdirp(assetsPath)

module.exports = {
  context: path.join(__dirname, '../src'),
  devtool: 'source-map',

  entry: {
    main: './entry'
  },

  output: {
    path: assetsPath,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[hash]-[chunkhash].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': process.env.NODE_ENV
    }),

    new LodashModuleReplacementPlugin()
  ]
}
