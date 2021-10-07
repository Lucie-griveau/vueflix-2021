<template>
  <div class="collection">
    <h3>{{ collection.description }}
    </h3><br>
    <h4>Movies:</h4>
    <div v-for="movies in collection.movies" :key="movies.id">
      <li>{{ movies.title }}</li>
    </div>
    <br>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Collection",
  data() {
    return {
      loading: false,
      error: null,
      collection: [],
    }
  },
  methods: {
    displayCollection() {
      this.collection = []
      axios
        .get('https://apirest-movies-collections.herokuapp.com/collections', {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
          }
        })
        .then(response => {
          this.collection = response.data;
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
  mounted() {
    this.displayCollection()
  }
}
</script>

<style scoped>

</style>