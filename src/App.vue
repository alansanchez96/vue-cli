<template>
  <div class="container">

    <div class="row">
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
          <select name="" id="estado_civil">
            <option value="casado">Casado</option>
            <option value="soltero">Soltero</option>
            <option value="divorciado">Divorciado</option>
            <option value="viudo">Viudo</option>
          </select>
        </div>

      </div>

      <div class="col m12 card-panel">
        <div class="col m4">
          <label for="hobbies">Hobbies</label>
          <input type="text" id="hobbies" v-model="hobbies">
          <button class="btn indigo">Agregar Hobbie <i class="material-icons right">send</i></button>
          <br>
          <ul>
            <li v-for="hobbie in hobbies" v-bind:key="hobbie">
              {{ hobbie.descripcion }}
            </li>
          </ul>
        </div>
      </div>

      <div class="col m4">
        <label for="suscribe"><input id="suscribe" type="checkbox" v-model="suscription"><span>Suscribite al boletin de
            noticias</span></label>
      </div>
      <div class="row">
        <div class="col m4">
          <button class="btn indigo">Agregar Usuario <i class="material-icons">add_circle</i></button>
        </div>
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
      years: 0,
      estado_civil: '',
      email: '',
      suscription: false,
      hobbie: '',
      hobbies: [],
      select_items: []
    }
  },
  mounted() {
    var elements = document.querySelectorAll('select');
    this.select_items = Materialize.FormSelect.init(elements, null);
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
