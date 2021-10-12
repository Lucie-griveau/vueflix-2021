<template>
  <div class="movie">
    <h3>{{ movie.title | uppercase }}
    </h3><br>
    <h4>Overview:</h4>
    <p>{{ movie.overview }}</p><br>
    <h4>Genres:</h4>
    <div v-for="genres in movie.genres" :key="genres.id">
      <li v-if="displayAPIGenres(genres)">{{ displayAPIGenres(genres).name }}</li>
    </div>
    <br>

<!--    <div v-for="genre in APIGenres" :key="genre.id" :value="genre.id">-->
<!--      <li>{{ genre.name }}</li>-->
<!--    </div>-->
<!--    <br>-->

    <img :src="'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ movie.poster_path" alt="movie_picture" width="500em"><br>
    <v-rating
        readonly
        v-model="movie.vote_average"
        background-color="blue lighten-3"
        color="blue"
        large
        length="10"
    ></v-rating>
    <br>
    <h4>Release date:</h4>
    <p>{{ movie.release_date }}</p><br>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    movie: {
      type: Object,
    },
    // APIGenres: {
    //   type: Array,
    // },
    displayAPIGenres: {
      type: Function,
    },
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    }
  },
}
</script>

<style scoped lang="scss">
$primary-color: #0050B0;
$darker-color: darken($primary-color, 10%);

h3 {
  color: $primary-color;
  margin: 40px 0 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
