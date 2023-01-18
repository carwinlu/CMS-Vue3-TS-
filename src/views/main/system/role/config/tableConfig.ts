import type { ITableProps } from '@/views/main/types'
export const listProps: ITableProps = {
  tableSetting: [
    {
      prop: 'id',
      label: 'ID',
      width: '110'
    },
    {
      prop: 'name',
      label: '职位',
      width: '110'
    },
    {
      prop: 'intro',
      label: '职位描述',
      width: '110'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      slotName: 'updateAt'
    },
    {
      label: '数据处理',
      slotName: 'datahandle',
      width: '140'
    }
  ],
  showIndex: true,
  showSelect: true,
  tableName: '角色管理'
}
