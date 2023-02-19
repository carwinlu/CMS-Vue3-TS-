<template>
  <div class="page-table">
    <mainTable :tableList="tableList" :listProps="listProps">
      <!-- Header插槽 -->
      <template v-if="listProps.tableName" #title>{{
        listProps.tableName
      }}</template>
      <template v-if="isCreate" #handle>
        <el-button type="primary" @click="handleCreateClick">新建数据</el-button>
      </template>

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

      <!-- 动态插槽 -->
      <template v-for="item in otherSlot" :key="item.prop" #[item.slotName]="scope">
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>

      <!-- 数据处理列 -->
      <template #datahandle="scope">
        <el-button link type="primary" size="small" v-if="isUpdate" @click="handleDataEdit(scope.row)">
          <el-icon>
            <Edit />
          </el-icon>
          编辑
        </el-button>

        <el-button link type="primary" size="small" v-if="isDelete" @click='handelDel(scope.row)'><el-icon>
            <Delete />
          </el-icon>删除</el-button>
      </template>
      <!-- 分页器 -->
      <template #pagination v-if="tableCount">
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[5, 10, 20, 30, 40]"
          layout="total, sizes, prev, pager, next, jumper" :total="tableCount" @size-change="handleSizeChange"
          @current-change="handelCurrentChange" />
      </template>
    </mainTable>

  </div>
</template>
<script lang="ts">

import { defineComponent, computed, ref, watch } from 'vue'
import mainTable from '@/baseui/table'
import { Delete } from '@element-plus/icons-vue'

import { useStore } from '@/store'

import { usePermissionMatch } from '@/hooks/usePermissionMatch'

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
  emits: ["CreateBtnClick", "EditBtnClick"],
  setup(props, { emit }) {


    // 权限判断
    const isCreate = usePermissionMatch(props.pageName, 'create')
    const isUpdate = usePermissionMatch(props.pageName, 'update')
    const isDelete = usePermissionMatch(props.pageName, 'delete')
    const isQuery = usePermissionMatch(props.pageName, 'query')
    // 分页器数据
    const currentPage = ref(1)
    const pageSize = ref(10)

    // 网络请求
    const store = useStore()
    const getPageData = (queryInfo?: any) => {
      if (!isQuery) return
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

    // 获取数据
    const tableList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const tableCount = computed(() =>
      store.getters[`system/pageCountData`](props.pageName)
    )

    // 分页器计算、监听
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

    // 判断是否为动态插槽
    const regularSlot = ['status', 'createAt', 'updateAt', 'datahandle']
    const otherSlot = []
    for (const item of props.listProps.tableSetting) {
      if (!regularSlot.includes(item.slotName) && item.slotName) {
        otherSlot.push(item)
      }
    }
    // 数据删除监听
    const handelDel = (item: any) => {
      // 调用删除的网络请求
      store.dispatch('system/delAnyDate', {
        id: item.id,
        pageName: props.pageName
      })
    }

    // 新建按钮点击
    const handleCreateClick = () => {
      emit('CreateBtnClick')
    }
    // 编辑按钮点击
    const handleDataEdit = (item: any) => {
      emit("EditBtnClick", item)
    }


    return {
      tableList,
      tableCount,
      currentPage,
      pageSize,
      otherSlot,
      isCreate,
      isUpdate,
      isDelete,
      getPageData,
      handleSizeChange,
      handelCurrentChange,
      handelDel,
      handleCreateClick,
      handleDataEdit
    }
  }
})
</script>

<style lang="less">
.page-table {
  padding: 1em;
  margin-top: 1em;
  padding-bottom: 3em;
  background-color: #fff;
  border-radius: 00.5em;

  .pagination {
    float: right;
    margin-top: 0.5em;
  }
}
</style>
