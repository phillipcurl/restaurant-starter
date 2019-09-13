<template>
	<div class="home-page">
		<div>
			<img :src="siteInfo.icon" :alt="`${siteInfo.name} icon`" />
			<h1>{{siteInfo.name}}</h1>
			<h2>{{siteInfo.description}}</h2>
			<div class="home-page__links">
				<a
					href="https://github.com/phillipcurl/nuxt-netlify-starter"
					target="_blank"
					rel="noopener noreferrer"
				>Project Documentation</a>
				<a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">Nuxt.js Documentation</a>
				<a
					href="https://www.netlify.com/docs/"
					target="_blank"
					rel="noopener noreferrer"
					class="button--grey"
				>Netlify Documentation</a>
				<a
					href="https://www.netlifycms.org/docs/intro/"
					target="_blank"
					rel="noopener noreferrer"
					class="button--grey"
				>Netlify CMS Documentation</a>
			</div>
			<h4>
				Built by
				<a href="https://phillipcurl.com" target="_blank" rel="noopener noreferrer">PC</a>
			</h4>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ params, app, payload, route, store }) {
		let info = await import("~/assets/content/setup/config.json");
		return {
			siteInfo: info
		};
	}
};
</script>

<style>
.home-page {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	text-align: center;
}
.home-page > div {
	padding: 1.5rem;
}
.home-page h1 {
	font-size: 4.5rem;
	margin: 2rem 0;
}
.home-page h2 {
	width: 100%;
	max-width: 35rem;
	margin: 0 auto;
	margin-bottom: 2rem;
}
.home-page img {
	max-width: 250px;
	width: 100%;
	margin: 0 auto;
}
.home-page__links {
	display: flex;
	flex-direction: column;
}
@media screen and (min-width: 768px) {
	.home-page__links {
		display: flex;
		flex-direction: row;
	}
}
.home-page__links a {
	text-align: left;
	text-decoration: none;
	padding: 0.5rem 1rem;
}
.home-page__links a:hover {
	text-decoration: underline;
}
.home-page h4 {
	margin: 2rem 0;
}
</style>
