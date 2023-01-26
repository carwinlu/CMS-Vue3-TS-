<template>
  <div class="goods">
    <pageTable pageName="goods" :listProps="listProps" ref="pageTableRef">
      <template #image="scope">
        <el-image style="width: 60px; height: 60px" :src="scope.row.imgUrl" fit="contain"
          :preview-src-list="[scope.row.imgUrl]" :hide-on-click-modal=true :preview-teleported=true />
      </template>
      <template #oldPrice="scope">
        <span>￥{{ scope.row.oldPrice }}</span>
      </template>
      <template #newPrice="scope">
        <span>￥{{ scope.row.newPrice }}</span>
      </template>
      <template #isSellOut="scope">
        <el-button size="small" plain :type="scope.row.status === 1 ? 'success' : 'danger'">{{
          scope.row.enable === 1 ?
            '售罄' : '有货'
        }}</el-button>
      </template>
    </pageTable>
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
