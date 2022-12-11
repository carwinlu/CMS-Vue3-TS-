<template>
  <div class="nav-header">
    <!-- isExpand -->
    <el-icon color="#333" :size="24" class="expand">
      <component :is="isCollapse ? 'Expand' : 'Fold'" @click="collapseChange"></component>
    </el-icon>
    <!-- breadcrumb -->
    <breadcrumbs />
    <!-- 用户信息 -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import breadcrumbs from '@/baseui/breadcrumbs'

export default defineComponent({
  components: {
    breadcrumbs
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    let isCollapse = ref(false)
    const collapseChange = () => {
      isCollapse.value = !isCollapse.value
      emit('foldChange', isCollapse.value)
    }
    return {
      isCollapse,
      collapseChange
    }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;

  .expand {
    margin-top: 0.25em;
  }

}
</style>
