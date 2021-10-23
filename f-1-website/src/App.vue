<template>
  <navbar :items="navbarItems"/>
  <DriverPage :car-image="this.carImage"/>
</template>

<script>
import DriverPage from './components/DriverPage.vue'
import constants from './constants.js';
import Navbar from "./components/navbar";

export default {
  name: 'App',
  components: {
    Navbar,
    DriverPage
  },
  data() {
    return{
      carImage: "lando-norris-car.jpg",
      navbarItems: constants.navbar,
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap');

#app {
  font-family: 'Exo 2', sans-serif;
  background-color: #232323;
  height: 100vh;
}
</style>
