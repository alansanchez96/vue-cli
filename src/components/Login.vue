<template>
    <div class="row">
        <div class="col m12 card-panel">
            <form @submit.prevent="login">
                <div class="row">
                    <div class="col m3">
                        <label for="email">Email</label>
                        <input type="text" name="email" v-model="email" id="email">
                    </div>
                </div>
                <div class="row">
                    <div class="col m3">
                        <label for="password">Contraseña</label>
                        <input type="password" name="password" v-model="password" id="password">
                    </div>
                </div>
                <div class="row">
                    <div class="col m3">
                        <button v-show="!loading" class="btn">Login <i class="material-icons">security</i></button>
                        <div v-show="loading" class="progress"></div>
                        <div class="indeterminate"></div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            loading: false
        }
    },
    methods: {
        async login() {
            this.loading = true;

            let data = {
                email: this.email,
                password: this.password
            }

            await this.axios.post('/api/user/login', data)
                .then(response => {
                    console.log(response);
                    this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
                    
                    localStorage.setItem('access_token', response.data.access_token);

                    this.$router.push('/');
                });

            this.loading = false;
        }
    }
}
</script>