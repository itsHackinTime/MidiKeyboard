const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExstractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')
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
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    // match the output path
    static: {
      directory: path.resolve(__dirname, 'dist'),
      // match the output 'publicPath'
      publicPath: '/',
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
      '/search': {
        target: 'http://localhost:3000',
        secure: false,
      }
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
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
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
        use: [
          {
            // loads files as base64 encoded data url if image file is less than set limit
            loader: 'url-loader',
            options: {
              // if file is greater than the limit (bytes), file-loader is used as fallback
              limit: 8192,
            },
          }  
        ]
      }  
    ]   
  }

}