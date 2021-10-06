<template>
  <div id="app">
    <v-app>
      <div class="nav"> <!--Lien routes composants-->
        <!--        <router-link to="/">Home</router-link>-->
        <router-link :to="{
              name:'Home',
              params:{
                movies:movies,
              }
            }">Home
        </router-link>
        <router-link to="/admin">Admin</router-link>
      </div>
      <img alt="Vue logo" src="./assets/paramount-logo.png"><br>

      <router-view></router-view> <!--Affichage du contenu des routes-->
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
          picture: "https://fr.web.img5.acsta.net/pictures/21/04/29/09/49/2883699.jpg",
          genres: [18, 12],
          rating: 9,
          review: "A poetic character study on the forgotten and downtrodden, Nomadland beautifully captures the restlessness left in the wake of the Great Recession.",
          description: "Nomadland is a 2020 American drama film written and directed by Chloé Zhao. It is based on the book by Jessica Bruder pubished in 2017."
        },
        {
          id: 2,
          title: "Parasite",
          picture: "https://fr.web.img6.acsta.net/pictures/20/02/12/13/58/3992754.jpg",
          genres: [35, 18, 53],
          rating: 9,
          review: "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description: "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won."
        },
        {
          id: 3,
          title: "Green Book",
          picture: "https://fr.web.img5.acsta.net/pictures/19/02/25/17/06/0818764.jpg",
          genres: [53, 18],
          rating: 9,
          review: "Mahershala Ali plays a jazz musician who confronts the racism of his driver, played by Viggo Mortensen, in a warm but tentative real-life story.",
          description: "Green Book is a 2018 American biographic film directed by Peter Farrelly, working on the screenplay with Nick Vallelonga and Brian Hayes Currie."
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
  },
  watch: {
    movies: function (newValue, oldValue){
      if(!(newValue === oldValue)){
        alert('There is a new movie in the database')
      }
    },
  },
  mounted() {
    EventBus.$on('eventSubmitForm', (newMovie) => // arrow function due to the use of this (range of the this)
        this.addMovie(newMovie))
  },
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