import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

const app = createApp(App)

app.component('home', Home)
app.component('login', Login)

app.mount('#app')
