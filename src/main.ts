import './assets/index.css'
import 'iconify-icon'

import { createApp } from 'vue'

import config from '../formkit.config'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { plugin } from '@formkit/vue'
import { createMetaManager } from 'vue-meta'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin, config)
app.use(createMetaManager())

app.mount('#app')
