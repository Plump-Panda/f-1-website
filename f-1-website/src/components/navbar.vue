<template>
  <div>
    <ul class="navbar">
      <li>Home</li>
      <li>Circuits</li>
      <li>Drivers</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    items: {type: Object, required: true},
  }
}
</script>

<style scoped>
.navbar{
  padding-top: .5em;
  padding-bottom: .5em;
  display: flex;
  width: 100vw;
  background-color: #F70100;
}

li {
  list-style: none;
  margin: 0 2em 0 2em;
}
</style>