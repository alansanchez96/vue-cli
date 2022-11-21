<template>
  <div class="container">

    <div class="row">

      <form @submit.prevent="agregarUser">

        <div class="col m12 card-panel">
          <div class="col m4">
            <label for="name">Nombre</label>
            <input type="text" id="name" v-model="name">
          </div>

          <div class="col m4">
            <label for="lastname">Apellido</label>
            <input type="text" id="lastname" v-model="lastname">
          </div>
          <div class="col m4">
            <label for="email">Email</label>
            <input type="text" id="email" v-model="email">
          </div>

        </div>
        <div class="col m12 card-panel">


          <div class="col m4">
            <label for="years">Edad</label>
            <input type="text" id="years" v-model="years">
          </div>

          <div class="col m4">
            <label for="estado_civil">Estado Civil</label>
            <select class="browser-default" id="estado_civil" v-model="estado_civil">
              <option value="" selected>Selecciona</option>
              <option v-bind:value="estado.id" v-for="estado in estados_civiles" v-bind:key="estado">
                {{ estado.value }}
              </option>
            </select>
          </div>

        </div>

        <div class="col m12 card-panel">
          <form @submit.prevent="agregarHobbie">
            <div class="col m4">
              <label for="hobbies">Hobbies</label>
              <input type="text" id="hobbies" v-model="hobbie">
              <button class="btn indigo">Agregar Hobbie <i class="material-icons right">send</i></button>
              <br>
              <ul>
                <li v-for="hobbie in hobbies" v-bind:key="hobbie">
                  {{ hobbie.id }} - {{ hobbie.descripcion }}
                  <a href="#" @click="hobbies.splice(index, 1)"><i class="material-icons">close</i></a>
                </li>
              </ul>
            </div>
          </form>
        </div>

        <div class="col m4">
          <label for="suscribe"><input id="suscribe" type="checkbox" v-model="suscription"><span>Suscribite al boletin
              de
              noticias</span></label>
        </div>
        <div class="row">
          <div class="col m4">
            <button class="btn indigo">Agregar Usuario <i class="material-icons">add_circle</i></button>
          </div>
        </div>

      </form>
    </div>

    <div class="row">
      <div class="col m12">
        <table class="table bordered striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Edad</th>
              <th>Estado Civil</th>
              <th>Hobbies</th>
              <th>Suscrito</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" v-bind:key="user">
              <td>{{ user.name }}</td>
              <td>{{ user.lastname }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.years }}</td>
              <td>{{ user.estado_civil_descripcion }}</td>
              <td>
                <ul>
                  <li v-for="hobbie in user.hobbies" v-bind:key="hobbie">
                    {{ hobbie.id }} - {{ hobbie.descripcion }}
                  </li>
                </ul>
              </td>
              <td><label><input type="checkbox" disabled v-model="user.suscription"><span></span></label></td>
              <td><a href="#"><i class="material-icons">create</i></a></td>
              <td><a href="#" @click="deleteRegister(index)"><i class="material-icons">delete</i></a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Materialize from 'materialize-css'

export default {
  name: 'App',
  data() {
    return {
      name: '',
      lastname: '',
      email: '',
      years: 0,
      estado_civil: '',
      suscription: false,
      hobbie: '',
      hobbies: [],
      select_items: [],
      users: [],
      estados_civiles: [
        {
          id: 1,
          value: 'Soltero'
        },
        {
          id: 2,
          value: 'Casado'
        },
        {
          id: 3,
          value: 'Divorciado'
        },
        {
          id: 4,
          value: 'Viudo'
        }
      ]
    }
  },
  mounted() {
    var elements = document.querySelectorAll('select');
    this.select_items = Materialize.FormSelect.init(elements, null);
  },
  methods: {
    agregarUser() {

      let index_estado_civil = this.estados_civiles.findIndex(x => x.id == this.estado_civil)

      if (index_estado_civil == -1) {
        Materialize.toast({ html: 'Selecciona un estado civil.' });
        return;
      }

      const data = {
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        years: this.years,
        estado_civil: this.estado_civil,
        estado_civil_descripcion: this.estados_civiles[index_estado_civil].descripcion,
        suscription: this.suscription,
        hobbies: this.hobbies
      }

      this.users.push(data);

      this.name = '';
      this.lastname = '';
      this.email = '';
      this.years = 0;
      this.estado_civil = '';
      this.suscription = false;
      this.hobbie = '';
      this.hobbies = [];

    },
    agregarHobbie() {
      let total = this.hobbies.length;
      let ultimo = 0;
      if (total > 0) {
        ultimo = this.hobbies[total - 1].id;
      }
      const data = {
        id: ultimo + 1,
        descripcion: this.hobbie
      };

      this.hobbies.push(data);
      this.hobbie = '';
    },
    deleteRegister(index) {
      if (!confirm('¿Desea eliminar este registro?')) return;
      this.users.splice(index, 1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
