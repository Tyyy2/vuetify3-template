/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import { useApi } from './api'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import SideMenu from '@/components/SideMenu.vue'
import MyBtn from '@/components/MyBtn.vue'
import TextField from '@/components/TextField.vue'

const app = createApp(App)
app.component('SideMenu', SideMenu)
app.component('TextField',TextField)
app.component('Btn', MyBtn)

useApi(app) // 全域註冊 api

registerPlugins(app)

app.mount('#app')
