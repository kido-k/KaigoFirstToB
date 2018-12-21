export const state = () => ({
  caremanagers: []
})

export const getters = {
  getCaremanagers: state => state.caremanagers
}

export const mutations = {
  addCaremana(state, { caremana }) {
    state.caremanagers.push(caremana)
  },
  // updateQA(state, { example }) {
  //   state.examples = state.examples.map(
  //     p => (p.id === example.id ? example : p)
  //   )
  // },
  clearCaremana(state) {
    state.caremanagers = []
  }
}

export const actions = {
  async fetchCaremanaList({ commit }) {
    const caremanagers = await this.$axios.$get(`/caremanalist.json`)
    // console.log(caremanagers)
    commit('clearCaremana')
    Object.entries(caremanagers).forEach(([id, content]) =>
      commit('addCaremana', {
        caremana: {
          id,
          ...content
        }
      })
    )
    console.log(state.caremanagers)
  }
}
