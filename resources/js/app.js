
window.Vue = require('vue');
import 'vuetify/dist/vuetify.min.css'

import Vue from 'vue';
import Vuetify from 'vuetify'
import VueRouter from 'vue-router';
import routes from './router/routes';  
import vuetify from './plugins/vuetify'
import App from '../js/components/App'  


Vue.use(VueRouter);    
Vue.use(Vuetify); 

new Vue({
    el: '#app',  vuetify,
    router: new VueRouter(routes),
    ...App
});
 