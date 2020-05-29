import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.use(VueRouter);
window.axios = axios;

axios.defaults.baseURL = 'http://127.0.0.1:8000';

new Vue({
  render: h => h(App),
}).$mount('#app');
