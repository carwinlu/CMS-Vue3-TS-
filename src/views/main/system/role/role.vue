<template>
  <div class="role">
    <pageSearch :searchFormConfig="formConfig" />
    <!-- 传入数据：pageName；传入表格配置 -->
    <pageTable :listProps="listProps" pageName="role" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { pageTable } from '@/components/page-main'
import { pageSearch } from '@/components/page-main'

import { listProps } from './config/tableConfig'

import { formConfig } from './config/searchConfig'

export default defineComponent({
  name: 'role',
  components: {
    pageTable,
    pageSearch
  },
  setup() {
    return {
      listProps,
      formConfig
    }
  }
})
</script>

<style scoped>
.role {
  background-color: #f0f2f5;
}
</style>
