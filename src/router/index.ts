import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import type { App } from "vue";

const routes: Array<RouteRecordRaw> = [
  // router redirect
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      title: "首页",
      keepAlive: true,
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "登录",
      keepAlive: true,
    },
    component: () => import("../views/About.vue"),
  },
  // tabs-two
  {
    path: "/tabTwo",
    meta: {
      requiresAuth: true,
      keepAlive: false,
      title: "tabTwo",
    },
    component: () => import("@VIE/tabs/tabTwo.vue"),
  },
  // tabs-three
  {
    path: "/tabThree",
    meta: {
      requiresAuth: true,
      keepAlive: false,
      title: "tabThree",
    },
    component: () => import("@VIE/tabs/tabThree.vue"),
  },
  // tabs-four
  {
    path: "/tabFour",
    meta: {
      requiresAuth: true,
      keepAlive: false,
      title: "tabFour",
    },
    component: () => import("@VIE/tabs/tabFour.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
