export const state = () => ({
  categoryList: [],
  isLoggedIn: false,
  user: null
})

export const getters = {
  isLoggedIn: state => state.isLoggedIn,
  user: state => state.user,
  getCategory: state => state.categoryList
}

export const mutations = {
  setUser(state, { user }) {
    state.user = user
    state.isLoggedIn = true
  },
  addCategory(state, category) {
    state.categoryList.push(category[1])
  },
  clearCategory(state) {
    state.categoryList = []
  }
}

export const actions = {
  async login({ commit }, { id }) {
    const user = await this.$axios.$get(`/users/${id}.json`)
    if (!user.id) throw new Error('Invalid user')
    commit('setUser', { user })
  },
  async register({ commit }, { id }) {
    const payload = {}
    payload[id] = { id }
    await this.$axios.$patch(`/users.json`, payload)
    const user = await this.$axios.$get(`/users/${get}.json`)
    if (!user.id) throw new Error('Invalid user')
    commit('setUser', { user })
  },
  async fetchCategoryList({ commit }) {
    const categoryList = await this.$axios.$get(`/category.json`)
    commit('clearCategory')
    Object.entries(categoryList).forEach(c => commit('addCategory', c))
  }
}
