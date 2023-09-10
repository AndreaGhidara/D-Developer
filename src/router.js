import { createRouter, createWebHistory } from 'vue-router';

import AppHomePage from './pages/AppHomePage.vue';
import AppDevList from './pages/AppDevList.vue';
import AppSingleDev from './pages/AppSingleDev.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
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
        {
            path: '/backend-home',
            beforeEnter() {
                window.location.href = 'http://127.0.0.1:8000'; // Sostituisci con l'URL effettivo del tuo backend Laravel
            },
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash, behavior: 'smooth' };
        } else {
            return { x: 0, y: 0 };
        }
    }
});
export { router };