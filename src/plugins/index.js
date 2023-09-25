/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
// import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'

export function registerPlugins (app) {
  // bypass globalConfig
  pinia.use(({store}) => {
    store.$api = app.config.globalProperties.$api
  })
  // loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}
