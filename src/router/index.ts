import {createRouter, createWebHashHistory} from "vue-router";
import {home, identityCardPath} from "./path.ts";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    name: home,
    path: home,
    components: {
      content: () => import("@/components/PageHeader.vue"),
      leftSide: () => import("@/views/subView/Side.vue"),
      nav: () => import('@/views/subView/Header.vue'),
      welcome: () => import("@/views/Welcome.vue")
    },
    children: [{
      name: identityCardPath,
      path: identityCardPath,
      component: () => import("@/views/subView/IdentityCard.vue")
    }]
  }]
})
