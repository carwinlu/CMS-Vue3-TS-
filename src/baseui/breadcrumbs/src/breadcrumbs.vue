<template>
  <div class="breadcrumbs">
    <el-breadcrumb :separator-icon="ArrowRight">
      <template v-for="item of itemNames" :key="item.name">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts">

import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
// element
import { ArrowRight } from '@element-plus/icons-vue'
import { getParentMenu } from '@/utils/patch-router'
export default defineComponent({
  setup() {
    const store = useStore()
    // 因为itemNames是依托下列条件变化的属性，所有要用计算属性包裹；
    // 这也是为什么要以参数形式传输path和menu的原因；方便监听其变化
    const itemNames = computed(() => {
      const menu = store.state.loginModule.userMenu
      const currentPath = useRoute().path
      const menuName = getParentMenu(menu, currentPath)
      return menuName
    })

    return {
      itemNames,
      ArrowRight
    }
  }
})
</script>

<style lang="less" scoped>
.el-breadcrumb {
  margin: 1.5em 1em 00.5em;
}
</style>
