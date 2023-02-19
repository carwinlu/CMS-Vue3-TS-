<template>
  <div class="nav-header">
    <div class="header-left">
      <!-- isExpand -->
      <el-icon color="#333" :size="24" class="expand">
        <component :is="isCollapse ? 'Expand' : 'Fold'" @click="collapseChange"></component>
      </el-icon>
      <!-- breadcrumb 路径导航-->
      <breadcrumbs />
    </div>
    <!-- 用户信息 -->
    <div class="header-right">
      <el-icon>
        <Comment />
      </el-icon>

      <el-dropdown>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="30"
          class="userCenter" />
        <!-- 下拉菜单 -->
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>{{ userName }}</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import breadcrumbs from '@/baseui/breadcrumbs'
import { useStore } from '@/store'

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

    const store = useStore()
    const userInfo = computed(() => store.state.loginModule.userInfo)
    const userName = userInfo.value.data.name
    return {
      isCollapse,
      userName,
      collapseChange
    }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  height: 100%;
  display: flex;
  justify-content: space-between;

  .header-left {
    height: 100%;
    text-align: center;
    display: flex;

    .expand {
      margin-top: 0.6em;
    }

    .breadcrumbs {
      display: inline;
    }
  }

  .header-right {
    text-align: center;
    display: flex;
    align-items: center;

    .userCenter {
      margin: 0.5em 1em;
    }

    .example-showcase .el-dropdown-link {
      cursor: pointer;
      color: var(--el-color-primary);
      display: flex;
      align-items: center;
    }
  }
}
</style>
