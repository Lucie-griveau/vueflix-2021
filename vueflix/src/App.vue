<template>
  <div id="app">
    <v-app>
    <img alt="Vue logo" src="./assets/paramount-logo.png"><br>
<!--    <Movie msg="Welcome to the best movie database ever"/>-->
    <h1>Academy Awards for Best Movie </h1>

    <div v-for="movie in sortMoviesByGenre" :key="movie.id">
      <Movie
          :id="movie.id"
          :titre="movie.title"
          :image="movie.picture"
          :genres="movie.genres"
          :note="movie.rating"
          :revue="movie.review"
          :description="movie.description"
      />
    </div>

      <h2>Number of movies: {{ movies.length }}</h2>
      <h2>Number of selected movies: {{ nbMovies }}</h2>
      <div>
        <label for="sortMovies">Sort movies by:</label>
        <select id="selected" v-model="selectedGenre">
          <option v-for="genreOption in genresOptions" :key="genreOption">{{ genreOption }}</option>
        </select>
      </div>
      <div>
        <MovieCreation
            :films = "movies"
            :genresOptions = "genresOptions"
            :addMovie = "addMovie"
            @eventSubmitForm="addMovie"
        />
      </div>
    </v-app>
  </div>
</template>

<script>
import Movie  from './components/Movie.vue'
import MovieCreation from './components/MovieCreation'

export default {
  name: 'App',
  components: {
    Movie,
    MovieCreation
  },
  data() {
    return {
      errors: [],
      movies: [
        {
          id: 1,
          title: "Nomadland",
          picture: "https://fr.web.img5.acsta.net/pictures/21/04/29/09/49/2883699.jpg",
          genres: ["drama", "travel"],
          rating: 9,
          review: "A poetic character study on the forgotten and downtrodden, Nomadland beautifully captures the restlessness left in the wake of the Great Recession.",
          description: "Nomadland is a 2020 American drama film written and directed by Chloé Zhao. It is based on the book by Jessica Bruder pubished in 2017."
        },
        {
          id: 2,
          title: "Parasite",
          picture: "https://fr.web.img6.acsta.net/pictures/20/02/12/13/58/3992754.jpg",
          genres: ["comedy", "drama", "thriller"],
          rating: 9,
          review: "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description: "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won."
        },
        {
          id: 3,
          title: "Green Book",
          picture: "https://fr.web.img5.acsta.net/pictures/19/02/25/17/06/0818764.jpg",
          genres: ["biopic", "drama"],
          rating: 9,
          review: "Mahershala Ali plays a jazz musician who confronts the racism of his driver, played by Viggo Mortensen, in a warm but tentative real-life story.",
          description: "Green Book is a 2018 American biographic film directed by Peter Farrelly, working on the screenplay with Nick Vallelonga and Brian Hayes Currie."
        },
      ],
      selectedGenre: "",
      // [
      //   'Title',
      //   'Genres',
      //   'Rating',
      //   'Review',
      //   'Description'
      // ],
      genresOptions: [
        // {text: 'Select One', value: null},
        'action',
        'biopic',
        'comedy',
        'drama',
        'travel',
        'thriller',
        'western',
      ],
    }
  },
  methods: {
    addMovie: function (dataAdded) {
      dataAdded.id = this.movies.length + 1;
      this.movies.push(
          {
            id: parseInt(dataAdded.id),
            title: dataAdded.title,
            picture: dataAdded.picture,
            genres: dataAdded.genres,
            rating: parseInt(dataAdded.rating),
            review: dataAdded.review,
            description: dataAdded.description,
          }
      )
    },
    getData() {

    }
  },
  mounted() {
    this.getData()
  },
  computed: {
    nbMovies() {
      return this.sortMoviesByGenre.length
    },
    sortMoviesByGenre() {
      if (this.selectedGenre === "") {
        return this.movies
      } else {
        return this.movies.filter(movie => movie.genres.includes(this.selectedGenre))
      }
    },
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

</style>