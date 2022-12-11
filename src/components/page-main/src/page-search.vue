<template>
  <div class="page-search">
    <slot name="tittle">
      <h1>高级检索</h1>
    </slot>
    <!-- 其实最好，formData也是外面传过来的！ -->
    <myForm v-bind="formConfig" v-model="formData" />
    <slot name="search">
      <div class="search-button">
        <el-button>重置</el-button>
        <el-button type="primary">检索</el-button>
      </div>
    </slot>
  </div>
</template>
<script lang="ts">

import { defineComponent, ref } from 'vue'
import myForm from '@/baseui/form'

export default defineComponent({
  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    myForm
  },
  setup() {
    const formData = ref({
      name: '',
      id: '',
      password: '',
      sport: '',
      startDate: ''
    })
    return {
      formData
    }
  }

})
</script>

<style lang="less" scoped>
.page-search {
  background-color: #fff;
  border-radius: 00.5em;

  h1 {
    padding: 1rem;
    margin: 0;
  }

  .search-button {
    text-align: right;
    padding: 0 1.5em 1em 0;
  }

}
</style>
