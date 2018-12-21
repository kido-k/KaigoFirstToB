export const state = () => ({
  categoryList: []
})

export const getters = {
  getCategory: state => state.categoryList
}

export const mutations = {
  addCategory(state, category) {
    state.categoryList.push(category[1])
  },
  clearCategory(state) {
    state.categoryList = []
  }
}

export const actions = {
  async fetchCategoryList({ commit }) {
    const categoryList = await this.$axios.$get(`/category.json`)
    commit('clearCategory')
    Object.entries(categoryList).forEach(c => commit('addCategory', c))
  }
}
