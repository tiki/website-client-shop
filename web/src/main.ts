import '../src/assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import { pluginRouter } from './router/router'

createApp(App).use(pluginRouter).mount('#app')
