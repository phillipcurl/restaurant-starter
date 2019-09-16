<template>
	<div class="w-full max-w-5xl mx-auto px-6 py-8 menu-page">
		<h1
			class="text-4xl md:text-5xl lg:text-6xl font-black text-center"
			:class="{'uppercase tracking-widest': themeInfo.theme === 'modern'}"
		>Menu</h1>
		<div v-if="themeInfo.theme === 'classic'" class="w-48 mx-auto">
			<svg class="w-full" viewBox="0 0 81 8" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M80 0.999998C80 0.999998 78.8 0.599997 78.5 2.4C78.4 2.8 78.4 3.5 78 4H2.29999C1.59999 4.1 0.799987 4.5 0.299987 5.4C0.0999867 5.9 -0.100011 7.2 0.899989 7.5C0.899989 7.5 2.09999 7.9 2.39999 6.1C2.49999 5.7 2.49999 5 2.79999 4.6H78C78.8 4.6 80 4.4 80.6 3.1C80.9 2.6 81.1 1.2 80 0.999998Z"
					fill="currentColor"
				/>
			</svg>
		</div>
		<section v-for="category in menu.categories" :key="category.title" class="py-12">
			<div
				class="w-full max-w-lg mx-auto text-center"
				:class="{'mb-8': themeInfo.theme === 'modern', 'mb-6': themeInfo.theme === 'classic'}"
			>
				<h2
					class="text-2xl md:text-3xl font-black tracking-wide"
					:class="{'uppercase tracking-wider': themeInfo.theme === 'modern'}"
				>{{ category.title }}</h2>
				<p v-if="category.desccription && category.description !== ''">{{category.description}}</p>
				<div v-if="themeInfo.theme === 'modern'" class="w-32 mx-auto border-t-4 border-brand mt-6"></div>
				<div v-if="themeInfo.theme === 'classic'" class="w-6 h-6 mx-auto mt-4">
					<svg class="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 214.8 612 362.4">
						<g>
							<g>
								<path
									fill="#CCCCCC"
									d="M0,416.8c0,0,75.3-79.2,186.2-51.5c0,0,65.4,21.8,27.7,91.1c0,0-35.7,57.4-101,23.8    C112.9,480.2,21.8,408.9,0,416.8z"
								/>
								<path
									fill="#CCCCCC"
									d="M612,349.5c0,0-112.9-47.5-233.7,17.8c0,0-71.3,43.6-5.9,99c0,0,59.4,41.6,126.8-13.9    C497.1,450.5,584.3,351.4,612,349.5z"
								/>
								<circle fill="#CCCCCC" cx="299.1" cy="523.7" r="53.5" />
							</g>
							<path
								fill="#CCCCCC"
								d="M283.2,214.8c0,0-105,158.4-5.9,200c0,0,21.8,11.9,51.5-27.7C328.8,387.1,354.5,347.5,283.2,214.8z"
							/>
						</g>
					</svg>
				</div>
			</div>
			<div class="flex flex-wrap" style="margin: 0 -1rem;">
				<menu-item v-for="item in category.items" :key="item.slug" :item="item" />
			</div>
		</section>
	</div>
</template>

<script>
import * as themeInfo from "~/assets/content/config/theme.json";
import MenuItem from "~/components/MenuItem";

export default {
	layout: themeInfo.theme,
	data() {
		return {
			sections: [
				{
					name: "Breakfast"
				},
				{
					name: "Lunch"
				},
				{
					name: "Dinner"
				}
			]
		};
	},
	computed: {
		siteInfo() {
			return this.$store.state.siteInfo;
		},
		themeInfo() {
			return this.$store.state.theme.info;
		},
		menu() {
			return this.$store.state.menu.fullMenu;
		}
	},
	components: {
		MenuItem
	}
};
</script>

<style>
@media print {
	.site-navigation {
		display: none;
	}
}
</style>