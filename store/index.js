export const state = () => ({
  siteInfo: {}
});

export const actions = {
  async nuxtServerInit({ dispatch }) {
    try {
      await dispatch('getSiteInfo');
    } catch (e) {
      console.log(e);
    }
  },
  getSiteInfo({ state, commit }) {
    try {
      const info = require('~/content/setup/config.json');
      commit('SET_SITE_INFO', info);
    } catch (e) {
      commit('SET_SITE_INFO', {});
    }
  }
};

export const mutations = {
  SET_SITE_INFO(state, data) {
    state.siteInfo = data;
  }
};
