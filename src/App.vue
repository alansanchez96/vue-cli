<template>
  <nav>
    <div class="nav-wrapper">
      <ul class="right hide-on-med-and-down">
        <li>
          <router-link :to="{ name: 'Estudiantes' }">Estudiantes</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Login' }">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
/* import Materialize from 'materialize-css' */

export default {
  name: 'App',

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
