import { filters } from '@/global/register-globalVarias'
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $filters: typeof filters
  }
}
