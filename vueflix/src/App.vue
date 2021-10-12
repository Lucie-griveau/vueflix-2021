<template>
  <div id="app">
    <v-app>
      <div class="nav">
        <router-link :to="{
              name:'Home',
              params:{
                movies:movies,
              }
            }">Home
        </router-link>
        <router-link to="/movies">Movies</router-link>
        <router-link to="/collections">Collection</router-link>
        <router-link to="/admin">Admin</router-link>
      </div>
      <router-view></router-view>
    </v-app>

  </div>
</template>

<script>
import {EventBus} from "./event-bus";

export default {
  name: "App",
  data() {
    return {
      errors: [],
      movies: [
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
    }
  },
  methods: {
    addMovie(newMovie) {
      // newMovie.id = this.movies.length + 1;
      // this.movies.push(newMovie)
      this.movies.push(
          {
            id: parseInt(newMovie.id),
            title: newMovie.title,
            picture: newMovie.poster_path,
            genres: newMovie.genre_ids,
            rating: parseInt(newMovie.vote_average),
            review: newMovie.overview,
          }
      )
      this.$router.push(
          {
            name: 'Home',
            params: {movies: this.movies},
          }
      )
    },
    // addCollection(newCollection) {
    //   this.collections.push(
    //       {
    //         id: parseInt(newCollection.id),
    //         description: newCollection.description,
    //         movies: newCollection.movies,
    //       }
    //   )
    //   this.$router.push(
    //       {
    //         name: 'Collection',
    //         params: {collections: this.collections},
    //       }
    //   )
    // },
  },
  watch: {
    movies: function (newValue, oldValue){
      if(!(newValue === oldValue)){
        alert('There is a new movie in the database')
      }
    },
  },
  mounted() {
    EventBus.$on('addMovie', (newMovie) => // arrow function due to the use of this (range of the this)
        this.addMovie(newMovie))
    EventBus.$on('addCollection', (newCollection) => // arrow function due to the use of this (range of the this)
        this.addCollection(newCollection))
  },
}
</script>

<style lang="scss">

$primary-color: #0050B0;
$darker-color: darken($primary-color, 10%);

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
  color: $primary-color;
  border: 2px solid black;
  transition: 1s;
  &:hover {
    background-color: $darker-color;
    color: #ffffff;
  }
}


</style>