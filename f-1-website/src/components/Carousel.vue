<template>
  <Splide :options="{ rewind: true, width: '30em'}">
    <SplideSlide  v-for="driver in drivers" v-bind:key="driver.id">
      <h2>{{driver.id}}</h2>
      <img :src="driver.profileImage" :alt="driver.id">
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import constants from "../constants";

export default {
  name: "Carousel",
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return{
      drivers: constants.drivers,
    }
  }
}
</script>

<style scoped>
h2{
  text-align: center;
}

img{
  width: 20em;
  height: 20em;
  display: block;
  margin: 0 auto;
}
</style>