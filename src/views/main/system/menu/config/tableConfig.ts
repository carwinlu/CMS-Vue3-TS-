import type { ITableProps } from '@/views/main/types'
export const listProps: ITableProps = {
  tableSetting: [
    { prop: 'name', label: '菜单名称' },
    { prop: 'type', label: '菜单级别', width: '100' },
    { prop: 'url', label: '菜单url' },
    { prop: 'permission', label: '系统权限' },
    {
      prop: 'createAt',
      label: '创建时间',
      width: '150',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      width: '150',
      slotName: 'updateAt'
    },
    { label: '数据处理', width: '140', slotName: 'datahandle' }
  ],
  tableName: '系统菜单',
  isPage: false
}
