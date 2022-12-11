import { IRootState } from '@/store/type'
import { Module } from 'vuex'
import type { ISystemState } from './types'
import { usersListRequest } from '@/service/main/system'

const system: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: '',
      usersTotalCount: 0
    }
  },
  mutations: {
    setUsersList(state, payload) {
      state.usersList = payload
    },
    setTotalCount(state, payload) {
      state.usersTotalCount = payload
    }
  },
  actions: {
    // 请求用户列表，传入url & queryInfo
    async getUsersList({ commit }, payload: any) {
      const usersListResult = await usersListRequest(
        payload.url,
        payload.queryInfo
      )
      const { list, totalCount } = usersListResult.data
      commit('setUsersList', list)
      commit('setTotalCount', totalCount)
    }
    // 刷新重新获取数据
  }
}

export default system
