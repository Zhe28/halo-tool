import koa from "koa";
import {getRandomIdentityCard} from "./getRandomIdentityCard.js";

export async function api(context: koa.Context) {

  switch (context.request.path) {
    case '/':
      console.log(`the koa api request path is:${context.request.path}\n`)
      break;
    case '/getRandomIdentityCard':
      const res = await getRandomIdentityCard()
      console.log(res)
      break;
    default:
      // 默认返回404
      context.status = 404;
      context.body = '404 Not Found';
  }
}