<template>
  <div class="collections">
    <div v-for="collection in collections" :key="collection.id">
      <router-link :to="{
              name:'Collection',
              params:{
                id:collection.id,
                collection:collection,
              }
            }">
        <v-btn class="collectionBtn" id="displayMovie">{{ collection.description }}</v-btn>
      </router-link>
      <br>
<!--      <div v-for="movies in collection.movies" :key="movies.id">-->
<!--        <router-link :to="{-->
<!--              name:'Movie',-->
<!--              params:{-->
<!--                id:movies.id,-->
<!--                movie:movies,-->
<!--              }-->
<!--            }">-->
<!--          <v-btn class="movieBtn" id="displayMovie">{{ movies.title }}</v-btn>-->
<!--        </router-link>-->
<!--      </div>-->
      <br>
    </div>
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
      collections: [],
    }
  },
  methods: {
    displayCollection() {
      axios
          .get('http://localhost:3000/collections')
          .then(response => {
            // console.log(response.data)
            this.collections = response.data;
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
  },
  watch: {
    collections: function(){
      console.log(this.collections)
    },
}

}
</script>

<style scoped>

</style>