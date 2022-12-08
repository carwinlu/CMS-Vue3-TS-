<template>
  <div class="user">
    <!-- 为什么？！ -->
    <!-- v-bind='post'  === :id='post.id' :name='post.name' -->
    <myForm v-bind="formConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import myForm from '@/baseui/form';
import { formConfig } from './config/userFormConfig'

export default defineComponent({
  name: 'user',
  components: {
    myForm
  },
  setup() {
    return {
      formConfig
    }
  }
})
</script>

<style scoped>

</style>
