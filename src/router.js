import { createRouter, createWebHistory } from 'vue-router';

import AppHomePage from './pages/AppHomePage.vue';
import AppDevList from './pages/AppDevList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHomePage
        },
        {
            path: '/dev-list',
            name: 'devlist',
            component: AppDevList
        },
    ]
});
export { router };