import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  allDepartment: any[]
  allRole: any[]
}
export interface IRootWithModule {
  loginModule: ILoginState
  system: ISystemState
}

export type IStoreType = IRootWithModule & IRootState
