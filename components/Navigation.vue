<template>
	<header
		class="fixed top-0 left-0 right-0 w-full px-0 md:px-3 bg-white shadow z-50 site-navigation text-near-black"
		ref="header"
		:class="{'bg-white': !themeInfo.is_dark, 'bg-gray-900': themeInfo.is_dark}"
	>
		<div class="w-full container mx-auto flex items-center justify-between">
			<nav class="md:flex-grow inline-flex items-center">
				<nuxt-link
					to="/"
					exact
					class="py-2 px-3 text-2xl font-bold font-feature mr-5"
					aria-label="Home Page"
				>
					<img :src="siteInfo.icon" style="max-width: 100px;" alt srcset />
				</nuxt-link>
				<div class="hidden md:inline-flex items-center">
					<nuxt-link to="/menu" class="py-2 px-3 uppercase tracking-wider text-sm font-bold">Menu</nuxt-link>
					<!-- <nuxt-link to="/location" class="py-2 px-3 uppercase tracking-wider text-sm font-bold">Location</nuxt-link> -->
					<nuxt-link to="/about" class="py-2 px-3 uppercase tracking-wider text-sm font-bold">About</nuxt-link>
					<nuxt-link to="/contact" class="py-2 px-3 uppercase tracking-wider text-sm font-bold">Contact</nuxt-link>
				</div>
			</nav>
			<div class="flex-no-shrink inline-flex items-center">
				<a
					href="https://www.opentable.com/r/south-village-grille-reservations-columbus?restref=1041577&lang=en-US"
					target="_blank"
					rel="noopener noreferrer"
					class="hidden md:block bg-brand text-brand_contrast py-2 px-3 leading-none font-bold rounded mr-2"
				>Reserve Now</a>
				<a
					:href="`tel:${contactInfo.phone}`"
					class="inline-flex items-center py-2 px-3"
					:aria-label="`Call ${siteInfo.name}`"
				>
					<svg
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="w-5 h-5"
					>
						<path
							d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
						/>
					</svg>
					<span class="text-sm ml-2 leading-none font-semibold">{{contactInfo.phone}}</span>
				</a>
				<social-links class="hidden md:inline-flex" />
			</div>
			<button class="flex-no-shrink inline-flex md:hidden py-2 px-3" aria-label="Toggle Site Menu">
				<svg
					viewBox="0 0 24 24"
					width="24"
					height="24"
					stroke="currentColor"
					stroke-width="2"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="css-i6dzq1"
				>
					<line x1="3" y1="12" x2="21" y2="12" />
					<line x1="3" y1="6" x2="21" y2="6" />
					<line x1="3" y1="18" x2="21" y2="18" />
				</svg>
			</button>
		</div>
	</header>
</template>

<script>
import Headroom from "headroom.js";
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
	mounted() {
		// var myElement = document.querySelector("header");
		// construct an instance of Headroom, passing the element
		console.log(this.$refs);
		const headroom = new Headroom(this.$refs.header, {
			tolerance: {
				up: 5,
				down: 25
			}
		});
		headroom.init();
	},
	components: {
		SocialLinks
	}
};
</script>

<style>
.headroom {
	will-change: transform;
	transition: transform 200ms linear;
}
.headroom--pinned {
	transform: translateY(0%);
}
.headroom--unpinned {
	transform: translateY(-100%);
}
</style>