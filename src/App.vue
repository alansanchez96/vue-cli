<template>
  <nav>
    <div class="nav-wrapper">
      <ul class="right hide-on-med-and-down">
        <li>
          <router-link :to="{ name: 'Posts' }">Posts</router-link>
        </li>
        <li>
          <router-link v-if="!$store.state.isAuth" :to="{ name: 'Login' }">Login</router-link>
        </li>
        <li>
          <a href="#" v-if="$store.state.isAuth" @click="$store.commit('logout')">Logout</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container">
    <router-view></router-view>
  </div>

  <div class="modal-info-user">
    <label>
      ID: {{ $store.state.id }}
    </label>
    <label>
      Name: {{ $store.state.username }}
    </label>
  </div>
</template>

<script>
/* import Materialize from 'materialize-css' */

export default {
  name: 'App',

}
</script>

<style>
.modal-info-user {
  padding: 10px;
  bottom: 0px;
  left: 0px;
  background-color: #d1d1d1;
  color: black;
  text-align: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
