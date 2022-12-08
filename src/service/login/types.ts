export interface IAccount {
  account: string
  password: string
}
export interface ILoginData {
  id: number
  name: string
  token: string
}

export interface ILoginResult<T = any> {
  code: number
  data: T
}
