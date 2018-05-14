import Koa from "koa"
import {readFileSync} from "fs"
import {join} from "path"
import Router from "koa-router"
import Serve from "koa-static"
import Loadable from 'react-loadable'
import { matchPath } from 'react-router'
import HtmlBody from './webRouter'
import WebRoutes from '../src/routers'

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


var router = new Router();

app.use(Serve(join(__dirname,'..','/dist/')));


function isMatch(url){
    return WebRoutes.some(item =>matchPath(url, {
            path: item.path,
            exact: true
          }))
}

app.use(async (ctx, next) => {
    if(isMatch(ctx.url)){
        ctx.body=HtmlBody(ctx)
    }
    await next()
});

app.use(router.routes()).use(router.allowedMethods());


Loadable.preloadAll().then(() => {
    app.listen(3000,() => {
      console.log("打开链接=================================>http://localhost:3000/")
    });
  }).catch(err => {
    console.log(err);
  });