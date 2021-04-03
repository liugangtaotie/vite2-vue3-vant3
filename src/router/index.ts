import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true,
    },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '登录',
      keepAlive: true,
    },
    component: () => import('../views/About.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// config router
export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
