<template>
  <div class="goods">
    <pageTable pageName="goods" :listProps="listProps" ref="pageTableRef" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { pageTable } from '@/components/page-main'
import { listProps } from './config/tableConfig'

export default defineComponent({
  name: 'goods',
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
.goods {
  background-color: #f0f2f5;
}
</style>
