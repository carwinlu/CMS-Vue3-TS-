<template>
  <div class="user">
    <pageSearch :searchFormConfig="formConfig" @resetBtnClick="handleResetBtnClick"
      @searchBtnClick="handleSearchBtnClick" />
    <pageTable pageName="users" :listProps="listProps" ref="pageTableRef" @create-btn-click="handleCreateClick"
      @edit-btn-click="handleEditClick" />
    <pageDialog :dialogConfig="dialogConfig" ref="dialogRef" :defaultInfo="defaultInfo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { pageSearch, pageTable, pageDialog } from '@/components/page-main'
import { listProps } from './config/tableConfig'
import { formConfig } from './config/searchConfig'
import { usePageSearch } from '@/hooks/usePageSearch'
import { dialogConfig } from './config/dialogConfig'
import usePageDialog from '@/hooks/usePageDialog'
import { useStore } from '@/store'

export default defineComponent({
  name: 'user',
  components: {
    pageSearch,
    pageTable,
    pageDialog
  },
  setup() {
    // 搜索页面点击监听
    const { pageTableRef, handleResetBtnClick, handleSearchBtnClick } =
      usePageSearch()
    // 回调函数
    const newCallback = () => {
      const passwordItem = dialogConfig.formProps.find((item) => item.field == 'password')
      if (passwordItem) {
        passwordItem.isHiden = false
      }
    }
    const editCallback = () => {
      const passwordItem = dialogConfig.formProps.find((item) => item.field == 'password')
      if (passwordItem) {
        passwordItem.isHiden = true
      }
      // 动态添加department&role
      const store = useStore()
      const department = store.state.allDepartment
      const departmentOptions = department.map(item => {
        return { title: item.name, value: item.id }
      })
      const departmentSet = dialogConfig.formProps.find(item => item.field == 'department')?.dateOptions
      departmentSet.push(departmentOptions)
      console.log(departmentSet);

    }
    // table也页面点击监听
    const { dialogRef, defaultInfo, handleCreateClick, handleEditClick } = usePageDialog(newCallback, editCallback)
    return {
      formConfig,
      dialogConfig,
      listProps,
      pageTableRef,
      dialogRef,
      defaultInfo,
      handleResetBtnClick,
      handleSearchBtnClick,
      handleCreateClick,
      handleEditClick
    }
  }
})
</script>

<style scoped>
.user {
  background-color: #f0f2f5;
}
</style>
