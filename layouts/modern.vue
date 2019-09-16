<template>
	<div class="theme-modern text-near-black" :class="{'bg-gray-800' : themeInfo.is_dark }">
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
.theme-modern h1,
.theme-modern h2,
.theme-modern h3,
.theme-modern h4,
.theme-modern h5,
.theme-modern h6 {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

.theme-modern .font-feature {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}
</style>
