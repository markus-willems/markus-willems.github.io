const path = require('path')

// plugins
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const DIST_PATH = path.resolve(__dirname, 'dist')
const SRC_PATH = path.resolve(__dirname, 'src')

let extractCSS = new ExtractTextPlugin({
  filename: 'css/style.[contenthash].css',
  allChunks: true,
})

const config = {
  entry: SRC_PATH + '/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: DIST_PATH,
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    extractCSS,
  ],
}

module.exports = config
