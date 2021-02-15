import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default new Vuex.Store({
    state: {
        user: {},
        minecraft_id: null,
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
        },
        setMinecraftID(state, minecraft_id) {
            state.minecraft_id = minecraft_id
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        isSignedIn(state) {
            return state.status
        },
        getMinecraftID(state) {
            return state.minecraft_id
        }
    },
    plugins: [createPersistedState({storage: window.sessionStorage})]
})
