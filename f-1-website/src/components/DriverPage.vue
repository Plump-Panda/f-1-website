<template>
  <h1>Season: 2021</h1>
  <section class="center" id="carousel">
    <Carousel/>
  </section>

  <section class="center" id="driverStats">
    <DriverStats/>
  </section>

</template>


<script>
import Carousel from "./Carousel";
import DriverStats from "./DriverStats";
export default {
  name: 'DriverPage',
  components: {
    Carousel,
    DriverStats
  },
  props: {
    carImage: {type: String, required: true}
  },
  computed: {},
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align: center;
}
.center{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
