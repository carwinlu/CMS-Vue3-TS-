<template>
  <div class="my-form">
    <div class="search-title">
      <slot name="tittle"></slot>
    </div>
    <el-form :style="styleCustom" :label-width="labelWidth" :inline="inline">
      <template v-for="item of formProps" :key="item.label">
        <el-form-item :label="item.label" v-if="!item.isHiden">
          <!-- type :input || password -->
          <template v-if="item.type === 'input' || item.type === 'password'">
            <el-input :placeholder="item.placeholder" :show-password="item.type === 'password'"
              :model-value="modelValue[`${item.field}`]" @update:modelValue="handleValueChange($event, item.field)" />
          </template>
          <!-- type :select -->
          <template v-else-if="item.type === 'select'">
            <el-select :placeholder="item.placeholder" :model-value="modelValue[`${item.field}`]"
              @update:modelValue="handleValueChange($event, item.field)">
              <el-option v-for="option of item.searchOption" :key="option.value" :label="option.label"
                :value="option.value" />
            </el-select>
          </template>
          <!-- type :datepicker -->
          <template v-else-if="item.type === 'datepicker'">
            <el-date-picker v-bind="item.dateOptions" :model-value="modelValue[`${item.field}`]"
              @update:modelValue="handleValueChange($event, item.field)" />
          </template>
        </el-form-item>
      </template>
    </el-form>
    <div class="search-button">
      <slot name="searchButton"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, watch, ref } from 'vue'
import { formPropsType } from '../types'
export default defineComponent({
  props: {
    // 获取到modelValue之后，不能直接用来与表单双向绑定
    // 因为这样虽然可行，但是违反单向数据流原则；
    // 所以对其做复制，改变myForm上的数据，对myForm的数据进行监听，发生改变发送emit请求；

    // modelValue=> 表单的内容=> formData
    modelValue: {
      type: Object,
      required: true
    },
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
        padding: '1em'
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const configData = ref({ ...props.formProps })
    watch(
      configData,
      (newValue) => {
        console.log("emit change");
        console.log(newValue);
      },
      {
        deep: true
      }
    )

    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }
    return {
      handleValueChange
    }


  }
})
</script>

<style lang="less" scoped>
.my-form {
  text-align: center;

  box-sizing: border-box;

  .el-form {
    justify-content: space-between;
    padding-bottom: 0 !important;
  }
}

.my-form {
  .search-title {
    padding-bottom: 0.5rem;
    margin: 0;
    display: flex;
  }

  .search-button {
    text-align: right;
    right: 2em;
  }
}
</style>
