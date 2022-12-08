// menuPatchRouter
import type { RouteRecordRaw } from 'vue-router'
import type { Ibreadcrumbs } from './type'

let firstMenuItem: any = null

// 根据menu动态加载router的方法
export function menuPatchRouter(menu: any) {
  // console.log('active-router')
  const routes: RouteRecordRaw[] = []
  // 1.加载所有路由
  const allRoutes: any = []
  const routePath = require.context('@/router/main', true, /\.ts/)
  routePath.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单挑选路由
  const recultMenu = (items: any) => {
    for (const item of items) {
      if (item.type === 1) {
        recultMenu(item.children)
      } else if (item.type === 2) {
        const route = allRoutes.find((route: any) => route.path === item.url)
        if (route) routes.push(route)
        if (!firstMenuItem) {
          firstMenuItem = item
        }
      }
    }
  }

  recultMenu(menu)
  return routes
}

// 根据route获取item的id的方法
export function getMenuItemByRoute(
  menu: any,
  path: string,
  breadcrumbs?: any
): any {
  // path-example:'/main/system/user'
  for (const item of menu) {
    if (item.type === 1) {
      const findItem: any = getMenuItemByRoute(item.children ?? [], path)
      if (findItem) {
        if (breadcrumbs) {
          breadcrumbs.push({ name: item.name })
          breadcrumbs.push({ name: findItem.name })
        }
        return findItem.id + ''
      }
    } else if (item.type === 2 && item.url === path) {
      // match item.url with path
      return item
    }
  }
}

// 面包屑

export function getParentMenu(menu: any, path: string) {
  const breadcrumbs: Ibreadcrumbs[] = []
  getMenuItemByRoute(menu, path, breadcrumbs)
  return breadcrumbs
}

export { firstMenuItem }
