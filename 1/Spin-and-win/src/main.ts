import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Roulette } from 'vue3-roulette'

const app = createApp(App).component('roulette', Roulette)

app.use(router)

app.mount('#app')