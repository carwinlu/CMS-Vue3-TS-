<template>
  <h2>404 Not Found</h2>
  <a @click="backToMain">回到首页</a>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import router from '@/router'
export default defineComponent({
  setup() {
    const backToMain = () => {
      router.push('/main')
    }
    return {
      backToMain
    }
  }
})
</script>

<style lang="less"></style>
