import { IForm } from '@/baseui/form'

export const formConfig: IForm = {
  formProps: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入ID'
    },
    {
      field: 'name',
      type: 'input',
      label: '职位',
      placeholder: '请输入职位'
    },
    {
      field: 'startDate',
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
