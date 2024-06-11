import koa from 'koa';
import cros from '@koa/cors'
import {router} from "./api/index.js";
import * as http from "node:http";
import * as https from "node:https";

const HTTP_PORT = 521
const HTTPS_PORT = 522
const server = new koa()

server.use(cros())
// server.use(logger)
server.use(router.routes())

// server.listen(
//   PORT,
//   () => {
//     console.log('server has been started. the listening port is', PORT)
//   })
//

http.createServer(server.callback()).listen(HTTP_PORT, () => {
  console.log('server has been started. the listening port is', HTTP_PORT)
});
https.createServer(server.callback()).listen(HTTPS_PORT, () => {
  console.log('server has been started. the listening port is', HTTPS_PORT)
});
