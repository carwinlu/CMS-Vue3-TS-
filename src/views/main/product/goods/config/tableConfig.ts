import type { ITableProps } from '@/views/main/types'
export const listProps: ITableProps = {
  tableSetting: [
    { prop: 'name', label: '商品名称' },
    { prop: 'oldPrice', label: '原价格', width: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', width: '80', slotName: 'newPrice' },
    { prop: 'imgUrl', label: '商品图片', width: '100', slotName: 'image' },
    { prop: 'status', label: '状态', width: '80', slotName: 'isSellOut' },
    { prop: 'saleCount', label: '销量', width: '60' },
    { prop: 'address', label: '地址', width: '60' },
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
  showIndex: true,
  showSelect: true,
  tableName: '商品信息',
  isPage: true
}
