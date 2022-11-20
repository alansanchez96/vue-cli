<template>
  <div class="row">
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
  },
  mounted() {
    this.axios.get('https://prueba.com/')
      .then(() => {

      });
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
