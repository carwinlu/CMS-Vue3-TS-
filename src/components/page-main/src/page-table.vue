<template>
  <div class="page-table">

    <mainTable :usersList="usersList" :listProps="listProps">
      <!-- Header插槽 -->

      <template #title>用户展示</template>
      <!-- <template #handle>数据处理</template> -->

      <!-- 列中数据插槽 -->
      <template #status="scope">
        <el-button size="small" plain :type="scope.row.enable === 1 ? 'success' : 'danger'">{{ scope.row.enable === 1 ?
            "启用" : "禁用"
        }}</el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.timeFormat(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.timeFormat(scope.row.updateAt) }}</span>
      </template>
      <!-- 数据处理列 -->
      <template #datahandle>
        <el-button link type="primary" size="small"><el-icon>
            <Edit />
          </el-icon>编辑</el-button>

        <el-button link type="primary" size="small"><el-icon>
            <Delete />
          </el-icon>删除</el-button>
      </template>
    </mainTable>
  </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue'
import mainTable from '@/baseui/table'
import { Delete } from '@element-plus/icons-vue'
import { listProps } from '@/views/main/system/user/config/tableConfig'
export default defineComponent({
  components: {
    mainTable,
    Delete
  },
  props: {
    usersList: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {
      listProps
    }
  }
})
</script>

<style lang="less">
.page-table {
  padding: 1em;
  margin-top: 1em;
  background-color: #fff;
  border-radius: 00.5em;
}
</style>
