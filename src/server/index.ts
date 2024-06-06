import koa from 'koa';
import cros from '@koa/cors'
import {logger} from "./midware/logger.js";
import {router} from "./api/index.js";

const PORT = 521
const server = new koa()

server.use(cros())
// server.use(logger)
server.use(router.routes())

server.listen(
  PORT,
  () => {
    console.log('server has been started. the listening port is', PORT)
  })


