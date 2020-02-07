<template>
  <div id="app">
    <b-row style='padding:25px;'>
        <h4>Example People</h4>
      <b-card-group deck>
        <div v-for="person in people" :key="person.id">
          <b-card class="text-center" style='min-height:340px;min-weight:300px;padding:0 !important;'>
            <template v-slot:footer>
               <b-button class='noStyle'><i class='fa fa-facebook'></i></b-button>
               <b-button class='noStyle'><i class='fa fa-twitter'></i></b-button>
               <b-button class='noStyle'><i class='fa fa-email'></i></b-button>
                <b-button class='noStyle' style='margin-left:150px;'><i class='fa fa-pencil'></i></b-button>
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
  </div>
</template>

<script>
import personCard from '../assets/personCard.json'
import data from '../sampleData.json'
export default {
  name: 'people',
  components: {

  },
  created(){
    console.log(personCard);
  },
  computed: {
    card() {
      return personCard
    },
    people(){
      return data.people
    }
  },
  data() {
    return {
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
