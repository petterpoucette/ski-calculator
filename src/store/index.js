import Vue from 'vue'
import Vuex from 'vuex'
import * as ski from '@/store/modules/ski.js'
import * as loading from '@/store/modules/loading.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ski,
    loading
  },
  state: {},
  mutations: {},
  actions: {}
})
