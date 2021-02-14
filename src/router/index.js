import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase/app'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Success from '../views/Success.vue'

const routes = [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/success',
        name: 'success',
        component: Success
    },
    {
        path: '/:pathMatch(.*)',
        name: 'login',
        component: Login
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
