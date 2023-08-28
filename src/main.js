import { createApp } from 'vue'
//Import STYLE
import './style.scss'
import App from './App.vue'

//Import Bootstrap
import * as bootstrap from 'bootstrap'
//Import Vue Router
import { router } from './router';


createApp(App).use(router).mount('#app')