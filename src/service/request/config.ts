// 作为环境变量注入文件
// 不同开发环境根据process.env.NODE_ENV的值判断
// 或使用根目录下设置不同文件方式注入
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:5000/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://152.136.185.210:5000'
} else {
  BASE_URL = 'http://coderwhy.org/test'
}

export { BASE_URL, TIME_OUT }
