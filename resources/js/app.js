  

// window.Vue = require('vue');
 
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue';
import store from '~/store' 
import router from '~/router' 
import vuetify from '~/plugins/vuetify' 
import App from '~/components/App.vue'
import Vuetify from 'vuetify'

import '~/plugins'
import '../js/components/index.js' 
window.moment = require('moment');
  
Vue.use(Vuetify)
new Vue({
    el: '#app',
    vuetify, 
    store,
    router,
    ...App
  })
 