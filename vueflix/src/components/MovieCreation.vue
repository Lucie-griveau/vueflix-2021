<template>
  <div class="movie_creation">
    <h1>Tu veux ajouter un film ?</h1>
    <form id="add_form">

      <div class="errors" v-if="errors.length">
        <p>Please correct the following error(s):</p>
        <p v-for="error in errors" :key="error">{{ error }}</p>
      </div>

      <label for="title">Title</label><br>
      <input id="title" v-model="dataAdded.title" type="text"><br><br>

      <label for="affiche">Affiche du film</label><br>
      <input id="affiche" v-model="dataAdded.picture" type="url"><br><br>

      <label for="genres">Genres (press Ctrl for multiple selection)</label><br>
      <select id="genres" v-model="dataAdded.genres" multiple>
        <option v-for="genreOption in genresOptions" :key="genreOption">{{ genreOption }}</option>
      </select><br><br>

      <label for="rating">Rating (from 0 to 10)</label><br>
      <v-rating
          v-model="dataAdded.rating"
          background-color="blue lighten-3"
          color="blue"
          length="10"
          large
      ></v-rating><br>

      <label for="review">Review</label><br>
      <input id="review" v-model="dataAdded.review" type="text"><br><br>

      <label for="description">Description</label><br>
      <input id="description" v-model="dataAdded.description" type="text"><br><br>

      <v-btn id="checkForm" @click="checkForm()">Add a movie</v-btn>
    </form>
    <router-link to="/">
      <v-btn id="returnHome" type="submit">Back</v-btn>
    </router-link>
  </div>
</template>

<script>
import { EventBus } from '../event-bus';

export default {
  name: 'MovieCreation',
  props: {
    // msg: String,
    movies: {
      type: Object,
    },
    genresOptions: {
      type: Array,
    },
    addMovie: {
      type: Function,
    }
  },

  data() {
    return {
      errors: [],
      dataAdded: {
        id: 0,
        title: "",
        picture: "",
        genres: [],
        rating: 0,
        review: "",
        description: "",
      }
    }
  },
  methods: {
    checkForm() {
      if (this.dataAdded.title && this.dataAdded.rating) {
        this.submitForm()
        console.log(this.dataAdded)
        alert("The movie has been successfully add")
      } else {
        this.errors = []
        if (!this.dataAdded.title) {
          this.errors.push('Title required.');
        }
        // if (!this.dataAdded.genres) {            // cannot work since it's an array
        //   this.errors.push('Genre(s) required.');
        // }
        if (!this.dataAdded.rating) {
          this.errors.push('Rating required.');
        }
      }
      // e.preventDefault();
    },
    submitForm(){
      EventBus.$emit("eventSubmitForm", this.dataAdded)
    }
  },
}
</script>

<style scoped lang="scss">

$primary-color: #0050B0;
$darker-color: darken($primary-color, 10%);

h1{
  background-color: $primary-color;
  color: aliceblue;
}

input {
  background-color: black;
  text-align: center;
  margin-left: 10px;
}

#checkForm{
  color: aliceblue;
  background-color: $primary-color;
  &:hover{
    background-color: $darker-color;
  }
}

</style>