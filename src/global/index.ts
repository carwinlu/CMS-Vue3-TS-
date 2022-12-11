import registerproperties from './register-globalVarias'
import { App } from 'vue'

export default function globalRegister(app: App) {
  app.use(registerproperties)
}
