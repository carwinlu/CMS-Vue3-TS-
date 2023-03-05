// RootStore
import { createStore, Store, useStore as useVuexStore } from 'vuex'
import loginModule from './login/login'
import system from './main/system'
import dashboard from './main/analysis'
import { IRootState, IStoreType } from './type'
import { usersListRequest } from '@/service/main/system/index'

const store = createStore<IRootState>({
  state() {
    return {
      allDepartment: [],
      allRole: [],
      coder: 'coderwhy'
    }
  },
  getters: {
    getAllDepartment(state) {
      return state.allDepartment
    },
    getAllRole(state) {
      return state.allRole
    }
  },
  mutations: {
    setAllDepartment(state, payload) {
      state.allDepartment = payload
    },
    setAllRole(state, payload) {
      state.allRole = payload
    }
  },
  actions: {
    // 请求角色菜单、部门菜单
    async getDataAction({ commit }) {
      const departmentListResult = await usersListRequest('/department/list', {
        offset: 0,
        size: 100
      })
      const { list: departmentList } = departmentListResult.data

      const roleResult = await usersListRequest('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data
      // commit
      commit('setAllDepartment', departmentList)
      commit('setAllRole', roleList)
    }
  },
  modules: {
    loginModule,
    system,
    dashboard
  }
})
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
// 因为动态路由注册如不点击登录页面就不会调用login中commit。也不会注册到动态路由
export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
  store.dispatch('getDataAction')
}

export default store
