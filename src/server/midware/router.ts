import koaRouter from "koa-router"
import {getRandomIdentityCard} from "../api/getRandomIdentityCard.js";


const router = new koaRouter();

router.get('/getRandomIdentityCard', getRandomIdentityCard)


export {router};