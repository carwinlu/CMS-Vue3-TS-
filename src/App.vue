<template>
  <div id="app">
    <!-- <el-config-provider :locale="locale"> -->
    <router-view></router-view>
    <!-- </el-config-provider> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// zhcn 缺乏声明文件
// import { ElConfigProvider } from 'element-plus'
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export default defineComponent({
  name: 'App'
  // component: {
  //   ElConfigProvider,
  // },
  // setup() {
  //   return {
  //     locale: zhCn
  //   }
  // }
})
</script>

<style lang="less">
#app {
  height: 100%;
  background-color: #f0f2f5;
}
</style>
