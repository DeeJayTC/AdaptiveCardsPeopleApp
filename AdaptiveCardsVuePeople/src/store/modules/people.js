/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import sampleData from '../../sampleData.json'

const state = {
    people: sampleData.people,
    me: sampleData.me,
  };
  
  const mutations = {
    setAccount(state, account) {
      state.account = account;
    },
  };
  
  const actions = {
    setAccount({ commit }, accdata) {
      commit('setAccount', accdata);
    },
  };
  
  const getters = {
    getCurrentUser(state) {
      return !!state.me;
    },
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true,
  };
  