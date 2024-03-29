// 编写好规则
export const rules = {
  name: [
    {
      required: true,
      message: '用户名是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5~10个字母或者数字~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '用户名必须是3位以上的字母或者数字~',
      trigger: 'blur'
    }
  ],
  phone: [
    {
      required: true,
      message: '手机号是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '请输入正确手机号',
      trigger: 'blur'
    }
  ],
  variedNum: [
    {
      required: true,
      message: '验证码是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '请输入正确六位验证码',
      trigger: 'blur'
    }
  ]
}
