<template>
  <div class="movies">
    <Movies name="carousel">
      <Movie name="carousel">

      </Movie>
    </Movies>

    <div class="col-lg-4 sm-12">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                  aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ movie.poster_path" alt="movie_picture"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ movie.title }}</h5>
              <div id="movie_genres">
                <p>{{ movie.genres }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Movies"
}
</script>

<style scoped>

</style>