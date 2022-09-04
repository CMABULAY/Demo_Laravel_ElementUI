// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify)

const opts = {theme: {
    themes: {
      light: {
        primary: '#cc0033',
        secondary: '#717171',
        third: '#bfc5d3',
        fourth: '#f6f7fc',
      },
      dark: {
        primary: '#cc0033',
        secondary: '#717171',
        third: '#bfc5d3',
        fourth: '#f6f7fc',
      },
    },
  },}

export default new Vuetify(opts)
