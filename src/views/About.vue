<template>
    <div class="about">
        <h1>This is an about page</h1>
        <img class="is-rounded" :src="user.photoURL" alt="">
        <p>{{ user.displayName }}</p>
    </div>
</template>

<script>
export default {
    name: "about",
    computed: {
        user() {
            return this.$store.getters.user;
        }
    },
    components: {}
};
</script>
