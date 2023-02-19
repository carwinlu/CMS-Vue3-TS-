import { useStore } from '@/store'

export function usePermissionMatch(pageName: string, item: string) {
  const store = useStore()
  const permissions = store.state.loginModule.menuPermissions
  const name = `system:${pageName}:${item}`
  return permissions.includes(name)
}
