window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue';

import Vuex from 'vuex';
import index from './store';
Vue.use(Vuex);
const store = new Vuex.Store(index);

import VueRouter from 'vue-router'
import routes from './router';
Vue.use(VueRouter)
const router =  new VueRouter({mode: 'history',routes})

const app = new Vue({
    store,
    router,
}).$mount("#app");