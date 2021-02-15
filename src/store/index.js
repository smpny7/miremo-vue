import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default new Vuex.Store({
    state: {
        user: {},
        status: false
    },
    mutations: {
        login(state, user) {
            state.user = user
            state.status = true
        },
        logout(state) {
            state.user = {}
            state.status = false
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
