import type { ITableProps } from '../types'
export const listProps: ITableProps = {
  tableSetting: [
    {
      prop: 'id',
      label: 'ID',
      width: '110'
    },
    {
      prop: 'name',
      label: '账号',
      width: '110'
    },
    {
      prop: 'realname',
      label: '真实姓名',
      width: '110'
    },
    {
      prop: 'cellphone',
      label: '电话号码',
      width: '150'
    },
    {
      prop: 'enable',
      label: '状态',
      width: '80',
      slotName: 'status'
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
  showSelect: true
}
