<template>
  Stats should show up here but its not working
  Should also make it not show all stats but just the specific driver
  based on who is showing in the carousel
  {{allDriverStats}}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "DriverStats",
  computed:{
    ...mapGetters(['allDriverStats']),
    ...mapActions(['setAllDriverStats']),
    allDriverStats() {
      return this.allDriverStats;
    }
  },
}
</script>

<style scoped>

</style>