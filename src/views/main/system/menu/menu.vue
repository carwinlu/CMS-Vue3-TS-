<template>
  <div class="system-menu">
    <pageTable :listProps="listProps" pageName="menu"></pageTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { pageTable } from '@/components/page-main'
import { listProps } from './config/tableConfig'

export default defineComponent({
  name: 'system-menu',
  components: {
    pageTable
  },
  setup() {
    return {
      listProps
    }
  }
})
</script>

<style scoped>

</style>
