<template>
  <div id="app">
    <b-row style='padding:25px;'>
        <h4>Example People</h4>
      <b-card-group deck>
        <div v-for="person in people" :key="person.id">
          <b-card class="text-center" style='min-height:340px;min-weight:400px;margin-top:15px;margin-right:10px;'>
            <template v-slot:footer>
               <b-button class='noStyle'  v-on:click='editPerson(person)'  style='margin-left:260px;'><i v-on:click='editPerson(person)' class='fa fa-pencil'></i></b-button>
            </template>
            <adaptive-cards
              :card="card"
              :data="person"
              :useTemplating = true
            />
          </b-card>
        </div>
      </b-card-group>
    </b-row>
    <b-modal 
      id="modal-2" 
      title="Create Person"
      :cancel-disabled="true"
      size="lg"
      :ok-disabled="true">
      <create-user :mode="'edit'" :person="currentPerson" />
      <template v-slot:modal-footer>
        <div/>
      </template>
    </b-modal>
  </div>
</template>

<script>
import personCard from '../assets/personCard.json'
import createUser from './createOrEditPerson.vue'
import { mapState } from'vuex'
export default {
  name: 'people',
  components: {
    createUser
  },
  data() {
    return {
      currentPerson: null
    }
  },
  computed: {
    ...mapState('people',['people']),
    card() {
      return personCard
    }
  },
  methods: {
    editPerson(person){
      this.currentPerson = person;
      this.$bvModal.show('modal-2')
    },
    closeModal(){
      this.$bvModal.hide('modal-1')
      this.$bvModal.hide('modal-2')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.noStyle{
  border:none !important;
  background:none !important;
  color:black !important;
}
</style>
