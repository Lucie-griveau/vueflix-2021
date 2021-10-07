<template>
  <div class="collection_creation">
    <h1>Add a collection</h1>

    <div id="addCollectionForm"><br>

      <label for="description">Description</label><br>
      <input type="text" name="description" v-model="newCollection.description"><br><br>

      <label for="movies">Movies</label><br>
      <input type="text" name="movies_title" v-model="newCollection.movies" @keyup="getResult"><br><br>
      <v-autocomplete
          v-if="APIMovies"
          v-model="newCollection.movies"
          :items="APIMovies"
          item-text="title"
          return-object
      ></v-autocomplete>

      <v-btn id="checkForm" @click="addCollection()">Add a collection</v-btn>
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
        id: null,
        description: "",
        movies: [],
      },
      loading: false,
      error: null,
      APIMovies: [],
      APICollection: [],
    }
  },
  methods: {
    // submitForm() {
    //   EventBus.$emit('addCollection', this.newCollection)
    // },
    getResult() {
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
    },
    addCollection() {
      this.APICollection = [],
          axios
              .post('https://apirest-movies-collections.herokuapp.com/collections/add', this.newCollection)
              .then(response => {
                console.log(response.data)
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
}
</script>

<style scoped>

</style>