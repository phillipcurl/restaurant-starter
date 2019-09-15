export const state = () => ({
	info: {}
});

export const actions = {
	async fetchAboutInfo({ commit }) {
		const aboutInfo = await require('~/assets/content/about/info.json');
		await commit('SET_ABOUT_INFO', aboutInfo);
	}
};

export const mutations = {
	SET_ABOUT_INFO(state, data) {
		state.info = data;
	}
};
