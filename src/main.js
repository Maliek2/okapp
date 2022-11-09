import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require("dotenv").config()

Vue.config.productionTip = false

import {startTracker} from './tracker/index'
import trackerVuex from '@openreplay/tracker-vuex';


let {vuexTracker} = startTracker({
    userIdEnabled: true,
    projectKey: process.env.VUE_APP_OPENREPLAY_PROJECT_KEY,
    plugins:{
      'vuexTracker': trackerVuex
    } 
})



new Vue({
  router,
  store: store([vuexTracker]),
  render: h => h(App)
}).$mount('#app')
