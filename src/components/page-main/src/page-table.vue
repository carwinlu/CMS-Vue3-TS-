<template>
  <div class="page-table">
    <mainTable :tableList="tableList" :listProps="listProps">
      <!-- Header插槽 -->
      <template v-if="listProps.tableName" #title>{{
        listProps.tableName
      }}</template>
      <!-- <template #handle>数据处理</template> -->

      <!-- 列中数据插槽 -->
      <template #status="scope">
        <el-button size="small" plain :type="scope.row.enable === 1 ? 'success' : 'danger'">{{
          scope.row.enable === 1 ?
            '启用' : '禁用'
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
    <!-- 分页器 -->
    <div class="pagination">
      <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[5, 10, 20, 30, 40]"
        layout="total, sizes, prev, pager, next, jumper" :total="tableCount" @size-change="handleSizeChange"
        @current-change="handelCurrentChange" />
    </div>
  </div>
</template>
<script lang="ts">

import { defineComponent, computed, ref, watch } from 'vue'
import mainTable from '@/baseui/table'
import { Delete } from '@element-plus/icons-vue'

import { useStore } from '@/store'
export default defineComponent({
  components: {
    mainTable,
    Delete
  },
  props: {
    pageName: {
      type: String,
      required: true
    },
    listProps: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const currentPage = ref(1)
    const pageSize = ref(10)
    const handleSizeChange = (e: any) => {
      pageSize.value = e;
    }
    const handelCurrentChange = (e: any) => { currentPage.value = e }
    watch(currentPage, () => {
      getPageData()
    })
    watch(pageSize, () => {
      getPageData()
    })

    const store = useStore()
    const getPageData = (queryInfo?: any) => {
      store.dispatch('system/getAllList', {
        listName: props.pageName,
        queryInfo: {
          offset: (currentPage.value - 1) * pageSize.value,
          size: pageSize.value,
          ...queryInfo
        }
      })
    }
    getPageData()

    const tableList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const tableCount = computed(() =>
      store.getters[`system/pageCountData`](props.pageName)
    )
    return {
      tableList,
      tableCount,
      currentPage,
      pageSize,
      getPageData,
      handleSizeChange,
      handelCurrentChange
    }
  }
})
</script>

<style lang="less">
.page-table {
  padding: 1em;
  padding-bottom: 3em;
  margin-top: 1em;
  background-color: #fff;
  border-radius: 00.5em;

  .pagination {
    float: right;
    margin-top: 0.5em;
  }
}
</style>
