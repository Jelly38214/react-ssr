const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['react', 'stage-0', ['env', {
            browsers: ['last 2 versions']
          }]],
          plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean)
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader', options: {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            }
          },

        }]
      }
    ]
  },
  plugins: [
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin()
  ].filter(Boolean)
}