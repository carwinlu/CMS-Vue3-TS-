<template>
  <div class="page-dialog">
    <el-dialog v-model="dialogVisible" :title="pageTittle" width="30%">
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
    //formData
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageTittle: {
      type: String,
      default: () => '新建'
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
    // 明明可以正确获取改变了的config，却不因此对页面更新
    // 这个watch也没有监听到config变化，
    const formConfig = ref({ ...props.dialogConfig })
    watch(formConfig, (newValue) => {
      console.log("formchange");
      console.log(newValue);
    }, {
      deep: true
    })
    console.log(formConfig);


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
