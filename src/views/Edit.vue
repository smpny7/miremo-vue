<template>
    <div class="bg-secondary fixed flex h-full items-center justify-center w-full">
        <div>
            <h1 class="font-semibold mx-auto ml-1 text-lg text-white tracking-widest w-105">サーバーを追加</h1>

            <div
                class="bg-primaryContainer flex h-24 items-center mt-4 mx-auto rounded w-105 transition duration-700 ease-in-out transform hover:scale-101">
                <div class="relative">
                    <img class="flex-none h-16 ml-6 rounded w-16" src="../assets/img/default-server-icon.svg"
                         alt="ServerIcon">
                    <!--                <div class="absolute bg-online -bottom-0.5 h-4 -right-0.5 rounded-full w-4"></div>-->
                </div>
                <div class="flex-grow ml-5">
                    <p class="font-mplus font-semibold text-lg text-white tracking-wider">
                        {{ !displayName ? 'Minecraftサーバー' : displayName }}</p>
                    <p class="font-mplus mt-2 text-gray-300 text-sm">オンライン : - / -</p>
                </div>
                <!--            <img class="flex-none mr-2 w-9" src="../assets/img/access.svg" alt="Access">-->
            </div>

            <div class="mt-14">
                <label for="displayName"
                       class="block font-semibold ml-1 text-gray-300 text-sm tracking-widest">表示名</label>
                <input id="displayName" v-model="displayName" @input="onChange" type="text"
                       placeholder="Minecraftサーバー" minlength="1" maxlength="20"
                       class="bg-primaryContainer block h-12 mt-2 outline-none px-5 rounded text-white tracking-widest w-105">
            </div>

            <div class="mt-5">
                <label for="host" class="block font-semibold ml-1 text-gray-300 text-sm tracking-widest">ホスト名</label>
                <input id="host" v-model="host" @input="onChange" type="text" placeholder="xxxxx.com | oo.oo.oo.oo"
                       minlength="1" maxlength="50"
                       class="bg-primaryContainer block h-12 mt-2 outline-none px-5 rounded text-white tracking-widest w-105">
            </div>

            <div class="mt-5">
                <label for="port" class="block font-semibold ml-1 text-gray-300 text-sm tracking-widest">ポート番号</label>
                <input id="port" v-model="port" @input="onChange" type="number" placeholder="25565" min="0"
                       max="65535"
                       class="appearance-none bg-primaryContainer block h-12 mt-2 outline-none px-5 rounded text-white tracking-widest w-105">
            </div>

            <div class="grid grid-cols-2 gap-6 mt-14 mx-auto w-105">
                <div @click="register" v-bind:class="[isActive ? 'bg-primary cursor-pointer' : 'bg-blue-200 cursor-not-allowed']"
                     class="flex h-12 items-center justify-center rounded transition duration-700 ease-in-out transform hover:scale-101">
                    <span class="font-mplus font-semibold text-white tracking-wider">作成</span>
                </div>
                <router-link to="/home">
                    <div
                        class="bg-primaryContainer cursor-pointer flex h-12 items-center justify-center rounded transition duration-700 ease-in-out transform hover:scale-101">
                        <p class="font-mplus font-semibold text-white tracking-wider">キャンセル</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import router from '../router'

export default {
    name: "Edit",
    data() {
        return {
            // servers: [],
            isActive: false,
            displayName: null,
            host: null,
            port: 25565
        }
    },
    created() {
        // firebase.firestore().collection('users').doc(this.$store.getters.user.uid).collection('server').get()
        //     .then((result) => {
        //         result.forEach((data) => {
        //             this.servers.push(data.data())
        //         })
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    },
    computed: {
        // user() {
        //     return this.$store.getters.user
        // },
        // minecraft_id() {
        //     return this.$store.getters.getMinecraftID
        // }
    },
    methods: {
        onChange() {
            if (!this.displayName || !this.host || !this.port) {
                this.isActive = false
            } else {
                this.isActive = true
            }
        },
        register() {
            if (this.isActive)
                firebase.firestore().collection('users').doc(this.$store.getters.user.uid).collection('server').doc().set({
                    displayName: this.displayName,
                    host: this.host,
                    port: this.port
                })
                    .then((doc) => {
                        console.log('追加に成功しました : ' + doc)
                        router.push('/home')
                    })
                    .catch((error) => {
                        console.log(error)
                    })
        }
    }
}
</script>
