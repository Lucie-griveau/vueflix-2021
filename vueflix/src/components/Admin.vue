<template>
<div class="admin">
  <h1>What do you want to add?</h1><br>

  <router-link :to="{
              name:'MovieCreation',
              params:{
              }
            }">
    <v-btn>Movie</v-btn>
  </router-link>
  <router-link :to="{
              name:'CollectionCreation',
              params:{
              }
            }">
    <v-btn>Collection</v-btn>
  </router-link>

</div>
</template>

<script>
export default {
  name: "Admin"
}
</script>

<style lang="scss">

$primary-color: #0050B0;
$darker-color: darken($primary-color, 10%);

h1 {
  background-color: $primary-color;
  color: aliceblue;
}

</style>