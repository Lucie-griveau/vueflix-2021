<template>
  <div class="movie_creation">
    <h1>Tu veux ajouter un film ?</h1>

    <div id="addMovieForm">

      <label for="searchTitle">Search movie title</label><br>
      <input type="text" name="title" v-model="newMovie.title" @keyup="getResult">
      <v-autocomplete
          v-model="newMovie"
          :items="APIMovies"
          item-text="title"
          return-object
      ></v-autocomplete>

      <label for="affiche">Poster</label><br>
      <input type="text" name="poster_path" v-model="newMovie.poster_path"><br><br>

      <label for="genres">Genres</label><br>
      <input type="text" name="genre_ids" v-model="newMovie.genre_ids"><br><br>

      <label for="note">Average vote (from 0 to 10)</label><br>
      <v-rating
          v-model="newMovie.vote_average"
          background-color="blue lighten-3"
          color="blue"
          length="10"
          large
      ></v-rating>
      <br>

      <label for="review">Overview</label><br>
      <input type="text" name="overview" v-model="newMovie.overview"><br><br>

      <div class="errors" v-if="errors.length">
        <p>Please correct the following error(s):</p>
        <p v-for="error in errors" :key="error">{{ error }}</p>
      </div>

            <v-btn id="checkForm" @click="submitForm()">Add a movie</v-btn>
<!--      <v-btn id="checkForm" @click="checkForm()">Add a movie</v-btn>-->

    </div>
  </div>
</template>

<script>
import {EventBus} from '../event-bus';
import axios from 'axios';

export default {
  name: 'MovieCreation',
  props: {
    // msg: String,
    movies: {
      type: Array,
    },
    addMovie: {
      type: Function,
    }
  },

  data() {
    return {
      errors: [],
      newMovie: {
        adult: false,
        genre_ids: [],
        id: null,
        title: "",
        poster_path: "",
        vote_average: null,
        overview: "",
      },
      error: null,
      loading: false,
      APIMovies: [],
      APIGenres: [],
    }
  },
  methods: {
    // checkForm() {
    //   if (this.newMovie.title && this.newMovie.rating) {
    //     this.submitForm()
    //     console.log(this.newMovie)
    //     alert("The movie has been successfully add")
    //   } else {
    //     this.errors = []
    //     if (!this.newMovie.title) {
    //       this.errors.push('Title required.');
    //     }
    //     // if (!this.newMovie.genres) {            // cannot work since it's an array
    //     //   this.errors.push('Genre(s) required.');
    //     // }
    //     if (!this.newMovie.vote_average) {
    //       this.errors.push('Rating required.');
    //     }
    //   }
    //   // e.preventDefault();
    // },
    submitForm() {
      EventBus.$emit('eventSubmitForm', this.newMovie)
    },
    getResult() {
      if (this.newMovie.title !== "") {
        this.loading = true
        this.APIMovies = []
        axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=80d0dd074cbffeb2db4b0123882c7f44&query=' + this.newMovie.title)
            .then(response => {
              this.APIMovies = response.data.results;
              // console.log(response.data.results);
            })
            .catch(error => {
              console.log(error)
              // this.error = error
            })
            .finally(() => {
              this.loading = false
            })
      }
    },
    getGenres() {
      this.loading = true
      this.APIGenres = []
      axios
          .get('https://api.themoviedb.org/3/genre/movie/list?api_key=80d0dd074cbffeb2db4b0123882c7f44')
          .then(response => {
            this.APIGenres = response.data.genres;
            // console.log(response.data.genres);
          })
          .catch(error => {
            console.log(error)
            // this.error = error
          })
          .finally(() => {
            this.loading = false
          })
    },
  },
  watch: {
    errors: function(){
      console.log("There is an error in the form")
    },
    newMovie: function (){
      console.log(this.newMovie)
    }
  }
}
</script>

<style scoped lang="scss">

$primary-color: #0050B0;
$darker-color: darken($primary-color, 10%);

h1 {
  background-color: $primary-color;
  color: aliceblue;
}

input {
  //background-color: black;
  text-align: center;
  margin-left: 10px;
}

#checkForm {
  color: aliceblue;
  background-color: $primary-color;

  &:hover {
    background-color: $darker-color;
  }
}

</style>