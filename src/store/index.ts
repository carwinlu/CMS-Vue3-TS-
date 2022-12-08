import { createStore, Store, useStore as useVuexStore } from 'vuex'
import loginModule from './login/login'
import { IRootState, IStoreType } from './type'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'codewhy'
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
})
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
// 因为动态路由注册如不点击登录页面就不会调用login中dcommit。也不会注册到动态路由
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
