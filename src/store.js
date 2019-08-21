import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    fontColor: ''
  },
  mutations: {
    'SET_FONT_COLOR'(state, {color}) {
      state.fontColor = color;
    }
  },
  actions: {
    changeFontColor({commit}, color) {
      commit('SET_FONT_COLOR', {color});
    }
  }
})
