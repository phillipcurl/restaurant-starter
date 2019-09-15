export const state = () => ({
	info: {}
});

export const actions = {
	async fetchContactInfo({ commit }) {
		const contactInfo = await require('~/assets/content/config/contact.json');
		await commit('SET_CONTACT_INFO', {
			...contactInfo,
			geo: JSON.parse(contactInfo.geo)
		});
	}
};

export const mutations = {
	SET_CONTACT_INFO(state, data) {
		state.info = data;
	}
};
