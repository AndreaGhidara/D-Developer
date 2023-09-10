import { createApp } from 'vue'
//Import STYLE
import './style/style.scss'
import App from './App.vue'

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

//Import Bootstrap
import * as bootstrap from 'bootstrap'
//Import Vue Router
import { router } from './router';



createApp(App).use(router).mount('#app')
