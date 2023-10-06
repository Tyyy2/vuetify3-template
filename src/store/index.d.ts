import 'pinia'
import type { Router } from 'vue-router'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    // type the router added by the plugin above (#adding-new-external-properties)
    router: Router
  }
}
