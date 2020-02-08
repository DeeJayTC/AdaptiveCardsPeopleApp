<template>
  <adaptive-cards
      :card="card"
      :data="person"
      :useTemplating = true
      v-on:onActionClicked="onCardAction"
  />
</template>

<script>
import personCard from '../assets/personCreate.json'
export default {
  name: 'people',
  props: {
    person:{
      type: Object,
      default() {
        return {
              displayName: "",
              jobTitle: "",
              image: "",
              email: ""
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
   
      if(this.mode == 'create'){
        var user = {
          displayName: data2.name,
          jobTitle: data2.job,
          mail: data2.email,
          officeLocation: data2.office,
          businessPhones: [data2.phone],
          image: data2.image
        };
        this.$store.state.people.people.push(user);
      } else{
        this.$store.commit('people/updatePerson', {
          id: data2.personId,
          displayName: data2.name,
          jobTitle: data2.job,
          mail: data2.email,
          officeLocation: data2.office,
          businessPhones: [data2.phone],
          image: data2.image
        })
      }
      this.$bvModal.hide('modal-1')
      this.$bvModal.hide('modal-2')
    },
  }
}
</script>

<style>

</style>
