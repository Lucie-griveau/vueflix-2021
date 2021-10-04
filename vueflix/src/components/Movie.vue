<template>
  <div class="movie">
    <h3>{{ movie.title }}
    </h3><br>
    <h4>Description:</h4>
    <p>{{ movie.description }}</p><br>
    <h4>Genres:</h4>
    <li v-for="genre in movie.genres" :key="genre">{{ genre }}</li><br><br>
    <img :src="movie.picture" alt="movie_picture" width="500em"><br>
    <v-rating
        readonly
        v-model="movie.rating"
        background-color="blue lighten-3"
        color="blue"
        large
        length="10"
    ></v-rating>
    <br>
    <h4>Review:</h4>
    <p>{{ movie.review }}</p><br>
    <router-link to="/">
      <v-btn id="returnHome" type="submit">Back</v-btn>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    // msg: String,
    movie: {
      type: Object,
    },
  },
  // beforeCreate() { console.log('Je ne suis pas encore  créé') },
  // created() { console.log('Je suis créé !') },
  // beforeMount() { console.log('Je vais bientôt être monté sur le DOM!') },
  // mounted() { console.log('Je suis monté sur le DOM!') },
  // beforeUpdate() { console.log('Je vais bientôt me mettre à jour!') },
  // updated() { console.log ('Je suis à jour ! ')},
  // beforeDestroy() { console.log('Je suis sur le point de disparaître du DOM !') },
  // destroyed() { console.log('Je suis supprimé') }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"> // On peut maintenant utiliser Sass !
$primary-color: #0050B0;
$darker-color: darken($primary-color, 10%);

h3 {
  color: $primary-color;
  margin: 40px 0 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
