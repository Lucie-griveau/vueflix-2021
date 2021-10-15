<template>
<div class="carousel">
  <slot></slot>
  <button class="carousel-nav carousel-next" @click.prevent="next">Suivant</button>
  <button class="carousel-nav carousel-prev" @click.prevent="prev">Précédent</button>
</div>
</template>

<script>
export default {
  name: "Carousel",
  data(){
    // console.log(this.$children)
    return {
      index: 0,
      slides: this.$children,
    }
  },
  mounted() {
    this.slides = this.$children
    this.slides.forEach((slide, i) => {
      slide.index = i
    })
  },
  computed: {
    slidesCount(){
      return this.slides.length
    }
  },
  methods: {
    next(){
      this.index++
      if (this.index >= this.slidesCount){
        this.index = 0
      }
    },
    prev(){
      this.index--
      if (this.index < this.slidesCount){
        this.index = this.slidesCount - 1
      }
    }
  },
}
</script>

<style scoped>
.carousel{
  position: relative;
}
.carousel-nav{
  position: absolute;
  top: 50%;
  left: 10px;
  
}
</style>