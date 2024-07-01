// import '../src/assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from '@primevue/core/config'
import Aura from '@primevue/themes/aura'
import { pluginRouter } from './router/router'

createApp(App)
  .use(pluginRouter)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        prefix: 'p',
        darkModeSelector: 'selector',
        cssLayer: { name: 'primeVue' }
      }
    }
  })
  .mount('#app')
