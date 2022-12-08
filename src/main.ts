import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { setupStore } from './store'
// import css
import 'normalize.css'
import './assets/css/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/el-loading.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 引入elementPlus 全局
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
app.use(store)
// 因为动态路由注册如不点击登录页面就不会调用login中dcommit。也不会注册到动态路由
setupStore()
app.use(router)

app.mount('#app')
