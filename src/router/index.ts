import {createRouter, createWebHashHistory} from "vue-router";
import {identityCardPath} from "./path.ts";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    name: 'home',
    path: '/',
    components: {
      default: () => import("../views/subView/IdentityCard.vue"),
      leftSide: () => import("../views/subView/LeftSide.vue"),
      rightSide: () => import("../components/RightSide.vue")
    },
    children: [{
      path: identityCardPath,
      components: {
        default: () => import("../views/subView/IdentityCard.vue")
      },
    }]
  }]
})
