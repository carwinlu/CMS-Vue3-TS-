// 创造几个request实例，并传入相应配置
import MYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

// 创造request实例
const myRequest = new MYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 在实例上自定义拦截器
  // 在实例上携带token,=>请求拦截
  interceptors: {
    requestInterceptor: (config) => {
      // console.log('请求成功')
      const token = localCache.getCache('token')
      if (token) {
        // eslint-disable-next-line
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('请求失败')
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      // console.log('响应失败')
      return err
    }
  }
})

export default myRequest

// 用例：
// interface dataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// request1
//   .request<dataType>({
//     url: '/home/multidata',
//     method: 'GET',
//     showLoading: true
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//   })
