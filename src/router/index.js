import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'createAccount',
        component: () => import('../views/CreateAccount.vue')
    },

    { 
        path: '/newTask',
        name: 'newTask',
        component: () => import('../views/NewTask.vue')

    }
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    
})

console.log('router:', import.meta.env.BASE_URL)

export default router;