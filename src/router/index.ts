import { createRouter, createWebHashHistory } from 'vue-router'
// 导入vueRouter里面route的格式
import type { RouteRecordRaw } from 'vue-router'

import localCache from '@/utils/cache'
import { firstMenuItem } from '@/utils/patch-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main/Main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/not-found/not-found.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')

    if (!token) {
      return '/login'
    }
  }
  if (to.path == '/main') {
    return firstMenuItem.url
  }
})

export default router
