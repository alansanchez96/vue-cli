<template>
  <div>
    <h1>Hola mundo</h1>
    <button @click="saludar" class="btn red"><i class="material-icons">save</i></button>
  </div>
</template>

<script>
import Materialize from 'materialize-css';

export default {
  name: 'App',
  methods: {
    saludar() {
      Materialize.toast({
        html: 'Soy un toast'
      })
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
