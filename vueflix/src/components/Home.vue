<template>
  <div id="home">
    <h1>Academy Awards for Best Movie </h1><br>

    <div id="sortingMovies">
      <label for="sortMovies">Sort movies by:</label>
      <select id="selected" v-model="selectedGenre">
        <option value="">Select a genre</option>
        <option v-for="genre in getGenres" :key="genre">{{ genre }}</option>
      </select>
    </div>

    <div id="goToMovie" v-for="movie in sortMoviesByGenre" :key="movie.id">
      <router-link :to="{
              name:'Movie',
              params:{
                id:movie.id,
                movie:movie,
              }
            }">
        <v-btn id="displayMovie">{{ movie.title }}</v-btn>

      </router-link>
      <!--      <ul v-for="genres in movie.genres" :key="genres.id">-->
      <!--        <li>{{ genres }}</li>-->
      <!--      </ul>-->
      <ul v-for="genres in movie.genres" :key="genres.id">
        {{ displayAPIGenres(genres).name }}
      </ul>
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
      genresOptions: [],
      selectedGenre: "",
      APIGenres: [],
    }
  },
  methods: {
    getAPIGenres() {
      this.loading = true
      this.APIGenres = []
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
    getGenres() {
      let genresOptions = []
      this.films.forEach(film => {
        film.genres.forEach(genre => {
          if (!genresOptions.includes(genre)) {   // avoid double values to be pushed into genresOptions
            genresOptions.push(genre)
          }
        })
      })
      // console.log(genresOptions);
      return genresOptions                       // return the array with all genres options
    },
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
    sortMoviesByGenre: function () {
      console.log("The filter has been applied")
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