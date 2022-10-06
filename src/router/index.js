import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RussupportView from "../views/RussupportView.vue";
import JavaScriptView from "../views/JavaScriptView.vue";
import JavaScriptThemeView from "../views/JavaScriptThemeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/rus-support',
            name: 'rus-support',
            component: RussupportView
        },
        {
            path: '/javascript',
            name: 'javascript',
            component: JavaScriptView
        },
        {
            path: '/javascript/:theme',
            name: 'javascript-theme',
            component: JavaScriptThemeView
        }
    ]
})

export default router
