import { IForm } from '@/baseui/form'

export const dialogConfig: IForm = {
  formProps: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'password',
      type: 'input',
      label: '密码',
      placeholder: '请输密码',
      isHiden: true
    },
    {
      field: 'department',
      type: 'select',
      label: '部门',
      placeholder: '请选择部门',
      dateOptions:[]
    },
    {
      field: 'role',
      type: 'select',
      label: '角色',
      placeholder: '请选择角色',
      dateOptions:[]
    }
  ],
  labelWidth: '80px',
  inline: false
}
