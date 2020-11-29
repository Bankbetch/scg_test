import axios from 'axios'

const state = () => ({
  results: { results: undefined, distance: {}, duration: {} }
})

const actions = {
  async getResult({ commit }, query) {
    try {
      const response = await axios.get(process.env.VUE_APP_ENV_URL + '/directions', {
        params: query
      })
      if (response.status === 200) {
        commit('setAns', response.data.result)
      }
    } catch (e) {
      console.log(e)
      commit('setAns', null)
    }
  }
}

const mutations = {
  setAns(state, data) {
    state.results = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
