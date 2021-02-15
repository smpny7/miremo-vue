<template>
    <div class="bg-secondary fixed flex h-full items-center justify-center w-full">
        <router-link to="/home">
            <img class="cursor-pointer fixed right-3 top-3 w-10" src="../assets/img/close.svg" alt="Close">
        </router-link>
        <div class="text-center">
            <img class="mx-auto rounded-full w-36" :src="user.photoURL" alt="Icon">
            <p class="font-notosans font-semibold mt-4 text-2xl text-white tracking-widest">{{ user.displayName }}</p>
            <p class="font-notosans text-gray-500 tracking-wide">kit130101</p>
            <div @click="logout"
                class="bg-red-400 cursor-pointer flex h-10 items-center justify-center mt-8 mx-auto rounded w-32 transition duration-700 ease-in-out transform hover:scale-101">
                <p class="font-mplus font-semibold text-sm text-white tracking-wider">ログアウト</p>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import router from '../router'
import store from '../store/index'

export default {
    name: "Logout",
    computed: {
        user() {
            return this.$store.getters.user;
        }
    },
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
};
</script>
