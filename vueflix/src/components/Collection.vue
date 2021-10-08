<template>
  <div class="collection">
<!--    <h3>{{ collection.description }}</h3>-->
    <div v-for="movies in collection.movies" :key="movies.id">
      <router-link :to="{
              name:'Movie',
              params:{
                id:movies.id,
                movie:movies,
              }
            }">
        <v-btn class="movieBtn" id="displayMovie">{{ movies.title }}</v-btn>
      </router-link>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: "Collection",
  props: {
    collection: {
      type: Object,
    },
  }
}
</script>

<style scoped>

</style>