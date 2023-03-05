<template>
  <div class="role">
    <pageSearch :searchFormConfig="formConfig" />
    <!-- 传入数据：pageName；传入表格配置 -->
    <pageTable :listProps="listProps" pageName="role" @create-btn-click="handleCreateClick"
      @edit-btn-click="handleEditClick" />
    <!-- dialog -->
    <pageDialog :dialogConfig="dialogRef" pageTittle="角色编辑" :default-info="defaultInfo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { pageDialog, pageTable } from '@/components/page-main'
import { pageSearch } from '@/components/page-main'

import { listProps } from './config/tableConfig'

import { formConfig } from './config/searchConfig'
import usePageDialog from '@/hooks/usePageDialog'

export default defineComponent({
  name: 'role',
  components: {
    pageTable,
    pageSearch,
    pageDialog
  },
  setup() {

    const { dialogRef, defaultInfo, handleCreateClick, handleEditClick } = usePageDialog()
    return {
      listProps,
      formConfig,
      dialogRef,
      defaultInfo,
      handleCreateClick,
      handleEditClick
    }
  }
})
</script>

<style scoped>
.role {
  background-color: #f0f2f5;
}
</style>
