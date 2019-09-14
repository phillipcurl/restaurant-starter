<template>
	<div class="home-page">
		<div class="w-full h-full flex items-center justify-center home-page--hero">
			<div class="text-center">
				<h1 class="text-6xl">{{siteInfo.name}}</h1>
				<p class="text-2xl font-bold my-4">{{siteInfo.description}}</p>
				<div>
					<nuxt-link
						to="/menu"
						class="bg-secondary text-primary font-bold uppercase tracking-wider py-2 px-3"
					>View our Menu</nuxt-link>
				</div>
			</div>
		</div>
		<div>
			<!-- <img :src="siteInfo.icon" :alt="`${siteInfo.name} icon`" /> -->
			<h1>{{siteInfo.name}}</h1>
			<h2>{{siteInfo.description}}</h2>

			<div style="text-align: left;">
				<pre>{{siteInfo}}</pre>
			</div>
			<div style="text-align: left;">
				<pre>{{contactInfo}}</pre>
			</div>
			<div style="text-align: left;">
				<pre>{{socialInfo}}</pre>
			</div>
			<div style="text-align: left;">
				<pre>{{themeInfo}}</pre>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		siteInfo() {
			return this.$store.state.siteInfo;
		},
		contactInfo() {
			return this.$store.state.contact.info;
		},
		socialInfo() {
			return this.$store.state.social.info;
		},
		themeInfo() {
			return this.$store.state.theme.info;
		}
	}
};
</script>

<style>
.home-page--hero {
	min-height: 85vh;
	background-image: url(~static/images/uploads/bg.jpg);
	background-size: cover;
}
</style>
