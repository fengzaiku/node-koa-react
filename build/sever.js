const Koa = require("koa")
const Path = require("path")
const Serve = require("koa-static")
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const middleware = require('koa-webpack')
const app = new Koa();

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
    new Webpack.HotModuleReplacementPlugin(),
    // 调用模板
    new HtmlWebpackPlugin({
      template:"./index.html",
      inject: true
    })
  ]
 });

 const compiler = Webpack(devWebpackConfig)
//  Webpack
app.use(middleware({
  compiler: compiler,
  dev:{
    publicPath:'/'
  },
  hot:{

  }
}))


app.use(Serve(Path.join(__dirname,'..','/dist/')));

app.listen(3000,() => {
    console.log("打开链接========>http://localhost:3000/")
});
