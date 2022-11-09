import Vue from 'vue'
import Vuex from 'vuex'

import account from './account'
import product from './product'

Vue.use(Vuex)


export default function (plugins = []) {
  return function() {
    const Store = new Vuex.Store({
      modules: {
        account,
        product
      },

      // enable strict mode (adds overhead!)
      // for dev mode only
      strict: process.env.DEV,
      plugins
    })

    return Store
  }
}
