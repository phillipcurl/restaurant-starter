export const state = () => ({
	siteInfo: {}
});

export const actions = {
	async nuxtServerInit({ dispatch }) {
		try {
			await dispatch('fetchSiteInfo');
			await dispatch('contact/fetchContactInfo');
			await dispatch('social/fetchSocialInfo');
			await dispatch('theme/fetchThemeInfo');
			await dispatch('about/fetchAboutInfo');
			await dispatch('menu/fetchMenu');
		} catch (e) {
			console.log(e);
		}
	},
	fetchSiteInfo({ state, commit }) {
		try {
			const info = require('~/assets/content/config/info.json');
			commit('SET_SITE_INFO', info);
		} catch (e) {
			commit('SET_SITE_INFO', {});
		}
	}
	// async fetchPosts({ commit }) {
	// 	let files = await require.context(
	// 		'~/assets/content/blog/',
	// 		false,
	// 		/\.json$/
	// 	);
	// 	let blogPosts = files.keys().map(key => {
	// 		let res = files(key);
	// 		res.slug = key.slice(2, -5);
	// 		return res;
	// 	});
	// 	await commit('setBlogPosts', blogPosts);
	// }
};

export const mutations = {
	SET_SITE_INFO(state, data) {
		state.siteInfo = data;
	}
};
