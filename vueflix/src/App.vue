<template>
  <div id="app">
    <v-app>
      <div class="nav"> <!--Lien routes composants-->
        <router-link to="/">Home</router-link>
        <router-link to="/admin">Admin</router-link>
      </div>
      <img alt="Vue logo" src="./assets/paramount-logo.png"><br>
      <router-view></router-view> <!--Affichage du contenu des routes-->
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
}

</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav {
  margin-bottom: 50px;
}

.nav a {
  padding: 10px 20px;
  margin: 0 10px;
  color: #000000;
  border: 2px solid black;
  transition: 1s;
}

.nav a:hover {
  background-color: #0050B0;
  color: #ffffff;
}

</style>