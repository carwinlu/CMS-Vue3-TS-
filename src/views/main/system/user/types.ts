export interface ITableSetting {
  prop?: string
  label?: string
  width?: string
  slotName?: string
}

export interface ITableProps {
  tableSetting:ITableSetting[]
  showIndex?: boolean
  showSelect?: boolean
}
