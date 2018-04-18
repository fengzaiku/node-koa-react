import koa from "koa"
import path from "path"
import react from "./react"
import {logger} from "../config/setting"
import views from 'koa-views'
import Router from 'koa-router'
// let setting = require("../config/setting")

let app = new koa();
const router = new Router();
// app.use(setting.logger())
app.use(logger)
app.use(views(path.resolve(__dirname ,'../views'), {
    extension:'html',
    map: {
      html: 'ejs'
    }
  }));

router.get('/',async function(ctx, next){
    await ctx.render('index', {
        body:react(ctx)
    });
})
app.use(router.routes()).use(router.allowedMethods());
app.listen("8082",() => {
    console.log("服务器地址：http://localhost:8082/")
})


