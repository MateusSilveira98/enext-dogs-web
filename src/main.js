import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/icons/css/font-awesome.css';
import config from '../config.json';
import axios from 'axios';

Vue.config.productionTip = false;

axios.defaults.baseURL = config.API_URL;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
