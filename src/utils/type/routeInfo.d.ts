import type {RouteLocationNormalizedLoaded} from "vue-router"

type URLType = "url" | "describe"

type pathPapping = {
  "/": string,
  "identityCard": string,
}

type IrouteInfo = {
  title: string
  subTitle?: string
  icon?: unknown
} | {}