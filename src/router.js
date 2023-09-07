import { createRouter, createWebHistory } from 'vue-router';

import AppHomePage from './pages/AppHomePage.vue';
import AppDevList from './pages/AppDevList.vue';
import AppSingleDev from './pages/AppSingleDev.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect:'/home'
        },
        {
            path: '/home',
            name: 'home',
            component: AppHomePage
        },
        {
            path: '/devlist',
            name: 'devlist',
            component: AppDevList
        },
        {
            path: '/devlist/:id',
            name: 'single-dev',
            component: AppSingleDev
        },
    ]
});
export { router };