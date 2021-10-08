<template>
  <div id="home">
    <h1>Welcome to my movie db!</h1><br>

    <div id="gotToCollection">
      <router-link :to="{
        name: 'Collections'
        }">
        <v-btn class="displayButtons" id="displayCollection">Go to my collections</v-btn>
      </router-link>
    </div>
    <br>

    <div id="sortingMovies">
      <label for="sortingMovies">Sort movies by genre</label><br>
      <select id="selected" v-model="selectedGenre">
        <option value="">Select a genre</option>
        <option v-for="genre in APIGenres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
      </select>
    </div>
    <br>

    <div id="goToMovie" v-for="movie in sortMoviesByGenre" :key="movie.id">
      <router-link :to="{
              name:'Movie',
              params:{
                id:movie.id,
                movie:movie,
                // APIGenres: APIGenres,
                displayAPIGenres: displayAPIGenres
              }
            }">
        <v-btn class="displayButtons" id="displayMovie">{{ movie.title }}</v-btn>

      </router-link>
      <!--      <ul v-for="genres in movie.genres" :key="genres.id">-->
      <!--        <li>{{ genres }}</li>-->
      <!--      </ul>-->
      <div v-for="genres in movie.genres" :key="genres.id">
        <ul v-if="displayAPIGenres(genres)">{{ displayAPIGenres(genres).name }}</ul>
      </div>
      <br>

    </div>
<!--    <button @click="getAPIGenres">Get API Genres</button>-->
    <div id="nbMovies">
      <h2>Number of movies: {{ films.length }}</h2>
      <h2>Number of selected movies: {{ nbMovies }}</h2>
    </div>
    <br>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Home",
  props: {
    movies: {
      type: Array,
    },
  },
  data() {
    return {
      films: [
        {
          id: 1,
          title: "Nomadland",
          poster_path: "/8Vc5EOUEIF1EUXuX9eLFf7BvN3P.jpg",
          genres: [18],
          vote_average: 7.3,
          overview: "A woman in her sixties embarks on a journey through the western United States after losing everything in the Great Recession, living as a van-dwelling modern-day nomad.",
          release_date: "2021-01-29"
        },
        {
          id: 2,
          title: "Parasite",
          poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
          genres: [35, 53, 18],
          vote_average: 8.5,
          overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
          release_date: "2019-05-30"
        },
        {
          id: 3,
          title: "Green Book",
          poster_path: "/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg",
          genres: [18, 35, 10402],
          vote_average: 8.3,
          overview: "Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segregation laws below the Mason-Dixon Line, relied on a guide called The Negro Motorist Green Book.",
          release_date: "2018-11-16"
        },
      ],
      selectedGenre: "",
      APIGenres: [],
      error: null,
      loading: false,
    }
  },
  methods: {
    getAPIGenres() {
      this.loading = true
      // this.APIGenres = []
      axios
          .get('https://api.themoviedb.org/3/genre/movie/list?api_key=80d0dd074cbffeb2db4b0123882c7f44')
          .then(response => {
            this.APIGenres = response.data.genres;
            // console.log(response.data.genres);      // array of object with id & name of each genre
          })
          .catch(error => {
            console.log(error)
            // this.error = error
          })
          .finally(() => {
            this.loading = false
          })
    },
    displayAPIGenres(genre){
      return this.APIGenres.find(elt => elt.id === genre)
    },
  },
  computed: {
    sortMoviesByGenre() {
      if (this.selectedGenre === "") {
        return this.films
      } else {
        return this.films.filter(movie => movie.genres.includes(this.selectedGenre))
      }
    },
    nbMovies() {
      return this.sortMoviesByGenre.length
    },
  },
  watch: {
    sortMoviesByGenre: function (newValue, oldValue){
      // console.log(newValue, oldValue)
      console.log("The filter has been applied")
      if(newValue.length > oldValue.length){
        console.log('The filter genre has been updated')
      }
    },
    nbMovies: function (newValue, oldValue){
      // console.log(newValue, oldValue)
      if(newValue > oldValue){
        console.log('There is a new movie in the database')
      }
    }
  },
  mounted() {
    this.getAPIGenres()
    // console.log(this.movies)
    if (this.movies !== undefined) {
      this.films = this.movies
    }
  }
}
</script>

<style scoped lang="scss">

$primary-color: #0050B0;
$darker-color: darken($primary-color, 10%);

#displayMovie {
  color: aliceblue;
  background-color: $primary-color;

  &:hover {
    background-color: $darker-color;
  }
}

</style>