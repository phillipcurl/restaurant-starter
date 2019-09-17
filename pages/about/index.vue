<template>
	<div class="about-page">
		<hero-section height="55vh">
			<div>
				<small
					class="text-left text-xl leading-none font-black"
					:class="{'uppercase tracking-wide': themeInfo.theme === 'modern'}"
				>About</small>
				<divider />
				<h1
					class="text-5xl py-0 mt-2 leading-none break-word font-black"
					:class="{'uppercase tracking-wide': themeInfo.theme === 'modern'}"
				>{{siteInfo.name}}</h1>
			</div>
		</hero-section>
		<div class="w-full container mx-auto flex flex-wrap md:flex-no-wrap px-3 py-8">
			<!-- <h1 class="text-6xl font-black">About {{siteInfo.name}}</h1> -->
			<div class="w-full md:w-2/3 px-4 py-4">
				<section class="w-full">
					<md-content :content="aboutInfo.body" />
				</section>
			</div>
			<div class="w-full md:w-1/3">
				<location-card class="mb-12" />
				<hours-card />
			</div>
		</div>
	</div>
</template>

<script>
import * as themeInfo from "~/assets/content/config/theme.json";
import HeroSection from "~/components/HeroSection";
import MdContent from "~/components/MdContent";
import HoursCard from "~/components/HoursCard";
import LocationCard from "~/components/LocationCard";
import Divider from "~/components/Divider";

export default {
	layout: themeInfo.theme,
	computed: {
		siteInfo() {
			return this.$store.state.siteInfo;
		},
		aboutInfo() {
			return this.$store.state.about.info;
		},
		themeInfo() {
			return this.$store.state.theme.info;
		}
	},
	components: {
		HeroSection,
		MdContent,
		HoursCard,
		LocationCard,
		Divider
	}
};
</script>