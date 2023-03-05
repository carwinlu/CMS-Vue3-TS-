<template>
  <div class="overview">
    <div class="markdown">
      <overview class="markdown-body" />
    </div>

  </div>
</template>

<script lang="ts">
import 'github-markdown-css'
import 'highlight.js/styles/github.css'
import { defineComponent } from 'vue'
// 引入md文件
import overview from './md/overview.md'
export default defineComponent({
  components: {
    overview
  }

})

</script>

<style scoped>
.markdown {
  padding: 10px 30px
}
</style>
