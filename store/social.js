export const state = () => ({
	info: {}
});

export const actions = {
	async fetchSocialInfo({ commit }) {
		const socialInfo = await require('~/assets/content/config/social.json');
		await commit('SET_SOCIAL_INFO', socialInfo);
	}
};

export const mutations = {
	SET_SOCIAL_INFO(state, data) {
		state.info = data;
	}
};
