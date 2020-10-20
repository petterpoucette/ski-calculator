/**
 * The ski module for the vuex store. Resposible for storing and manipulating the values in this module.
 */
import SkiService from '@/services/SkiService'

export const namespaced = true

export const state = {
  skiInfo: [],
  userInfo: {},
  skiLength: {}
}

export const mutations = {
  SET_SKI_INFO(state, category) {
    state.skiInfo = category
  },
  SET_USER_INFO(state, user) {
    state.userInfo = user
  },
  SET_SKI_LENGTH(state, skiLength) {
    state.skiLength = skiLength
  }
}

export const actions = {
  /**Fetch the information form service (that is connected with the server) */
  async fetchSkiInfo() {
    return SkiService.getSkiInfo().then(response => {
      let categories = getCategory(response.data)
      this.dispatch('ski/setSkiInfo', categories)
    })
  },
  setSkiInfo({ commit }, categories) {
    commit('SET_SKI_INFO', categories)
    if (categories.length == 1) {
      const skiLength = calcSkiLength(
        categories[0].skiLength.min,
        categories[0].skiLength.max
      )
      commit('SET_SKI_LENGTH', skiLength)
    }
  },
  setUserInfo({ commit }, user) {
    commit('SET_USER_INFO', user)
  },
  resetState({ commit }) {
    commit('SET_USER_INFO', [])
    commit('SET_SKI_LENGTH', {})
    commit('SET_SKI_INFO', {})
  }
}

export const getters = {
  /**return the correct category based on the name */
  getCategoryByName: state => name => {
    return state.skiInfo.find(style => style.name === name)
  }
}
/**Calculates the ski length for the user */
function calcSkiLength(min, max) {
  const skiLimit = state.skiInfo[0].skiLimit
  const userLenght = state.userInfo.length

  return {
    min:
      min !== null
        ? skiLimit
          ? userLenght + min > skiLimit
            ? skiLimit
            : userLenght + min
          : userLenght + min
        : null,
    max:
      max !== null
        ? skiLimit
          ? userLenght + max > skiLimit
            ? skiLimit
            : userLenght + max
          : userLenght + max
        : null
  }
}

/**Returns the category/catagories based on the age of the user */
function getCategory(data) {
  return data.filter(category => {
    if (category.age.max) {
      return (
        category.age.min <= state.userInfo.age &&
        category.age.max >= state.userInfo.age
      )
    } else {
      return category.age.min <= state.userInfo.age
    }
  })
}
