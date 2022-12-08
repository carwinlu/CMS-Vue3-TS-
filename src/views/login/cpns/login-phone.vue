<template>
  <div id="login-phone">
    <el-form label-width="80px" :rules="rules" :model="phoneAccount">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phoneAccount.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="variedNum">
        <div class="get-code">
          <el-input v-model="phoneAccount.variedNum" />
          <ElButton class="get-btn" type="primary">获取验证码</ElButton>
        </div>
      </el-form-item>
    </el-form>

  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from "../config/account-config"
export default defineComponent({
  setup() {
    const phoneAccount = reactive({
      phone: "",
      variedNum: ""
    })
    return {
      phoneAccount,
      rules
    }
  }
})
</script>

<style lang="less">
.get-code {
  display: flex;
}

.get-btn {
  margin-left: 5px;
}
</style>
