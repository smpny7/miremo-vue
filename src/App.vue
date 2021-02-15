<template>
    <div v-if="isLoginScreen">
        <router-view/>
    </div>
    <div v-else>
        <div id="nav">
            <router-link to="/">Login</router-link>
            |
            <router-link to="/home">Home</router-link>
            |
            <router-link to="/success">Success</router-link>
        </div>
        <p>Testサイト</p>
        <router-view/>
    </div>
</template>


<script>
export default {
    computed: {
        isLoginScreen() {
            return (this.$route.path === '/' || this.$route.path === '/logout' || this.$route.path === '/home' || this.$route.path === '/create');
        }
    }
}
</script>

<style>
#app {
    /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
