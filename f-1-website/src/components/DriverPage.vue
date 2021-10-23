<template>
  <div class="container">
    <section id="left-section">
        <BannerFlag name="Lando Norris"/>
    </section>
    <section id="right-section">
      <img alt="Car Image" class="car" :src="require(`@/assets/${carImage}`)">
    </section>
  </div>
</template>


<script>
import BannerFlag from "./BannerFlag";
export default {
  name: 'DriverPage',
  components: {
    BannerFlag
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
.container{
  display: flex;
  flex-wrap: nowrap;
}

section{
  border-color: red;
  border-width: 1px;
  border-style: dashed;
}

#left-section{
  width: 35%;
}

#right-section{
  width: 65%;
}

.car{
  width: 35em;
}
</style>
