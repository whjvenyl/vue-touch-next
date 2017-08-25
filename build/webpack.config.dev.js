const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const DashboardPlugin = require('webpack-dashboard/plugin')
const base = require('./webpack.config.base')
const { resolve, join } = require('path')
const {
  vueLoaders
} = require('./utils')

const rootDir = resolve(__dirname, '../test')
const buildPath = resolve(rootDir, 'dist')

module.exports = merge(base, {
  entry: {
    tests: resolve(rootDir, 'visual.js')
  },
  output: {
    path: buildPath,
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        loader: vueLoaders.scss,
        include: [
          resolve(__dirname, '../node_modules/@material'),
          resolve(__dirname, '../src')
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: resolve(__dirname, '../node_modules')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunkSortMode: 'dependency'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module, count) {
        return (
          module.resource &&
            /\.js$/.test(module.resource) &&
            module.resource.indexOf(join(__dirname, '../node_modules/')) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new DashboardPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: resolve(__dirname, `../reports/${process.env.NODE_ENV}.html`)
    })
  ],
  devtool: '#eval-source-map',
  devServer: {
    inline: true,
    stats: {
      colors: true,
      chunks: false,
      cached: false
    },
    contentBase: buildPath
  },
  performance: {
    hints: false
  }
})
