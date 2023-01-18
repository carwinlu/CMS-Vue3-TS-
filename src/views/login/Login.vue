<template>
  <div id="login">
    <panels />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import Panels from './cpns/login-panels.vue'
export default defineComponent({
  components: {
    Panels
  }
})
</script>

<style lang="less">
#login {
  width: 100%;
  height: 100%;
  background-image: url(/src/assets/img/login-bg.svg);
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
}
</style>
