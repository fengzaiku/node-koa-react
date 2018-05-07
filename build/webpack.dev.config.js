const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config.js');

const devWebpackConfig = merge(baseConfig, {
  mode:'development',
  devtool: "source-map", 
  devServer: {
    historyApiFallback: true,
    hot: true,
    noInfo:true
  },
  plugins: [
    // 启用热替换模块
    new webpack.HotModuleReplacementPlugin(),
    // 调用模板
    new HtmlWebpackPlugin({
      template:"./index.html",
      inject: true
    })
  ]
 });



module.exports = new Promise((resolve,reject) => {
  resolve(devWebpackConfig)
})

