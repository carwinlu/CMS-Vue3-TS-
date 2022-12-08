import myRequest from '../index'
import { IAccount, ILoginData, ILoginResult } from './types'

enum loginAPI {
  AccountLogin = '/login',
  UserInfo = '/users/',
  UserList = '/role/'
}

// 请求token及id等用户登录信息
export function accountLoginRequest(account: IAccount) {
  return myRequest.post<ILoginResult<ILoginData>>({
    url: loginAPI.AccountLogin,
    data: account
  })
}

// 根据id获取用户信息
export function UserInfoRequest(id: number) {
  return myRequest.get<ILoginResult>({
    url: loginAPI.UserInfo + id
  })
}

// 获取首页的用户菜单
export function userMenuRequestByRoleId(id: number) {
  console.log('menu Getting')

  return myRequest.get<ILoginResult>({
    url: loginAPI.UserList + id + '/menu'
  })
}
