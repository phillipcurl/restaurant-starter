<template>
	<div class="theme-classic text-near-black" :class="{'bg-gray-800' : themeInfo.is_dark }">
		<navigation />
		<main class="main-content">
			<nuxt />
		</main>
		<site-footer />
	</div>
</template>

<script>
import Navigation from "~/components/Navigation";
import SiteFooter from "~/components/Footer";

export default {
	head() {
		return {
			link: [
				{
					href:
						"https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap",
					rel: "stylesheet"
				}
			]
		};
	},
	computed: {
		siteInfo() {
			return this.$store.state.siteInfo;
		},
		contactInfo() {
			return this.$store.state.contact.info;
		},
		themeInfo() {
			return this.$store.state.theme.info;
		}
	},
	components: {
		Navigation,
		SiteFooter
	}
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap"); */

.theme-classic h1,
.theme-classic h2,
.theme-classic h3,
.theme-classic h4,
.theme-classic h5,
.theme-classic h6 {
	font-family: "Playfair Display", serif;
}

.theme-classic .font-feature {
	font-family: "Playfair Display", serif;
}
</style>
