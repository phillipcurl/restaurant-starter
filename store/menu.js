export const state = () => ({
	fullMenu: {}
});

export const actions = {
	async fetchMenu({ commit }) {
		let files = await require.context(
			'~/assets/content/menu-categories/',
			false,
			/\.json$/
		);
		let blogPosts = files.keys().map(key => {
			let res = files(key);
			res.slug = key.slice(2, -5);
			return res;
		});
		console.log('');
		await commit('SET_FULL_MENU', blogPosts);
	}
};

export const mutations = {
	SET_FULL_MENU(state, data) {
		state.fullMenu = data;
	}
};
