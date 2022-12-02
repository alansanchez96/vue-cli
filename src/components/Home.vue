<template>
    <div>
        <h1>Home</h1>

        <button @click="$store.commit('setUsername', 'jose')">Cambiar username</button>

        <p>{{ profile }}</p>
    </div>
</template>

<script>

export default {
    async mounted() {
        await this.axios.get('/api/user/profile')
            .then(
                response => {
                    this.profile = response.data

                    this.$store.commit('setAuthenticate', true);
                    this.$store.commit('setId', response.data.data.id);
                    this.$store.commit('setUsername', response.data.data.name);

                }
            )
    },
    data() {
        return {
            profile: []
        }
    }
}

</script>