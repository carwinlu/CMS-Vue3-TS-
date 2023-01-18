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
      label: '名称',
      width: '110'
    },
    {
      prop: 'oldPrice',
      label: '旧价格',
      width: '110'
    },
    {
      prop: 'imgUrl',
      label: '图片',
      width: '150'
    },
    {
      prop: 'status',
      label: '状态',
      width: '80',
      slotName: 'status'
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
  tableName: '用户管理'
}
