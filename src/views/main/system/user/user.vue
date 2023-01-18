<template>
  <div class="user">
    <pageSearch :searchFormConfig="formConfig" @resetBtnClick="handleResetBtnClick"
      @searchBtnClick="handleSearchBtnClick" />
    <pageTable pageName="users" :listProps="listProps" ref="pageTableRef" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { pageSearch, pageTable } from '@/components/page-main'
import { listProps } from './config/tableConfig'
import { formConfig } from './config/searchConfig'
import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'user',
  components: {
    pageSearch,
    pageTable
  },
  setup() {
    const { pageTableRef, handleResetBtnClick, handleSearchBtnClick } =
      usePageSearch()
    return {
      formConfig,
      listProps,
      pageTableRef,
      handleResetBtnClick,
      handleSearchBtnClick
    }
  }
})
</script>

<style scoped>
.user {
  background-color: #f0f2f5;
}
</style>
