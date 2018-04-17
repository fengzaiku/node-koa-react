import koa from "koa"
import {logger} from "../config/setting.js"
// let setting = require("../config/setting")

let app = new koa();

// app.use(setting.logger())
app.use(logger)

app.use(async ctx => {
    ctx.body = '世界你好！';
});

app.listen("8082",() => {
    console.log("服务器地址：http://localhost:8082/")
})


