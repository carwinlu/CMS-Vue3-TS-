import { ILoginState } from './login/types'

export interface IRootState {
  name: string
}
export interface IRootWithModule {
  loginModule: ILoginState
}

export type IStoreType = IRootWithModule & IRootState
