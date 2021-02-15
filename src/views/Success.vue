<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>ログイン成功！</h2>
                <div class="mt-4">
                    <div>
                        <button @click="button">MinecraftIDの登録</button>
                    </div>
                    <div>
                        <button @click="addServer1">サーバー1の登録</button>
                    </div>
                    <div>
                        <button @click="addServer2">サーバー2の登録</button>
                    </div>
                </div>
                <div class="mt-4">
                    <button @click="logout">ログアウト</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import router from '../router'
import store from '../store/index'

export default {
    name: 'Success',
    methods: {
        button() {
            firebase.firestore().collection('users').doc(store.getters.user.uid).set({
                minecraft_id: "kit130101"
            })
                .then((doc) => {
                    console.log('追加に成功しました : ' + doc);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        addServer1() {
            firebase.firestore().collection('users').doc(store.getters.user.uid).collection('server').doc().set({
                title: '情クラ',
                host: 'jokura.work',
                port: 25565
            })
                .then((doc) => {
                    console.log('追加に成功しました : ' + doc);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        addServer2() {
            firebase.firestore().collection('users').doc(store.getters.user.uid).collection('server').doc().set({
                title: '情クラ',
                host: 'jokura.work',
                port: 25575
            })
                .then((doc) => {
                    console.log('追加に成功しました : ' + doc);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        logout() {
            firebase.auth().signOut().then(function () {
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
