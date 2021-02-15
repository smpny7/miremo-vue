<template>
    <div>
        <div class="bg-secondary fixed h-full justify-center top-0 w-full">
            <router-link to="/logout">
                <img class="cursor-pointer fixed right-4 top-4 w-8" src="../assets/img/setting.svg" alt="Setting">
            </router-link>
        </div>

        <div class="relative top-56 text-center">
            <img class="mx-auto rounded-full w-36" :src="user.photoURL" alt="Icon">
            <p class="font-notosans font-semibold mt-4 text-2xl text-white tracking-widest">{{ user.displayName }}</p>
            <p class="font-notosans text-gray-500 tracking-wide">{{ minecraft_id }}</p>
        </div>

        <div v-for="server in servers" :key="server.id"
             class="bg-primaryContainer cursor-pointer flex h-24 items-center mt-4 mx-auto relative rounded top-64 w-105 transition duration-700 ease-in-out transform hover:scale-101">
            <div class="relative">
                <img class="flex-none h-16 ml-6 rounded w-16" :src="user.photoURL" alt="ServerIcon">
                <div class="absolute bg-online -bottom-0.5 h-4 -right-0.5 rounded-full w-4"></div>
            </div>
            <div class="flex-grow ml-5">
                <p class="font-mplus font-semibold text-lg text-white tracking-wider">{{ server.displayName }}</p>
                <p class="font-mplus mt-2 text-gray-300 text-sm">オンライン : 2 / 12</p>
            </div>
            <img class="flex-none mr-2 w-9" src="../assets/img/access.svg" alt="Access">
        </div>

        <div class="grid gap-6 mt-6 mx-auto relative top-64 w-105" v-bind:class="[servers.length > 0 ? 'grid-cols-2' : 'grid-cols-1']">
            <router-link to="/create">
                <div
                    class="bg-primary cursor-pointer flex h-12 items-center justify-center rounded transition duration-700 ease-in-out transform hover:scale-101">
                    <span class="font-mplus font-semibold text-white tracking-wider">サーバーを追加</span>
                </div>
            </router-link>
            <div v-if="servers.length > 0"
                class="bg-primaryContainer cursor-pointer flex h-12 items-center justify-center rounded transition duration-700 ease-in-out transform hover:scale-101">
                <p class="font-mplus font-semibold text-white tracking-wider">編集</p>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: "Home",
    data() {
        return {
            servers: []
        }
    },
    created() {
        firebase.firestore().collection('users').doc(this.$store.getters.user.uid).collection('server').get()
            .then((result) => {
                result.forEach((data) => {
                    this.servers.push(data.data())
                    console.log(JSON.stringify(data.data()))
                })
            })
            .catch((error) => {
                console.log(error)
            })
    },
    computed: {
        user() {
            return this.$store.getters.user
        },
        minecraft_id() {
            return this.$store.getters.getMinecraftID
        }
    }
}
</script>
