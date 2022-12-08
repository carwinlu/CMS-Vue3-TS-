// 封装localStorage的相关方法
class localCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    const result = window.localStorage.getItem(key)
    if (result) {
      return JSON.parse(result)
    }
  }
  delCache(key: string) {
    window.localStorage.removeItem(key)
  }
  clearCache() {
    window.localStorage.clear()
  }
}
export default new localCache()
