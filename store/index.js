export const state = () => ({
  lang: 'en'
})

export const mutations = {
  SET_LANG(state, lang) {
    state.lang = lang || 'en'
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { query }) {
    commit('SET_LANG', query.lang || 'en')

    const regions = await this.$axios.$get('/site/basics/region')
    commit('modal/MERGE_DATA', { regions: regions })
  }
}
