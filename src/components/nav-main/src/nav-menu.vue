<template>
  <div class="nav-menu">
    <!-- title -->
    <div class="title">
      <img src="~@/assets/img/logo.svg" alt="icon" />
      <h5 v-show="!collapse">管理系统</h5>
    </div>
    <!-- 导航部分 -->
    <el-menu
      active-text-color="#ffd04d"
      background-color="#001529"
      text-color="#b7bdc3"
      class="el-menu-vertical-demo"
      :collapse="collapse"
      :default-active="activeItem"
    >
      <!-- 遍历menu-item -->
      <template v-for="item in menuList" :key="item.id">
        <!-- 一级菜单 -->
        <el-sub-menu :index="item.id + ''" v-if="item.type === 1">
          <!-- 因为他的icon=el-icon-monitor，但是只需要是monitor -->
          <template #title>
            <el-icon size="20px">
              <component :is="item.icon" />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <!-- 二级菜单 -->
          <template v-for="child in item.children" :key="child.id + ''">
            <el-menu-item :index="child.id + ''" @click="handleRoute(child)">
              <span>{{ child.name }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
        <!-- 假如一级菜单内无其他item -->
        <el-menu-item v-else-if="item.type === 2">
          <el-icon size="20px">
            <component :is="item.icon" />
          </el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import { Monitor } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { getMenuItemByRoute } from '@/utils/patch-router'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const menuList = computed(() => store.state.loginModule.userMenu)
    const router = useRouter()

    // handleItemClick
    const handleRoute = (item: any) => {
      router.push({
        path: item.url ?? '/not-found'
      })
    }
    // default-active-item;根据index => item.id
    // route => item.id
    const currentPath = useRoute().path
    const findIndex = getMenuItemByRoute(menuList.value, currentPath)
    const activeItem = ref(findIndex)

    return {
      menuList,
      activeItem,
      handleRoute
    }
  },
  components: {
    Monitor
  }
})
</script>

<style scoped lang="less">
.title {
  display: flex;
  margin-top: 1em;
  height: 1.5em;
  align-items: center;

  img {
    margin-left: 1.25em;
    width: 1.5em;
    height: 1.5em;
  }

  h5 {
    font-size: 1em;
    margin-top: 0.25em;
    margin-left: 1em;
  }
}

// 菜单部分样式
.el-menu {
  background-color: #001529;
  border: none;

  .el-sub-menu {
    .el-menu-item {
      background-color: #0c2135;
    }

    .el-menu-item:hover {
      cursor: pointer;
    }
  }
}
</style>
