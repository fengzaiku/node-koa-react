
const path = require('path');
const rm = require('rimraf')
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.config.js');
const { ReactLoadablePlugin } = require('react-loadable/webpack')

const prdWebpackConfig = merge(baseConfig, {
    mode:'production',
    devtool: "inline-source-map", 
    plugins: [
      new UglifyJSPlugin({
        sourceMap: true
      }),
      new ReactLoadablePlugin({
        filename: path.join(__dirname,'../dist/react-loadable.json')
      }),
      new HtmlWebpackPlugin({
        template:"./index.html",
        inject: true,
        filename:"template.html"
      })   
    ]
});
rm(path.join(__dirname,"..","dist"), err => {
  if (err) throw err
  webpack(prdWebpackConfig,(err,stats) => {
    if (err) throw err

    if (stats.hasErrors()) {
      console.log(' 编译失败.\n')
      process.exit(1)
    }

    console.log("编译完成")
  })
})




