<template>
  <div class="movie">
<!--    <h1>{{ msg }}</h1>-->
    <h3>{{ titre }}
    </h3>
    <p>Rating: {{ note }}</p>
    <p>Genres:</p>
    <li v-for="genre in genres" :key="genre">{{ genre }}</li>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    // msg: String,
    id: {
      type: String,
      default: ''
    },
    titre: {
      type: String,
      default: '',
    },
    genres: {
      type: Array,
      default: () => [],
    },
    note: {
      type: Number,
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
<style scoped>
h3 {
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
