import {createRouter, createWebHashHistory} from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    name: 'home',
    path: '/',
    components: {
      content: () =>  import("../views/subView/IdentityCard.vue"),
      leftSide: () => import("../components/LeftSide.vue"),
      rightSide: () => import("../components/RightSide.vue")
    },
    children: [{
      path: 'getIdentityCard',
      components: {
        content: () => import("../views/subView/IdentityCard.vue")
      },
    }]
  }]
})