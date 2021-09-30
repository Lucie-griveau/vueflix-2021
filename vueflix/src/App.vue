<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/paramount-logo.png">
<!--    <Movie msg="Welcome to the best movie database ever"/>-->
    <h1>Academy Awards for Best Movie </h1>
    <h2>Number of movies: {{ movies.length }}</h2>
    <h2>Number of selected movies: {{ nbMovies }}</h2>
    <div>
      <label for="sortMovies">Sort movies by:</label>
      <select id="selected" v-model="selectedGenre">
        <option v-for="genreOption in genresOptions" :key="genreOption">{{ genreOption }}</option>
      </select>
    </div>

    <div v-for="movie in sortMoviesByGenre" :key="movie.id">
      <Movie
          :id="movie.id"
        :titre="movie.title"
        :genres="movie.genres"
        :note="movie.rating"
        :revue="movie.review"
        :description="movie.description"
      />
    </div>

    <h1>Tu veux ajouter un film ?</h1>
    <form id="app_form" @submit="checkForm" action="" method="post">

      <div class="errors" v-if="errors.length">
        <p>Please correct the following error(s):</p>
        <p v-for="error in errors" :key="error">{{ error }}</p>
      </div>

      <label for="title">Title</label><br>
      <input id="title" v-model="dataAdded.title" title="title" type="text" placeholder="Title"><br><br>

      <label for="genres">Genres (press Ctrl for multiple selection)</label><br>
      <!--      <input id="genres" v-model="dataAdded.genres" genres="genres" type="text" placeholder="Title"><br><br>-->
      <select id="genres" v-model="dataAdded.genres" genres="genres" multiple>
        <option v-for="genreOption in genresOptions" :key="genreOption">{{ genreOption }}</option>
        <!--      <select id="genres" v-model="dataAdded.genres" genres="genres">-->
        <!--        <option v-for="genreOption in genresOptions" :key="genreOption" v-bind:value="{ genreOption }">{{ genreOption }}</option>-->
        <!--        <option value="biopic">Biopic</option>-->
        <!--        <option value="comedy">Comedy</option>-->
        <!--        <option value="drama">Drama</option>-->
        <!--        <option value="thriller">Thriller</option>-->
        <!--        <option value="travel">Travel</option>-->
      </select><br><br>

      <label for="rating">Rating (from 0 to 10)</label><br>
      <input id="rating" v-model="dataAdded.rating" rating="rating" type="number" min="0" max="10" placeholder="Rating"><br><br>

      <label for="review">Review</label><br>
      <input id="review" v-model="dataAdded.review" review="rating" type="text" placeholder="Review"><br><br>

      <label for="description">Description</label><br>
      <input id="description" v-model="dataAdded.description" description="rating" type="text"
             placeholder="Description"><br><br>

      <button type="submit" @click="addMovie">Add a movie</button>
    </form>
  </div>
</template>

<script>
import Movie  from './components/Movie.vue'

export default {
  name: 'App',
  components: {
    Movie
  },
  data() {
    return {
      errors: [],
      movies: [
        {
          id: 1,
          title: "Nomadland",
          genres: ["drama", "travel"],
          rating: 9,
          review: "A poetic character study on the forgotten and downtrodden, Nomadland beautifully captures the restlessness left in the wake of the Great Recession.",
          description: "Nomadland is a 2020 American drama film written and directed by Chloé Zhao. It is based on the book by Jessica Bruder pubished in 2017."
        },
        {
          id: 2,
          title: "Parasite",
          genres: ["comedy", "drama", "thriller"],
          rating: 9,
          review: "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description: "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won."
        },
        {
          id: 3,
          title: "Green Book",
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
      dataAdded: {
        title: "",
        genres: [],
        rating: 0,
        review: "",
        description: "",
      }
    }
  },
  methods: {
    checkForm: function (e) {
      // if (this.dataAdded.title && this.dataAdded.rating) {
      //   return true;
      // }
      this.errors = [];

      if (!this.dataAdded.title) {
        this.errors.push('Title required.');
      }
      if (!this.dataAdded.rating) {
        this.errors.push('Rating required.');
      }
      e.preventDefault();
    },
    addMovie: function () {
      this.dataAdded.id = this.movies.length + 1;
      this.movies.push(
          {
            title: this.dataAdded.title,
            genres: this.dataAdded.genres,
            rating: this.dataAdded.rating,
            review: this.dataAdded.review,
            description: this.dataAdded.description,
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

$primary-color: #C7BB00;
$darker-color: darken($primary-color, 10%);

h1{
  background-color: $primary-color;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input, select {
  margin-left: 10px;
}

button{
  background-color: $primary-color;
  &:hover{
    background-color: $darker-color;
  }
}
</style>
