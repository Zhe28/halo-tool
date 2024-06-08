import dayjs from "dayjs";
import koa from "koa";

async function logger(context: koa.Context, next: koa.Next) {
  console.log(`${dayjs().format('YYYY-MM-DD-dddd HH:mm:ss')}\t${context.request.ip}\t${context.path}\t${context.method}`);
  next()
}


export {logger}