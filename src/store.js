import Vue from 'vue';
import Vuex from 'vuex';
import { localstorage, verifyAndUpdateItemFromLocalStorage } from './utils';
import service from './services';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    settings: {
      color: '',
      font: ''
    },
    savedDogs: [],
    allDogs: [],
    dogImage: '',
    toNotify: false,
    message: '',
    messageClass: '',
  },
  mutations: {
    'LOADING'(state) {
      state.loading = !state.loading;
    },
    'PUSH_NOTIFICATION'(state) {
      state.toNotify = true;
      setTimeout(() => {
        state.toNotify = false;
      }, 500);
    },
    'SET_FONT_COLOR'(state, { color }) {
      state.settings.color = color;
    },
    'SET_FONT_FAMILY'(state, { font }) {
      state.settings.font = font;
    },
    'GET_DATAS'(state, { settings, savedDogs }) {
      state.settings = settings;
      state.savedDogs = savedDogs;
    },
    'GET_ALL_DOGS'(state, { response }) {
      state.allDogs = response;
    },
    'GET_DOG_BY_TYPE'(state, { response }) {
      state.dogImage = response;
    },
    'SET_DOGS'(state, { dogs, isDelete }) {
      state.savedDogs = dogs;
      state.message = `Cachorro ${!isDelete ? 'salvo' : 'excluído'} com sucesso! :)`;
      state.messageClass = 'success';
    }
  },
  actions: {
    changeFontColor({ commit }, color) {
      verifyAndUpdateItemFromLocalStorage('settings', 'color', color);
      commit('SET_FONT_COLOR', { color });
    },
    changeFontFamily({ commit }, font) {
      verifyAndUpdateItemFromLocalStorage('settings', 'font', font);
      commit('SET_FONT_FAMILY', { font });
    },
    getStorageDatas({ commit }) {
      const settings = localstorage.get('settings') || {};
      const savedDogs = localstorage.get('savedDogs') || [];
      commit('GET_DATAS', { settings, savedDogs });
    },
    async getAllDogs({ commit }) {
      commit('LOADING');
      const response = await service.getAllDogs();
      commit('GET_ALL_DOGS', { response });
      commit('LOADING');
    },
    async getDogByType({ commit }, type) {
      commit('LOADING');
      const response = await service.getDogByType(type);
      commit('GET_DOG_BY_TYPE', { response });
      commit('LOADING');
    },
    saveDog({ commit }, dog) {
      commit('LOADING');
      let dogs = localstorage.get('savedDogs') || [];
      dog.id = dogs.length + 1;
      dog.date = new Date();
      dogs.push(dog);
      localstorage.set('savedDogs', dogs);
      commit('SET_DOGS', { dogs });
      commit('LOADING');
      commit('PUSH_NOTIFICATION');
    },
    deleteDog({ commit }, id) {
      commit('LOADING');
      let dogs = localstorage.get('savedDogs');
      dogs.splice(dogs.indexOf(dogs.find(item => item.id == id)), 1);
      localstorage.set('savedDogs', dogs);
      commit('SET_DOGS', { dogs, isDelete: true });
      commit('LOADING');
      commit('PUSH_NOTIFICATION');
    }
  }
})
