<template>
  <div class="page-search">
    <myForm v-bind="searchFormConfig" v-model="formData">
      <template #tittle>
        <h3>高级检索</h3>
      </template>
      <template #searchButton>
        <div class="search-button">
          <el-button @click="handleResetClick">重置</el-button>
          <el-button type="primary" @click="handleSearchClick">检索</el-button>
        </div>
      </template>
    </myForm>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import myForm from '@/baseui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    myForm
  },
  emits: ['resetBtnClick', 'searchBtnClick'],
  setup(props, { emit }) {
    const formDataRaw: any = {}
    // 1.动态决定formData
    // formData = searchConfig的field字段
    const formObj = props.searchFormConfig.formProps ?? []
    for (const item of formObj) {
      formDataRaw[item.field] = ''
    }
    const formData = ref(formDataRaw)
    // 2. 重置按钮的监听
    // 因为MyForm 中的数据是浅拷贝过的，所以不会对这里的数据产生依赖；

    // 方向思考：
    // a. 利用computed监听
    // b. 遍历赋值
    // c. 根据v-model的特性，自己监听
    const handleResetClick = () => {
      // formData.value = formDataRaw
      for (const key in formDataRaw) {
        formData.value[`${key}`] = formDataRaw[key]
      }
      emit('resetBtnClick')
    }

    // 3.搜索按钮监听
    const handleSearchClick = () => {
      emit('searchBtnClick', formData.value)
    }
    return {
      formData,
      handleResetClick,
      handleSearchClick
    }
  }
})
</script>

<style lang="less" scoped>
.page-search {
  background-color: #fff;
  border-radius: 00.5em;

  .my-form {
    padding: 1em;
  }
}
</style>
