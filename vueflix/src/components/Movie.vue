<template>
  <div class="movie">
          <!--    <h1>{{ msg }}</h1>-->
      <h3>{{ titre }}
      </h3>
    <img v-bind:src="'{{ image }}'" alt="">
      <li v-for="genre in genres" :key="genre">{{ genre }}</li>
    <v-rating
        readonly
        v-model="note"
        background-color="blue lighten-3"
        color="blue"
        large
        length="10"
    ></v-rating>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    // msg: String,
    id: {
      type: Number,
      default: 0,
    },
    titre: {
      type: String,
      required: true,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    genres: {
      type: Array,
      required: true,
      default: // () => [] with ES6
          function () {
            return []
          },
    },
    note: {
      type: Number,
      required: true,
      default: 0,
    },
    revue: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  }
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
