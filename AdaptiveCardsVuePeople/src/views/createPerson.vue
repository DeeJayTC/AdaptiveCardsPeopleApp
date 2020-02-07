<template>
  <div id="app">
      HEY
    <adaptive-cards
        :card="card"
        :data="person"
        :useTemplating = true
    />
  </div>
</template>

<script>
import personCard from '../assets/personCreate.json'
export default {
  name: 'people',
  components: {

  },
  computed: {
    card() {
      return personCard
    }
  },
  data() {
    return {
        person:{
            displayName: "notSet",
            jobTitle: "notSet",
            image: "",
            email: ""
        }
    }
  }
}
</script>

<style>

</style>
