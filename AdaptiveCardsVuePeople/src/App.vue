<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link  class="navbar-brand" to="/home">Adaptive Cards Demo</router-link >
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExample02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/home">Users</router-link>
          </li>
          <li class="nav-item">
             <b-button v-b-modal.modal-1>Add User</b-button>
          </li>
        </ul>
        <form class="form-inline my-2 my-md-0">
          <input class="form-control" type="text" placeholder="Search">
        </form>
      </div>
    </nav>
    <router-view style='margin-top:15px;'>

    </router-view>
     

    <b-modal 
    id="modal-1" 
    title="Create Person"
    :cancel-disabled="true"
    size="lg"
    :ok-disabled="true">
      <create-user />
      <template v-slot:modal-footer>
        <div/>
      </template>
    </b-modal>
  </div>
</template>

<script>
import createUser from './views/createOrEditPerson.vue'
export default {
  name: 'App',
  components: {
    createUser
  },
  data() {
    return {
    }
  },
  methods:{
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
