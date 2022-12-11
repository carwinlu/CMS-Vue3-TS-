<template>
  <div class="user">
    <pageSearch :formConfig="formConfig" />
    <pageTable :usersList="usersList" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { pageSearch, pageTable } from '@/components/page-main'
import { formConfig } from './config/userFormConfig'
import { useStore } from '@/store'

export default defineComponent({
  name: 'user',
  components: {
    pageSearch,
    pageTable,

  },
  setup() {
    const store = useStore()
    store.dispatch('system/getUsersList', {
      url: '/users/list',
      queryInfo: {
        "offset": 0,
        "size": 10
      }
    })
    const usersList = computed(() => store.state.system.usersList)
    return {
      formConfig,
      usersList
    }
  }
})
</script>

<style scoped>
.user {
  background-color: #f0f2f5;
}


</style>
