<template>
    <div class="container mx-auto">
        <div class="row">
            <div class="col-md-12">
                <h2>Googleアカウントでログイン</h2>
                <p>{{ user }}</p>
                <div class="text-center mt-2"><img @click="googleLogin" class="cursor-pointer mx-auto w-52"
                                       src="../assets/img/btn-google-signin.png" alt="GoogleLogin"></div>
                <div class="mt-2">
                    <p>{{ errorMessage }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.mt-2 {
    margin-top: 2px;
}
</style>

<script>
import firebase from 'firebase/app'
import router from '../router'

export default {
    name: 'login',
    data() {
        return {
            user: null,
            errorMessage: '',
            showError: false
        }
    },
    methods: {
        googleLogin() {
            const provider = new firebase.auth.GoogleAuthProvider()

            firebase.auth().signInWithPopup(provider).then(result => {
                console.log(result.user.displayName)
                this.user = result.user.displayName
                router.push('/success')
            }).catch(error => {
                console.log(error)
                this.errorMessage = error.message
                this.showError = true
            })
        }
    }
}
</script>
