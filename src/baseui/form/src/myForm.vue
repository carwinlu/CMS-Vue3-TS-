<template>
  <div>
    <el-form :style="styleCustom" :label-width="labelWidth" :inline=inline
    >
      <template v-for="item of formProps" :key="item.index">
        <el-form-item :label="item.label">
          <!-- type :input || password -->
          <template v-if="(item.type === 'input' || item.type === 'password')">
            <el-input :placeholder="item.placeholder" :show-password="item.type === 'password'" />
          </template>
          <!-- type :select -->
          <template v-else-if="item.type === 'select'">
            <el-select :placeholder="item.placeholder">
              <el-option v-for="option of item.searchOption" :key="option.value" :label="option.label"
                :value="option.value" />
            </el-select>
          </template>
          <!-- type :datepicker -->
          <template v-else-if="item.type === 'datepicker'">
            <el-date-picker v-bind="item.dateOptions" />
          </template>
        </el-form-item>
      </template>

    </el-form>
  </div>
</template>
<script lang="ts">

import { defineComponent, PropType } from 'vue'
import { formPropsType } from '../types'
export default defineComponent({
  props: {
    formProps: {
      type: Array as PropType<formPropsType[]>,
      // 对象和数组的默认值要以箭头函数返回值形式
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '120px'
    },
    inline: {
      type: Boolean,
      default: true
    },
    styleCustom: {
      type: Object,
      default: () => ({
        inline: true,
        "padding-top": '1em'
      })
    }
  },


})
</script>

<style lang="less" scoped>

</style>
