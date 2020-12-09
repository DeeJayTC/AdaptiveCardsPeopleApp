<template>
  <adaptive-cards
      :card="card"
      :data="person"
      :useTemplating = true
      v-on:onActionClicked="onCardAction"
  />
</template>

<script>
import personCard from '../assets/loginCard.json'
export default {
  name: 'login',
  props: {
    person:{
      type: Object,
      default() {
        return {

          }
     }
    },
    mode: {
      type: String,
      default: "create"
    }
  },
  computed: {
    card() {
      return personCard
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
