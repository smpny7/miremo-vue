<template>
    <div class="bg-secondary fixed flex h-full items-center justify-center w-full">
        <div class="text-center">
            <img class="mx-auto" src="../assets/img/logo.svg" alt="Logo">
            <h1 class="font-kavoon mt-4 text-4xl text-primary">miremo</h1>
            <div class="mt-20"><img @click="googleLogin" class="cursor-pointer mx-auto w-56"
                                    src="../assets/img/btn-google-signin.svg" alt="GoogleLogin"></div>
            <p class="mt-7 text-red-500">{{ errorMessage }}</p>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import router from '../router'
import store from '../store/index'

export default {
    name: 'login',
    data() {
        return {
            errorMessage: '',
            showError: false
        }
    },
    created() {
        if (this.$store.getters.user) router.push('/success')
    },
    methods: {
        googleLogin() {
            const provider = new firebase.auth.GoogleAuthProvider()

            firebase.auth().signInWithPopup(provider).then(result => {
                console.log(result.user.displayName)
                store.commit('login', result.user);
                router.push('/success')
            }).catch(error => {
                this.errorMessage = error.message
                this.showError = true
            })
        }
    }
}
</script>
