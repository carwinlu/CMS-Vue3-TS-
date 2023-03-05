// dialog的基本功能实现
import { ref } from 'vue'
import { pageDialog } from '@/components/page-main'
function usePageDialog(newCallback?: any, editCallback?: any) {
  const dialogRef = ref<InstanceType<typeof pageDialog>>()
  const defaultInfo = ref({})
  const handleCreateClick = () => {
    if (dialogRef.value) {
      // 为什么dialogRef会不存在？
      dialogRef.value.dialogVisible = true
      console.log('click')
    }
    defaultInfo.value = {}

    newCallback && newCallback()
  }
  // 将item传给dialog

  const handleEditClick = (item: any) => {
    if (dialogRef.value) {
      dialogRef.value.dialogVisible = true
    }
    defaultInfo.value = { ...item }
    editCallback && editCallback()
  }
  return {
    dialogRef,
    defaultInfo,
    handleCreateClick,
    handleEditClick
  }
}

export default usePageDialog
