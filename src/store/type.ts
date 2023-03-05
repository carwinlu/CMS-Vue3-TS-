import { ILoginState } from './login/types'
import { IDashboardState } from './main/analysis/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  allDepartment: any[]
  allRole: any[]
  coder: string
}
export interface IRootWithModule {
  loginModule: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}

export type IStoreType = IRootWithModule & IRootState
