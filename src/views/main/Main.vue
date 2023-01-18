<template>
  <div class="main">
    <el-container class="container">
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '4em' : '13.25em'">
        <navMenu :collapse="isCollapse" />
      </el-aside>
      <!-- 主容器 -->
      <el-container
        class="nav-container"
        :style="{
          left: isCollapse ? '4em' : '13.25em'
        }"
      >
        <el-header class="nav-header">
          <navHeader @foldChange="foldChange" />
        </el-header>
        <el-main class="nav-main">
          <div class="page">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import navMenu from '@/components/nav-main'
import navHeader from '@/components/nav-header'

export default defineComponent({
  components: {
    navMenu,
    navHeader
  },
  setup() {
    const isCollapse = ref(false)
    // 如果collapse，.nav-container{left=65px}
    const foldChange = (isFold: boolean) => {
      isCollapse.value = isFold
    }
    return {
      isCollapse,
      foldChange
    }
  }
})
</script>

<style scoped lang="less">
.main {
  position: relative;
}

.el-aside {
  background-color: #001529;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
}

.nav-container {
  position: absolute;
  left: 13.25em;
  top: 0;
  right: 0;
  background-color: #fff;

  .el-main {
    background-color: #f0f2f5;
    color: #333;

    .page {
      background-color: #fff;
      border-radius: 0.5em;
    }
  }
}

.el-header {
  color: #333;
  height: 3em;
  padding-left: 0.5em;
}
</style>
