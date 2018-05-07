import Koa from "koa"
import {readFileSync} from "fs"
import {join} from "path"
import Router from "koa-router"
import Serve from "koa-static"
import Loadable from 'react-loadable'
import { matchPath } from 'react-router'
import HtmlBody from './webRouter'
import WebRoutes from '../src/routers'

const app = new Koa();
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