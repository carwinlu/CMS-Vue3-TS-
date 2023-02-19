// 用于system模块的网络请求
import myRequest from '@/service'
import type { IRequestResult } from '../types'

export function usersListRequest(url: string, queryInfo: any) {
  return myRequest.post<IRequestResult>({
    url: url,
    data: queryInfo
  })
}

export function delDateRequest(url: string) {
  return myRequest.delete<IRequestResult>({
    url
  })
}
