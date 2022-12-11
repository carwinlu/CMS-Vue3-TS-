import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  name: string
}
export interface IRootWithModule {
  loginModule: ILoginState
  system: ISystemState
}

export type IStoreType = IRootWithModule & IRootState
