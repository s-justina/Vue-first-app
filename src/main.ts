import './assets/main.css'
import User from "./components/User.vue"


import {createApp} from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.component('app-user', User)

app.use(router)

app.mount('#app')


