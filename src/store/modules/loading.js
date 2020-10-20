/**
 * The loading module for the vuex store. Resposible for storing and manipulating the values in this module.
 */

export const namespaced = true

export const state = {
  loading: false
}

export const mutations = {
  TOGGLE_LOADING(state) {
    state.loading = !state.loading
  }
}

export const actions = {
  toggleLoading({ commit }) {
    commit('TOGGLE_LOADING')
  }
}
