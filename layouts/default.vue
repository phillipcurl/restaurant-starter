<template>
	<div :class="{'bg-gray-800' : themeInfo.is_dark }">
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
html,
body {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}

h1:not(.font-black),
h2:not(.font-black),
h3:not(.font-black),
h4:not(.font-black),
h5:not(.font-black),
h6:not(.font-black) {
	font-weight: 700;
}

.main-content {
	padding-top: 68px;
}

@media screen and (max-width: 1024px) {
	.container {
		width: 100%;
		max-width: 100%;
	}
}
</style>
