import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'boxicons'
import 'default-passive-events';//解决echarts，handler as 'passive'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')   