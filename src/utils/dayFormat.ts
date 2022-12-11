import utc from 'dayjs/plugin/utc'
import { dayjs } from 'element-plus'
dayjs.extend(utc)

const DEFAULT_format = 'YY-MM-DD HH:mm:ss'

export default function formatUtc(
  value: string,
  format: string = DEFAULT_format
) {
  return dayjs.utc(value).format(format)
}
