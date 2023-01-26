<template>
  <div class="main-table">
    <!-- Header -->
    <div class="header">
      <h3 class="title">
        <slot name="title"></slot>
      </h3>
      <div class="handle">
        <slot name="handle"></slot>
      </div>
    </div>
    <el-table :data="tableList" border style="width: 100%" stripe row-key="id" lazy
      :tree-props="{ children: 'children' }">
      <!-- 可选列 -->
      <el-table-column type="selection" width="50" align="center" v-if="listProps.showSelect" />
      <el-table-column type="index" label="序号" width="60" align="center" v-if="listProps.showIndex" />

      <!-- 表单本体 -->
      <template v-for="column in listProps.tableSetting" :key="column.prop">
        <el-table-column v-bind="column" align="center" show-overflow-tooltip>
          <template #default="scope">
            <!-- 为啥一定要写这个 :row="scope.row" -->
            <slot :name="column.slotName" :row="scope.row">
              {{ scope.row[column.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- pagination -->
    <div class="pagination">
      <slot name="pagination"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    tableList: {
      type: Array,
      default: () => []
    },
    listProps: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="less" scoped>
.header {
  display: flex;
  flex: 1;
  padding-bottom: 0.5em;
}
</style>
