<template>
  <div id="app" style='padding:25px;'>
    <h4>Create a new person</h4>
    <adaptive-cards
        :card="card"
        :data="person"
        :useTemplating = true
        v-on:onActionClicked="onCardAction"
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
            displayName: "",
            jobTitle: "",
            image: "",
            email: ""
        }
    }
  },
  methods:{
    async onCardAction(data,data2){
      console.log(data);
      console.log(data2);
    },
  }
}
</script>

<style>

</style>
