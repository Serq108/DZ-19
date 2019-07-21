var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
//var webpackMajorVersion = require('webpack/package.json').version.split('.')[0];

module.exports = {
    context: __dirname,
    entry: './index.js',
    output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
    },
    module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.png$/, loader: 'file-loader' },
      { test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-env']
                }
            }
      }
    ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less']
    },
    devtool: 'inline-source-map',


    devServer: {
        port: '3001',
        host: '0.0.0.0',
        proxy: {
            '/api': 'http://localhost:3000'
        }
    
    },
    
    plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html'
    }),
    new MiniCssExtractPlugin({ filename: 'styles.css' })
    ]
};
