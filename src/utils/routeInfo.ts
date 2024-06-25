import type {IrouteInfo} from "./type/routeInfo.d.ts";
import {Postcard, ArrowLeft} from "@element-plus/icons-vue";
import {type RouteLocationNormalizedLoaded} from "vue-router";
import {markRaw} from "vue";

/**
 * 自定义的路由页面相关信息
 * @returns {IrouteInfo}
 */
function routeInfo(route: RouteLocationNormalizedLoaded): IrouteInfo {
  let res = {}
  if (route.path === '/') {
    res = {
      title: '首页',
      subTitle: '欢迎来到首页',
      icon: markRaw(ArrowLeft)
    }
  } else if (route.path === '/identityCard') {
    res = {
      title: '随机身份证',
      subTitle: '随机生成身份证信息，信息全部随机生成，请勿乱用',
      icon: markRaw(Postcard)
    }
  }
  return res
}

export {routeInfo}
