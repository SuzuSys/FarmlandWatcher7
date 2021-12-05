import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
  },
  mutation: {
    setUser(state, user) {
      state.user = user;
    }
  }
});

export default store;