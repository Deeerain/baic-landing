import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
var app = createApp(App)

app.use(pinia)
app.mount('#app')
