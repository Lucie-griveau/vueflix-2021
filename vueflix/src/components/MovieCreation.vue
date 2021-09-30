<template>
  <div class="movie_creation">
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
      <select id="genres" v-model="dataAdded.genres" multiple>
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
      <v-rating
          v-model="dataAdded.rating"
          background-color="blue lighten-3"
          color="blue"
          length="10"
          large
      ></v-rating><br>

      <label for="review">Review</label><br>
      <input id="review" v-model="dataAdded.review" type="text" placeholder="Review"><br><br>

      <label for="description">Description</label><br>
      <input id="description" v-model="dataAdded.description" type="text" placeholder="Description"><br><br>

      <button type="submit" @click="addMovie(dataAdded)">Add a movie</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MovieCreation',
  props: {
    // msg: String,
    films: {
      type: Array,
      default:
          function () {
            return []
          },
    },
    genresOptions: {
      type: Array,
      default:
          function () {
            return []
          }
    },
    addMovie: {
      type: Function,
    }
  },

  data() {
    return {
      errors: [],
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
  }
}
</script>

<style scoped>

</style>