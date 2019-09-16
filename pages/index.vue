<template>
	<div class="home-page">
		<hero-section>
			<h1
				class="text-4xl md:text-5xl font-black py-0 mb-0 lh-none break-word"
				:class="{'uppercase tracking-widest': themeInfo.theme === 'modern'}"
			>{{siteInfo.name}}</h1>
			<div v-if="themeInfo.theme === 'modern'" class="w-32 mx-auto border-t-8 border-near-black"></div>
			<p
				class="w-full max-w-md mx-auto text-2xl font-bold py-4 mb-4 lh-none font-feature"
			>{{siteInfo.description}}</p>
			<div class="mb-6">
				<nuxt-link
					to="/menu"
					class="bg-brand text-brand_contrast text-lg font-bold uppercase tracking-wider p-3"
				>View our Menu</nuxt-link>
			</div>
		</hero-section>
		<!-- <div class="w-full container mx-auto pt-16 pb-8 px-4">
			<div
				class="bg-gray-100 w-full flex items-center justify-center py-6"
				style="padding-bottom: -75px;"
			>
				<script
					type="text/javascript"
					src="//www.opentable.com/widget/reservation/loader?rid=1041577&type=standard&theme=wide&iframe=true&overlay=false&domain=com&lang=en-US"
				></script>
			</div>
		</div>-->
		<div class="w-full container mx-auto flex md:flex-row-reverse flex-wrap items-stretch py-8">
			<div class="w-full md:w-1/2 mb-6 md:mb-0">
				<location-card class="h-full" />
			</div>
			<div class="w-full md:w-1/2">
				<hours-card class="h-full" />
			</div>
		</div>
		<div class="w-full container mx-auto px-4 py-8">
			<div
				class="flex lg:flex-row-reverse flex-wrap items-center"
				:class="{'bg-gray-900': themeInfo.is_dark, 'bg-gray-100': !themeInfo.is_dark}"
			>
				<div
					class="w-full lg:w-1/2 bg-cover"
					:style="`min-height: 400px; background-image: url(/images/uploads/bg.jpg)`"
				></div>
				<div class="w-full lg:w-1/2 px-4 sm:px-6 md:px-8 py-10 xl:py-16">
					<div class="w-full max-w-lg mx-auto">
						<h2 class="text-3xl md:text-4xl">About {{siteInfo.name}}</h2>
						<p
							class="text-lg py-4"
						>With its rustic interior, pops of bright color and welcoming atmosphere, La Marcha is a tapas bar in the heart of Berkeley that encapsulates the vibrant culinary culture of Spain. Visitors will feel as though they have strolled right off the streets of Spain and into an authentic neighborhood tapas place.</p>
						<nuxt-link
							to="/about"
							class="inline-flex items-center"
							:aria-label="`Learn more about ${siteInfo.name}`"
							:title="`Learn more about ${siteInfo.name}`"
						>
							<span
								class="font-bold uppercase tracking-wider text-sm py-1 mr-3 border-b-2 border-brand"
							>Learn more</span>
							<svg
								viewBox="0 0 24 24"
								width="20"
								height="20"
								stroke="currentColor"
								stroke-width="2"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<polyline points="9 18 15 12 9 6" />
							</svg>
						</nuxt-link>
					</div>
				</div>
			</div>
			<ul class="pt-4 auto-sized-grid">
				<li v-for="i in 8" :key="i">
					<img
						:src="`https://picsum.photos/600/400?random=${i}`"
						:alt="`Sample image ${i} from Unsplash.com`"
						loading="lazy"
					/>
				</li>
			</ul>
		</div>

		<div class="p-12">
			<button @click="showData = !showData">Toggle Data</button>
			<div v-if="showData" class="mt-12">
				<!-- <img :src="siteInfo.icon" :alt="`${siteInfo.name} icon`" /> -->
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
				<div style="text-align: left;">
					<pre>{{menuInfo}}</pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import * as themeInfo from "~/assets/content/config/theme.json";
import HeroSection from "~/components/HeroSection";
import HoursCard from "~/components/HoursCard";
import LocationCard from "~/components/LocationCard";

export default {
	layout: themeInfo.theme,
	data() {
		return {
			showData: false
		};
	},
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
		},
		menuInfo() {
			return this.$store.state.menu.fullMenu;
		}
	},
	components: {
		HeroSection,
		HoursCard,
		LocationCard
	}
};
</script>

<style>
/* .hours-operation dt {
	float: left;
}
.hours-operation dd {
	float: right;
}
.hours-operation dd:after {
	content: "\A";
	white-space: pre;
} */
.auto-sized-grid {
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
@media screen and (min-width: 768px) {
	.auto-sized-grid {
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
}
</style>
