import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import VueRouter from 'vue-router'
import Routes from './router/index'
import Store from "./store/store"

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  store: Store,
  render: h => h(App),
  router: router,
  data: {}
});
