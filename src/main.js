import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import store from './store'

const firebaseConfig = {
    apiKey: "AIzaSyDQvRnwTNbcFp2URONcYqVBe-YgHm8JjYg",
    authDomain: "miremo.firebaseapp.com",
    projectId: "miremo",
    storageBucket: "miremo.appspot.com",
    messagingSenderId: "96070951106",
    appId: "1:96070951106:web:cc82e1b6e3ce7447e61b5b"
}

firebase.initializeApp(firebaseConfig)

createApp(App).use(router).use(store).mount('#app')
