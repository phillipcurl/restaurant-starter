export const state = () => ({
	info: {}
});

export const actions = {
	async fetchThemeInfo({ commit }) {
		const themeInfo = await require('~/assets/content/config/theme.json');
		await commit('SET_THEME_INFO', themeInfo);
	}
};

export const mutations = {
	SET_THEME_INFO(state, data) {
		state.info = data;
	}
};
