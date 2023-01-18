// 单词首字母大写
export function firstLetterCapital(payload: string) {
  payload = payload.charAt(0).toUpperCase() + payload.slice(1)
  return payload
}
