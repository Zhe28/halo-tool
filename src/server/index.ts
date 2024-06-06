import koa from 'koa';
import cros from '@koa/cors'
import {api} from "./api/index.js";

const PORT = 521
const server = new koa()
server.use(cros())

server.use(api)
server.listen(
  PORT,
  () => {
    console.log('server has been started. the listening port is', PORT)
  })


