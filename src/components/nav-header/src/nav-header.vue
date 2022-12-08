<template>
  <div class="nav-header">
    <!-- isExpand -->
    <el-icon color="#333" :size="32" class="expand">
      <component :is="isCollapse ? 'Expand' : 'Fold'" @click="collapseChange"></component>
    </el-icon>
    <!-- breadcrumb -->
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/main' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 用户信息 -->
  </div>
</template>
<script lang="ts">


import { defineComponent, ref } from 'vue'
// element
import { ArrowRight } from '@element-plus/icons-vue'
export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    let isCollapse = ref(false)
    const collapseChange = () => {
      isCollapse.value = !isCollapse.value
      emit('foldChange', isCollapse.value)
    }
    return {
      isCollapse,
      ArrowRight,
      collapseChange
    }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  height: 100%;
  display: flex;

  .expand {
    margin-top: 0.25em;
  }

  .el-breadcrumb {
    margin: 1.5em 1em 00.5em;
  }
}
</style>
