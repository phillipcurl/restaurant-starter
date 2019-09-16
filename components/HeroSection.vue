<template>
	<div class="w-full h-full flex items-center justify-center px-3" :style="heroStyles">
		<div
			class="w-full max-w-2xl text-center p-3 border-8 home-page--hero__content"
			:class="{'border-near-black': themeInfo.theme === 'classic', 'border-transparent': themeInfo.theme === 'modern'}"
			:style="heroContentStyles"
		>
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		image: {
			type: String,
			default: "/images/uploads/bg.jpg"
		},
		height: {
			type: String,
			default: "85vh"
		}
	},
	computed: {
		siteInfo() {
			return this.$store.state.siteInfo;
		},
		themeInfo() {
			return this.$store.state.theme.info;
		},
		heroStyles() {
			return `min-height: ${this.height}; background: url(${this.image}) center center; background-size: cover;`;
		},
		heroContentStyles() {
			return this.themeInfo.is_dark
				? `background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));`
				: `background: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6));`;
		}
	}
};
</script>

<style>
.home-page--hero__content {
	/* background-image: url(~static/images/uploads/bg.jpg); */
}
</style>