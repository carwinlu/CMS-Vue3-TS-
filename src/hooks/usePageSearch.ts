import { ref } from 'vue'
import { pageTable } from '@/components/page-main'

export function usePageSearch() {
  const pageTableRef = ref<InstanceType<typeof pageTable>>()
  const handleResetBtnClick = () => {
    pageTableRef.value?.getPageData()
  }
  const handleSearchBtnClick = (queryInfo: any) => {
    pageTableRef.value?.getPageData(queryInfo)
  }
  return {
    handleResetBtnClick,
    handleSearchBtnClick,
    pageTableRef
  }
}
