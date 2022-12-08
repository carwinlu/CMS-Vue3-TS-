<template>
  <div id="loginPanels">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <User />
            </el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <account ref='accountRef' />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <Iphone />
            </el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <phone />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control" stretch>
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick">
      立即登录
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Account from './login-account.vue'
import Phone from './login-phone.vue'

export default defineComponent({
  components: {
    Account,
    Phone
  },
  setup() {
    const isKeepPassword = ref(true)
    // 获取Account的实例
    const accountRef = ref<InstanceType<typeof Account>>()
    const handleLoginClick = () => {
      // 调用Accout中的验证登录方法
      accountRef.value?.accountLogin(isKeepPassword.value)

    }



    return {
      isKeepPassword,
      accountRef,
      handleLoginClick
    }
  }
})
</script>

<style lang="less" scoped>
#loginPanels {
  width: 320px;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 120px;
}

.custom-tabs-label span {
  letter-spacing: 1px;
}

.account-control {
  display: flex;
  justify-content: space-between;
}

.login-btn {
  margin-top: 5px;
  width: 320px;
  height: 35px;
}
</style>
