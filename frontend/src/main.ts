import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "go-captcha-vue/dist/style.css"
import GoCaptcha from "go-captcha-vue"
const app = createApp(App)
app.use(GoCaptcha)
app.mount('#app')


