import koa from 'koa';
import cros from '@koa/cors'
import {router} from "./api/index.js";
import {createServer as createHTTPServer} from "node:http";
import {createServer as createHTTPSServer} from "node:https";
import {readFileSync} from "node:fs";

const HTTP_PORT = 521
const HTTPS_PORT = 522
const sslOption = {
  cert: readFileSync("resources/ssl-cert/fullchain.pem"),
  key: readFileSync("resources/ssl-cert/privkey.pem")
}
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

createHTTPServer(server.callback()).listen(HTTP_PORT, () => {
  console.log('server has been started. the listening port is', HTTP_PORT)
});
createHTTPSServer(sslOption, server.callback()).listen(HTTPS_PORT, () => {
  console.log('server has been started. the listening port is', HTTPS_PORT)
});
