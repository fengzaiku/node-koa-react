const Koa = require("koa")
const Path = require("path")
const Serve = require("koa-static")
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const middleware = require('koa-webpack')

const cacheControl = require('koa-cache-control');
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');


const app = new Koa();


app.use(cacheControl({
  maxAge:500
}))
// use it upstream from etag so
// that they are present
app.use(conditional());
// add etags
app.use(etag());

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
// app.use(async function(ctx, next){
//   await next();
//   ctx.body = {
//     name: 'tobi',
//     species: 'ferret',
//     age: 2
//   };
// })

app.use(Serve(Path.join(__dirname,'..','/dist/'),{
  maxage:60 * 60 * 24 * 365
}));

app.listen(3000,() => {
    console.log("打开链接========>http://localhost:3000/")
});
