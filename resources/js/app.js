/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

 window.Vue = require('vue');
 
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 

 import VueRouter from 'vue-router';
 import routes from '../js/router/routes';  
 import App from '../js/Components/App';

    Vue.use(ElementUI); 
    Vue.use(VueRouter);     

    new Vue({
        el: '#app', ElementUI, 
        router: new VueRouter(routes),
        ...App
    });
    
     
 
  