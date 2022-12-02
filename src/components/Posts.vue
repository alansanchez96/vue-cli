<template>
    <div>
        <h1>Posts</h1>

        <div v-show="isLoading" class="progress">
            <div class="indeterminate"></div>
        </div>

        <div class="row">
            <div class="col m12">

                <a href="#" @click="openModal(null)">Crear <i class="material-icons">add_circle</i></a>

                <table class="table bordered striped" v-show="!isLoading">
                    <thead>
                        <tr>
                            <th>ID Post</th>
                            <th>Titulo</th>
                            <th>Body</th>
                            <th>ID Creador</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(post, index) in posts" v-bind:key="post">
                            <td>{{ post.id }}</td>
                            <td>{{ post.title }}</td>
                            <td>{{ post.body }}</td>
                            <td>{{ post.userId }}</td>
                            <td><a href="#" @click="openModal(index)"><i class="material-icons">edit</i></a></td>
                            <td><a href="#"><i class="material-icons">delete</i></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="modal" id="modalPost">
            <div class="modal-content">
                <div class="row">
                    <div class="col m4">
                        <label>User ID</label>
                        <input type="text" v-model="userId">
                    </div>
                    <div class="col m4">
                        <label>Titulo</label>
                        <input type="text" v-model="title">
                    </div>
                </div>
                <div class="col m4">
                    <label>Body</label>
                    <input type="text" v-model="body">
                </div>
                <div class="row">
                    <div class="col m12">
                        <button @click="save" class="btn teal">{{ (id === null) ? 'Crear' : 'Actualizar' }}</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import M from 'materialize-css';

export default {
    name: 'Posts',
    data() {
        return {
            posts: [],
            isLoading: true,

            index: -1,
            id: 0,
            title: '',
            body: '',
            userId: null,

            modales: []
        }
    },
    async mounted() {

        await this.axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(
                response => {
                    this.posts = response.data
                    this.isLoading = false
                }
            );

        const element = document.querySelectorAll('.modal');
        this.modales = M.Modal.init(element, null)

    },
    methods: {
        openModal(index) {
            if (index === 0) {
                const post = this.posts[index];
                this.index = index;
                this.id = post.id;
                this.title = post.title;
                this.body = post.body;
                this.userId = post.userId;
            } else if (index === null) {
                this.id = null;
                this.title = '';
                this.body = '';
                this.userId = '';
            }
            else {
                const post = this.posts[index];
                this.index = index;
                this.id = post.id;
                this.title = post.title;
                this.body = post.body;
                this.userId = post.userId;
            }

            const modal = M.Modal.getInstance(document.querySelector('#modalPost'));
            modal.open();
        },
        async save() {
            const data = {
                title: this.title,
                body: this.body,
                userId: this.userId,
            };
            this.isLoading = true;

            if (this.id === null || 0) {
                await this.axios.post('https://jsonplaceholder.typicode.com/posts', data)
                    .then(response => console.log(response))
            } else {
                await this.axios.put('https://jsonplaceholder.typicode.com/posts/' + this.id, data)
                    .then(response => console.log(response))
            }

            const modal = M.Modal.getInstance(document.querySelector('#modalPost'));
            modal.close();

            this.isLoading = false;

        }
    }
}
</script>