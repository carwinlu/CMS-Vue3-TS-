<template>
  <div id="login-account">
    <el-form label-width="80px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import localCache from "@/utils/cache"
import store from '@/store'

export default defineComponent({
  setup() {
    const account = reactive({
      name: localCache.getCache("name") || "",
      password: localCache.getCache("password") || ""
    })
    // 实现登录逻辑
    const formRef = ref<InstanceType<typeof ElForm>>()
    const accountLogin = (isKeepPassword: boolean) => {
      // 通过正则，登录
      formRef.value?.validate(valid => {
        if (valid) {
          // 记住密码
          if (isKeepPassword) {
            localCache.setCache("name", account.name)
            localCache.setCache("password", account.password)
          }
          // 网络请求
          store.dispatch('loginModule/accountLogin', account)
        }
      })


    }

    return {
      account,
      rules,
      formRef,
      accountLogin
    }
  }
})
</script>

<style lang="less">

</style>
