import { ref } from 'vue'
import { pageDialog } from '@/components/page-main'
function usePageDialog(newCallback: any, editCallback: any) {
  const dialogRef = ref<InstanceType<typeof pageDialog>>()
  const handleCreateClick = () => {
    if (dialogRef.value) {
      dialogRef.value.dialogVisible = true
    }
    defaultInfo.value = {}
    newCallback()
  }
  // 将item传给dialog
  const defaultInfo = ref({})
  const handleEditClick = (item: any) => {
    if (dialogRef.value) {
      dialogRef.value.dialogVisible = true
    }
    defaultInfo.value = { ...item }
    editCallback()
  }
  return {
    dialogRef,
    defaultInfo,
    handleCreateClick,
    handleEditClick
  }
}

export default usePageDialog
