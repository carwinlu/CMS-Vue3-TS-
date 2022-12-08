// 登录模块的状态管理
import { Module } from 'vuex'
import type { IRootState } from '../type'
import type { ILoginState } from './types'
// 发送网络请求的方法
import {
  accountLoginRequest,
  UserInfoRequest,
  userMenuRequestByRoleId
} from '@/service/login/login'
import type { IAccount } from '@/service/login/types'
import localCache from '@/utils/cache'

import router from '@/router'
import { menuPatchRouter } from '../utils/patch-router'

// Module中要传入两个泛型<该模块state类型，根模块state类型>
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: '',
      userMenu: []
    }
  },

  // 同步状态变更
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUserInfo(state, info) {
      state.userInfo = info
    },
    setUserMenu(state, menu) {
      // 因为他的icon=el-icon-monitor，但是只需要是monitor
      for (const item of menu) {
        if (item.icon.includes('el-icon')) {
          console.log('icon change')
          item.icon = item.icon.slice(8)
        }
      }
      state.userMenu = menu
      // 配置动态路由
      const routes = menuPatchRouter(menu)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      console.log(routes)
    }
  },
  // 异步状态变更
  actions: {
    // 发送post请求，获取账号id和token
    async accountLogin({ commit }, account: IAccount) {
      const loginResult = await accountLoginRequest(account)

      const { id, token } = loginResult.data
      commit('setToken', token)
      localCache.setCache('token', token)
      // 下一步，根据id获取用户列表；对token进行本地保存
      const userInfoResult = await UserInfoRequest(id)
      commit('setUserInfo', userInfoResult.data)
      localCache.setCache('userInfo', userInfoResult)

      // 获取首页的用户菜单并本地保存
      const userMenu = await userMenuRequestByRoleId(
        userInfoResult.data.role.id
      )
      // console.log(userMenu)
      localCache.setCache('userMenu', userMenu.data)

      commit('setUserMenu', userMenu.data)
      // 跳到首页
      router.push('/main')
    },
    // setupStore;
    // 为什么不直接在一开始就是用localCache？
    //   保证数据来源的明确，后期debug更方便
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('setToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('setUserInfo', userInfo)
      }
      const userMenu = localCache.getCache('userMenu')
      if (userMenu) {
        commit('setUserMenu', userMenu)
      }
    }
  }
}
export default loginModule
