<template>
  <div id="home">
    <h1>Academy Awards for Best Movie </h1><br>
    <div id="sortingMovies">
      <label for="sortMovies">Sort movies by:</label>
      <select id="selected" v-model="selectedGenre">
        <option v-for="genreOption in genresOptions" :key="genreOption">{{ genreOption }}</option>
      </select>

      <select id="selected" v-model="selectedGenre">
        <option v-for="genreOption in getGenres" :key="genreOption">{{ genreOption }}</option>
      </select>
      <v-btn @click="getGenres"></v-btn>
    </div>
    <div id="goToMovie" v-for="movie in sortMoviesByGenre" :key="movie.id">
      <router-link :to="{
              name:'Movie',
              params:{
                id:movie.id,
                movie:movie,
              }
            }">
        <v-btn id="displayMovie">{{ movie.title }}</v-btn>
      </router-link>
      <br>
    </div>
    <div id="nbMovies">
      <h2>Number of movies: {{ films.length }}</h2>
      <h2>Number of selected movies: {{ nbMovies }}</h2>
<!--      <h2>Number of selected movies: {{ sortMovies() }}</h2>-->
    </div><br>
    <!--  <h2>Number of selected movies: {{ nbMovies }}</h2>-->
    <!--  <h2>Number of selected movies: {{ sortMovies() }}</h2>-->
    <!--  <br>-->
    <!--  <h2>Number of selected movies: {{ nbMovies }}</h2>-->
    <!--  <h2>Number of selected movies: {{ sortMovies() }}</h2>-->
  </div>
</template>

<script>

export default {
  name: "Home",
  props: {
    movies: {
      type: Array,
    },
  },
  data() {
    return {
      films: [
        {
          id: 1,
          title: "Nomadland",
          picture: "https://fr.web.img5.acsta.net/pictures/21/04/29/09/49/2883699.jpg",
          genres: ["drama", "travel"],
          rating: 9,
          review: "A poetic character study on the forgotten and downtrodden, Nomadland beautifully captures the restlessness left in the wake of the Great Recession.",
          description: "Nomadland is a 2020 American drama film written and directed by Chloé Zhao. It is based on the book by Jessica Bruder pubished in 2017."
        },
        {
          id: 2,
          title: "Parasite",
          picture: "https://fr.web.img6.acsta.net/pictures/20/02/12/13/58/3992754.jpg",
          genres: ["comedy", "drama", "thriller"],
          rating: 9,
          review: "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
          description: "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won."
        },
        {
          id: 3,
          title: "Green Book",
          picture: "https://fr.web.img5.acsta.net/pictures/19/02/25/17/06/0818764.jpg",
          genres: ["biopic", "drama"],
          rating: 9,
          review: "Mahershala Ali plays a jazz musician who confronts the racism of his driver, played by Viggo Mortensen, in a warm but tentative real-life story.",
          description: "Green Book is a 2018 American biographic film directed by Peter Farrelly, working on the screenplay with Nick Vallelonga and Brian Hayes Currie."
        },
      ],
      selectedGenre: "",
      // [
      //   'Title',
      //   'Genres',
      //   'Rating',
      //   'Review',
      //   'Description'
      // ],
      genresOptions: [
        // {text: 'Select One', value: null},
        'action',
        'biopic',
        'comedy',
        'drama',
        'travel',
        'thriller',
        'western',
      ],
    }
  },
  methods: {
    getGenres() {
      console.log(this.films)
      for (let i=0; i < this.films.genres; i++) {
        console.log(i); // 0, 1, 2
        // let genresOptions = []
        // this.genresOptions.push(genres)
      }
    },
    // sortMovies() {
    //   console.log(this.films.length) // value logged everytime the function is called
    //   return this.sortMoviesByGenre.length
    // }
  },
  computed: {
    nbMovies() {
      // console.log(this.films.length) // value logged only once
      return this.sortMoviesByGenre.length    // return value = number of movies in the array after sorting
    },
    sortMoviesByGenre() {
      if (this.selectedGenre === "") {
        return this.films
      } else {
        return this.films.filter(movie => movie.genres.includes(this.selectedGenre))
      }
    },
  },
  mounted() {
    // console.log(this.movies)
    if (this.movies !== undefined) {
      this.films = this.movies
    }
  }
}
</script>

<style scoped lang="scss">

$primary-color: #0050B0;
$darker-color: darken($primary-color, 10%);

#displayMovie {
  color: aliceblue;
  background-color: $primary-color;

  &:hover {
    background-color: $darker-color;
  }
}

</style>