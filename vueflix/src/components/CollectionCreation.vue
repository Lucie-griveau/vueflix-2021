<template>
  <div class="collection_creation">
    <h1>Add a collection</h1>

    <div id="addCollectionForm"><br>

      <label for="description">Description</label><br>
      <input type="text" name="description" v-model="newCollection.description"><br><br>

      <label for="movies">Movies</label><br>
      <input type="text" name="movies_title" v-model="movie" @keyup="getResult">
      <v-autocomplete
          v-if="APIMovies"
          v-model="movie"
          :items="APIMovies"
          item-text="title"
          return-object
      ></v-autocomplete>
      <v-btn id="addMovie" @click="addMovieToCollection">Add movie</v-btn>
      <br><br>
      <p v-if="newCollection.movies">Here is the list of movies you're adding as a collection</p>
      <ul v-for="movies in newCollection.movies" :key="movies.id">{{ movies.title }}</ul>
      <br><br>
      <p>Ready to add the collection?</p>
      <v-btn id="addCollection" @click="addCollection">Add a collection</v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import {EventBus} from "../event-bus";

export default {
  name: "CollectionCreate",
  data() {
    return {
      newCollection: {
        id: 1,
        description: "",
        movies: [],
      },
      movie: "",
      loading: false,
      error: null,
      APIMovies: [],
    }
  },
  methods: {
    // submitForm() {
    //   EventBus.$emit('addCollection', this.newCollection)
    // },
    getResult() {
      if (this.movie !== "") {
        this.loading = true
        this.APIMovies = []
        axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=80d0dd074cbffeb2db4b0123882c7f44&query=' + this.movie)
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
    addCollection() {
      axios
          .post('https://apirest-movies-collections.herokuapp.com/collections/add',
              {
                collection_id: parseInt(this.newCollection.id),
                description: this.newCollection.description,
                movies: this.newCollection.movies
              })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
            // this.error = error
          })
          .finally(() => {
            this.loading = false
          })
      this.$router.push(
          {
            name: 'Collections',
            params: {collections: this.newCollection},
          }
      )
    },
    addMovieToCollection() {
      this.newCollection.movies.push(this.movie)
    },
  },
  watch: {
    newCollection: function () {
      console.log(this.newCollection)
    }
  }
}
</script>

<style scoped>

</style>