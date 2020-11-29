import axios from 'axios'

const state = () => ({
  ans: { x: null, y: null, z: null }
})

const actions = {
  async getResult({ commit }, data) {
    try {
      const response = await axios.post(process.env.VUE_APP_ENV_URL + '/xyz', data)
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
    state.ans = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
