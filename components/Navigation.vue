<template>
	<header class="fixed top-0 right-0 left-0 w-full px-3 text-white">
		<div class="w-full container mx-auto flex items-center justify-between">
			<nav class="flex-grow inline-flex items-center">
				<nuxt-link to="/" exact class="py-2 px-3 text-2xl font-bold mr-5">{{siteInfo.name}}</nuxt-link>
				<nuxt-link to="/menu" class="py-2 px-3 uppercase tracking-wider text-sm font-bold">Menu</nuxt-link>
				<nuxt-link to="/menu" class="py-2 px-3 uppercase tracking-wider text-sm font-bold">Location</nuxt-link>
				<nuxt-link to="/menu" class="py-2 px-3 uppercase tracking-wider text-sm font-bold">About</nuxt-link>
				<nuxt-link to="/menu" class="py-2 px-3 uppercase tracking-wider text-sm font-bold">Contact</nuxt-link>
			</nav>
			<div class="flex-no-shrink">
				<social-links />
			</div>
		</div>
	</header>
</template>

<script>
import SocialLinks from "~/components/SocialLinks";

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
		SocialLinks
	}
};
</script>