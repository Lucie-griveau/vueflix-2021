<template>
<div id="home">
  <h1>Academy Awards for Best Movie </h1><br>

<!--  <label for="sortMovies">Sort movies by:</label>-->
<!--  <select id="selected" v-model="selectedGenre">-->
<!--    <option v-for="genreOption in genresOptions" :key="genreOption">{{ genreOption }}</option>-->
<!--  </select>-->

<!--  <select id="selected" v-model="selectedGenre">-->
<!--    <option v-for="genreOption in genres" :key="genreOption">{{ genreOption }}</option>-->
<!--  </select>-->
  <div v-for="movie in movies" :key="movie.id">
<!--    <h1>{{ movie.title }}</h1>-->
    <router-link :to="{
              name:'Movie',
              params:{
                id:movie.id,
                movie:movie,
              }
            }">
      <v-btn id="displayMovie">{{ movie.title }}</v-btn>
    </router-link>
    <br>
  </div>
<!--  <h2>Number of movies: {{ movies.length }}</h2>-->
<!--  <h2>Number of selected movies: {{ nbMovies }}</h2>-->
  <br>
</div>
</template>

<script>
// import {EventBus} from "../event-bus";

export default {
  name: "Home",
  props: {
    movies: {
      type: Object,
    },
  },
  // data() {
  //   return {
  //     movies: []
  //   }
  // },
}
</script>

<style scoped lang="scss">

$primary-color: #0050B0;
$darker-color: darken($primary-color, 10%);

#displayMovie{
  color: aliceblue;
  background-color: $primary-color;
  &:hover{
    background-color: $darker-color;
  }
}

</style>