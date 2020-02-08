/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import sampleData from '../../sampleData.json'

const state = {
    people: sampleData.people,
    me: sampleData.me,
  };
  
  const mutations = {
    updatePerson(state, person) {
      var existingPerson = state.people.find(p=>p.id == person.id);
      if(existingPerson) {
        existingPerson.displayName= person.displayName;
        existingPerson.jobTitle= person.jobTitle;
        existingPerson.mail= person.mail;
        existingPerson.officeLocation= person.officeLocation;
        existingPerson.businessPhones= [person.businessPhones];
        existingPerson.image= person.image != '' ? person.image : existingPerson.image;
      }
    },
  };
  
  const actions = {
    setAccount({ commit }, accdata) {
      commit('setAccount', accdata);
    },
    updatePerson({ commit }, person){
      commit('updatePerson',person);
    }
  };
  
  const getters = {
    getPeople(state) {
      return state.people;
    },
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true,
  };
  