export interface formPropsType {
  field: string
  type: formtype
  label: string
  placeholder?: any
  rules?: any
  // select的option
  searchOption?: any[]
  // datepicker的options
  dateOptions?: any
  isHiden?: boolean
}

type formtype = 'input' | 'password' | 'datepicker' | 'select'

export interface IForm {
  formProps: formPropsType[]
  labelWidth?: string
  inline?: boolean
  rules?: any
  styleCustom?: object
}
