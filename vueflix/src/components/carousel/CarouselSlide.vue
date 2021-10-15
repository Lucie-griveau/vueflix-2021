<template>
  <transition name="slide">
    <div v-show="visible">
      Index: {{ index }}
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CarouselSlide",
  data() {
    return {
      index: 0
    }
  },
  computed: {
    visible() {
      return this.index === this.$parent.index
    }
  },
}
</script>

<style scoped>
.slide-enter-active{
  animation: slideIn .5s;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
}
</style>