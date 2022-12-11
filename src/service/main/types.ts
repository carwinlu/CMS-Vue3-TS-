// 常用请求返回格式
export interface IRequestResult<T = any> {
  code: number
  data: T
}
