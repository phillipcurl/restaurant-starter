export const state = () => ({
	fullMenu: {
		categories: [
			{
				title: '',
				description: '',
				slug: '',
				menu_order: 0,
				items: []
			}
		]
	},
	categories: [],
	allItems: []
});

export const actions = {
	async fetchMenu({ commit, dispatch }) {
		await dispatch('fetchMenuCategories');
		await dispatch('fetchMenuItems');
		await dispatch('buildMenu');
	},
	async fetchMenuCategories({ commit }) {
		let files = await require.context(
			'~/assets/content/menu-categories/',
			false,
			/\.json$/
		);
		let categories = files
			.keys()
			.map(key => {
				let res = files(key);
				res.slug = key.slice(2, -5);
				return res;
			})
			.sort((a, b) => {
				if (a.menu_order < b.menu_order) return -1;
				if (a.menu_order > b.menu_order) return 1;
				return 0;
			});
		await commit('SET_MENU_CATEGORIES', categories);
	},
	async fetchMenuItems({ commit }) {
		let files = await require.context(
			'~/assets/content/menu-items/',
			false,
			/\.json$/
		);
		let menuItems = files.keys().map(key => {
			let res = files(key);
			res.slug = key.slice(2, -5);
			return res;
		});
		await commit('SET_MENU_ITEMS', menuItems);
	},
	async buildMenu({ commit, state }) {
		const fullMenu = {
			categories: state.categories.map(category => {
				return {
					...category,
					items: state.allItems.filter(
						item => item.menu_category === category.title
					)
				};
			})
		};
		await commit('SET_FULL_MENU', fullMenu);
	}
};

export const mutations = {
	SET_FULL_MENU(state, data) {
		state.fullMenu = data;
	},
	SET_MENU_CATEGORIES(state, data) {
		state.categories = data;
	},
	SET_MENU_ITEMS(state, data) {
		state.allItems = data;
	}
};
