<template>
  <div class="page-dialog">
    <el-dialog v-model="dialogVisible" title="新建数据" width="30%">
      <my-form v-bind="dialogConfig" v-model="formData"></my-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>

  </div>
</template>
<script lang="ts">

import { defineComponent, ref, watch } from 'vue'


import myForm from '@/baseui/form'

export default defineComponent({
  components: {
    myForm
  },
  props: {
    dialogConfig: {
      type: Object,
      require: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})
    watch(() => props.defaultInfo, (newValue: any) => {
      if (props.dialogConfig) {
        for (const item of props.dialogConfig.formProps) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    })
    return {
      dialogVisible,
      formData
    }
  }
})
</script>

<style lang="less">
.dialog-footer {
  margin-top: -30px
}

.el-dialog_body {
  padding-bottom: 0%;
}
</style>
