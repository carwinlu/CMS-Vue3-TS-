import { IForm } from '@/baseui/form'

export const formConfig: IForm = {
  formProps: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入ID'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'enable',
      type: 'select',
      label: '状态',
      placeholder: '查询状态',
      // <el-option label="Zone one" value="shanghai" />
      searchOption: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建日期',
      dateOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '80px'
}
