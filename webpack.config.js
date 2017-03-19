const path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  context: path.join(__dirname, '/www/src'),
  entry: [
    './main.js'
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          'style-loader','css-loader','sass-loader'
        ]
      }
    ]
  },

  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: './www'
  },
  plugins: [
    // OccurenceOrderPlugin is needed for webpack 1.x only
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('./www/src/style/main.css')
  ]
};
