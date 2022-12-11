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
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'sport',
      type: 'select',
      label: '选择项目',
      searchOption: [
        {
          label: '篮球',
          value: 'basketball'
        },
        {
          label: '足球',
          value: 'football'
        }
      ]
    },
    {
      field: 'startDate',
      type: 'datepicker',
      label: '选择日期',
      dateOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '80px'
}
