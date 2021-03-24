import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/global.css'

//vue app using the router and the store(vuex) mounted on the dom on the app component
createApp(App).use(store).use(router).mount('#app')
