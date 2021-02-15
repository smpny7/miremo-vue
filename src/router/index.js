import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase/app'
import Success from '../views/Success.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/logout',
        name: 'logout',
        component: () => import(/* webpackChunkName: "login" */ '../views/Logout.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '/success',
        name: 'success',
        component: Success
    },
    {
        path: '/:pathMatch(.*)',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes,
    // routes
})

// 未認証の場合はログイン画面へ
router.beforeResolve((to, from, next) => {
    console.log(to)
    if (to.path === '/') {
        next()
    } else {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log('認証中')
                next()
            } else {
                console.log('未認証')
                next({path: '/'})
            }
        })
    }
})


export default router
