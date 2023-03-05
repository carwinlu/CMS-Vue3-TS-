<template>
  <div class="user">
    <pageSearch :searchFormConfig="formConfig" @resetBtnClick="handleResetBtnClick"
      @searchBtnClick="handleSearchBtnClick" />
    <pageTable pageName="users" :listProps="listProps" ref="pageTableRef" @create-btn-click="handleCreateClick"
      @edit-btn-click="handleEditClick" />
    <pageDialog :dialogConfig="dialogConfigRef" ref="dialogRef" :defaultInfo="defaultInfo" :pageTittle="pageTittle" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
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

    const pageTittle = ref('')
    // 新建数据dialog的回调函数
    const newCallback = () => {
      const passwordItem = dialogConfig.formProps.find((item) => item.field == 'password')
      passwordItem!.isHiden = false
      pageTittle.value = "新建用户"
      // console.log(dialogConfig);
      // 为什么dialogConfig变了，但是dialog没变！！！！！！！
    }

    // 编辑数据dialog的回调函数
    const editCallback = () => {
      const passwordItem = dialogConfig.formProps.find((item) => item.field == 'password')
      passwordItem!.isHiden = true
      pageTittle.value = "编辑用户"
    }
    // 动态添加department&role
    const store = useStore()
    const dialogConfigRef = computed(() => {
      const allDepartment = store.state.allDepartment
      const allRole = store.state.allRole
      const departmentItem = dialogConfig.formProps.find(item => item.field == 'department')
      departmentItem!.dateOptions = allDepartment.map(item => {
        return { title: item.name, value: item.id }
      })

      const roleItem = dialogConfig.formProps.find(item => item.field == 'role')
      const roleSetting = allRole.map(item => {
        return { title: item.name, value: item.id }
      })
      roleItem?.dateOptions.push(...roleSetting)
      return dialogConfig
    })


    // table也页面点击监听
    const { dialogRef, defaultInfo, handleCreateClick, handleEditClick } = usePageDialog(newCallback, editCallback)
    return {
      formConfig,
      dialogConfigRef,
      listProps,
      pageTableRef,
      dialogRef,
      defaultInfo,
      pageTittle,
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
