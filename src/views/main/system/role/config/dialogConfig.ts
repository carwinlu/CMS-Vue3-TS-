import { IForm } from '@/baseui/form'

export const dialogConfig: IForm = {
  formProps: [
    {
      field: 'name',
      type: 'input',
      label: '职位',
      placeholder: '请输入职位'
    },
    {
      field: 'intro',
      type: 'input',
      label: '职位描述',
      placeholder: '请输入职位描述'
    }
  ],
  labelWidth: '80px',
  inline: false
}
