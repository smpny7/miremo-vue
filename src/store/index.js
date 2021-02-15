import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default new Vuex.Store({
    state: {
        user: {},
        status: false
    },
    mutations: {
        onAuthStateChanged(state, user) {
            state.user = user //firebaseが返したユーザー情報
        },
        onUserStatusChanged(state, status) {
            state.status = status //ログインしてるかどうか true or false
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        isSignedIn(state) {
            return state.status
        }
    },
    plugins: [createPersistedState({storage: window.sessionStorage})]
})
