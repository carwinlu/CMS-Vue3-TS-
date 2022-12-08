import { AxiosRequestConfig } from 'axios'

interface MYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (err: any) => any
}
// 定义一个自己的requestConfig，添加实例自定义interceptors
interface MYRequestConfig extends AxiosRequestConfig {
  interceptors?: MYRequestInterceptors
  showLoading?: boolean
}

export { MYRequestConfig, MYRequestInterceptors }
