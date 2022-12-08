// menuPatchRouter
import type { RouteRecordRaw } from 'vue-router'

// 根据menu动态加载router的方法
export function menuPatchRouter(menu: any) {
  console.log('active-router')

  const routes: RouteRecordRaw[] = []
  // 1.加载所有路由
  const allRoutes: any = []
  const routePath = require.context('@/router/main', true, /\.ts/)
  routePath.keys().forEach((key) => {
    const route = require('../../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单挑选路由
  const recultMenu = (items: any) => {
    for (const item of items) {
      if (item.type === 1) {
        recultMenu(item.children)
      } else {
        const route = allRoutes.find((route: any) => route.path === item.url)
        if (route) routes.push(route)
      }
    }
  }

  recultMenu(menu)
  return routes
}

// 根据route获取item的id的方法
// export function getMenuItemByRoute(menu:any,route){

// }
