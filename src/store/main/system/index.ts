import { IRootState } from '@/store/type'
import { Module } from 'vuex'
import type { ISystemState } from './types'
import { usersListRequest, delDateRequest } from '@/service/main/system'

import { firstLetterCapital } from '@/utils/wordFormat'

// 由于请求列表格式很统一；为 【users/department】/list；
// 如果命名格式不统一可以使用一个map使名称与地址一一对应
// 使用 getAllList 方法统一请求
const system: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      departmentList: [],
      departmentCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    setUsersList(state, payload) {
      state.usersList = payload
    },
    setUsersCount(state, payload) {
      state.usersCount = payload
    },
    setRoleList(state, payload) {
      state.roleList = payload
    },
    setRoleCount(state, payload) {
      state.roleCount = payload
    },
    setDepartmentList(state, payload) {
      state.departmentList = payload
    },
    setDepartmentCount(state, payload) {
      state.departmentCount = payload
    },
    setGoodsList(state, payload) {
      state.goodsList = payload
    },
    setGoodsCount(state, payload) {
      state.goodsCount = payload
    },
    setMenuList(state, payload) {
      state.menuList = payload
    },
    setMenuCount(state, payload) {
      state.goodsCount = payload
    }
  },
  // 使用getters去获取数据
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        // !!!point
        return (state as any)[`${pageName}List`]
      }
    },
    pageCountData(state) {
      return (pageName: string) => {
        // !!!point
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    // 请求用户列表，传入url & queryInfo
    async getAllList({ commit }, payload: any) {
      // payload:{listName,id}
      const url = `/${payload.listName}/list`
      const listResult = await usersListRequest(url, payload.queryInfo)
      const { list, totalCount } = listResult.data

      // 首字母大写的方法
      commit(`set${firstLetterCapital(payload.listName)}List`, list)
      commit(`set${firstLetterCapital(payload.listName)}Count`, totalCount)
    },
    // 刷新重新获取数据
    // 删除某数据的请求方法；
    // url：/${pagename}/id
    async delAnyDate({ dispatch }, payload: any) {
      // payload:{pageName,id}
      const url = `/${payload.pageName}/${payload.id}`
      await delDateRequest(url)

      // 重新请求
      dispatch('getAllList', {
        listName: payload.pageName,
        // 也可以选择获取原本的queryInfo
        queryInfo: {
          offset: 0,
          size: 100
        }
      })
    }
  }
}

export default system
