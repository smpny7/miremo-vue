import {createRouter, createWebHistory} from 'vue-router'
import firebase from 'firebase'
import store from '../store/index'
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
        path: '/create',
        name: 'Create',
        component: () => import(/* webpackChunkName: "home" */ '../views/Edit.vue')
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
    firebase.auth().onAuthStateChanged(user => {
        if (to.path === '/') {
            if (user) {
                store.commit('login', user);
                next({path: '/home'})
            } else {
                store.commit('login', {});
                next()
            }
        } else {
            if (user) {
                store.commit('login', user);
                next()
            } else {
                store.commit('login', {});
                next({path: '/'})
            }
        }
    })

    firebase.firestore().collection("users").doc(store.getters.user.uid).get()
        .then((data) => {
            if(data.exists) {
                console.log(data.get('minecraft_id'))
                store.commit('setMinecraftID', data.get('minecraft_id'));
            } else {
                console.log('MinecraftIDが登録されていません')
            }
        })
        .catch((error) => {
            console.log(error);
        });
})


export default router
