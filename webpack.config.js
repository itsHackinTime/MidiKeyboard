const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExstractPlugin = require('mini-css-extract-plugin');
const 
module.exports = {

  entry: './src/index.js',
  mode: process.env.NODE_ENV,
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new HTMLWebpackPlugin({
        template: './src/index.html'
    }),
    new MiniCssExstractPlugin()
  ],

  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test:/\.(s(a|c)ss)$/,
        use: [MiniCssExstractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  }

}