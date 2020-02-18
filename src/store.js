import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);


const moduleForm = {
  state: {
      categorylist: [],
  },
    mutations: {}
};


const vuexLocal = new createPersistedState({
  storage: window.localStorage
});

const store = new Vuex.Store({
  modules: {
    a: moduleForm
  },
  plugins: [vuexLocal]
});

export default store
