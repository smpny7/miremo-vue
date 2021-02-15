<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>ログイン成功！</h2>
                <div class="mt-4"><button @click="logout">ログアウト</button></div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import router from '../router'
import store from '../store/index'

export default {
    name: 'success',
    methods: {
        logout() {
            firebase.auth().signOut().then(function() {
                store.commit('logout')
                router.push('/')
            }).catch(() => {
                store.commit('logout')
                router.push('/')
            })
        }
    }
}
</script>
