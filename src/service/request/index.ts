// 配置CLRequest类
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { MYRequestConfig, MYRequestInterceptors } from './type'
import { ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEFAULT_ISLOADING = false

class MYRequest {
  instance: AxiosInstance
  interceptors?: MYRequestInterceptors
  loading?: LoadingInstance
  showLoading?: boolean

  constructor(config: MYRequestConfig) {
    // 1.创建axios实例
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_ISLOADING

    // 使用实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 构造全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('全局请求成功')
        if (this.showLoading) {
          // Loading 拦截
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        // console.log('全局请求失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // 响应成功，关闭Loading
        this.loading?.close()
        this.showLoading = DEFAULT_ISLOADING

        // console.log('全局响应成功')
        // 由于就算HTTPErrorCode正常，也有可能是请求失败的
        const data = res.data
        // if (data.success) {
        //   return data
        // } else {
        //   console.log('服务器错误，请求失败')
        // }
        return data
      },
      (err) => {
        // console.log('全局响应失败')
        this.loading?.close()
        this.showLoading = DEFAULT_ISLOADING
        return err
      }
    )
  }

  request<T>(config: MYRequestConfig): Promise<T> {
    return new Promise((reslove, reject) => {
      // 单个请求拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 单个请求showLoading，
      // 为什么在request里面改变showLoading会生效？
      // 因为拦截器触发是在发送request之后触发的，而拦截器停止是在then之前
      if (config.showLoading) {
        this.showLoading = config.showLoading
      }

      // 调用axiosInstance的request方法，请求数据
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 还原showLoading
          this.showLoading = DEFAULT_ISLOADING

          // 这里得到的result是已经在全局中处理了axios包装的结果
          // console.log(res)
          reslove(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_ISLOADING
          reject(err)
        })
    })
  }
  get<T>(config: MYRequestConfig) {
    return this.request<T>({
      ...config,
      method: 'GET'
    })
  }
  post<T>(config: MYRequestConfig) {
    return this.request<T>({
      ...config,
      method: 'POST'
    })
  }
  patch<T>(config: MYRequestConfig) {
    return this.request<T>({
      ...config,
      method: 'PATCH'
    })
  }
  delete<T>(config: MYRequestConfig) {
    return this.request<T>({
      ...config,
      method: 'DELETE'
    })
  }
}

export default MYRequest
