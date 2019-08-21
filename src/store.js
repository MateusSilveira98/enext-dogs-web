import Vue from 'vue';
import Vuex from 'vuex';
import {localstorage, verifyAndUpdateItemFromLocalStorage} from './utils';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    settings: {
      color: '',
      font: ''
    }
  },
  mutations: {
    'SET_FONT_COLOR'(state, {color}) {
      state.settings.color = color;
    },
    'SET_FONT_FAMILY'(state, {font}) {
      state.settings.font = font;
    }
  },
  actions: {
    changeFontColor({commit}, color) {
      verifyAndUpdateItemFromLocalStorage('settings', 'color', color);
      commit('SET_FONT_COLOR', {color});
    },
    changeFontFamily({commit}, font) {
      verifyAndUpdateItemFromLocalStorage('settings', 'font', font);
      commit('SET_FONT_FAMILY', {font});
    }
  }
})
