import type { ITableProps } from '@/views/main/types'
export const listProps: ITableProps = {
  tableSetting: [
    { prop: 'name', label: '商品名称', width: '120' },
    { prop: 'oldPrice', label: '原价格', width: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', width: '80' },
    { prop: 'imgUrl', label: '商品图片', width: '100', slotName: 'image' },
    { prop: 'status', label: '状态', width: '100', slotName: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      width: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      width: '250',
      slotName: 'updateAt'
    },
    { label: '操作', width: '120', slotName: 'handler' }
  ],
  showIndex: true,
  showSelect: true,
  tableName: '商品信息'
}
