import { App } from 'vue'
import formatUtc from '@/utils/dayFormat'

export const filters = {
  timeFormat(value: string) {
    return formatUtc(value)
  }
}

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = filters
}
