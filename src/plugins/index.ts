import type { App } from 'vue'

import pinia from './pinia'
import toast from './toast'
import globalComponents from './globalComponents'

export default {
  install(app: App) {
    app.use(pinia)
    app.use(globalComponents)
    app.use(toast)
  }
}
