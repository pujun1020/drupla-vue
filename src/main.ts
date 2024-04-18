import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import naive from 'naive-ui'
import hljsVuePlugin from "@highlightjs/vue-plugin";
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
const app = createApp(App)
app.use(hljsVuePlugin)
app.use(createPinia())
app.use(router)
app.use(naive)
app.mount('#app')   