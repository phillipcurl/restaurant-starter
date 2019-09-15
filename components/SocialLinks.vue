<template>
	<ul class="inline-flex items-center">
		<li v-if="socialInfo.fb_url && socialInfo.fb_url !== ''">
			<a
				:href="socialInfo.fb_url"
				target="_blank"
				rel="noopener noreferrer"
				class="block p-2"
				:aria-label="`${siteInfo.name} Facebook page`"
			>
				<svg
					viewBox="0 0 24 24"
					class="w-4 h-4"
					stroke="currentColor"
					stroke-width="2"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
				</svg>
			</a>
		</li>
		<li v-if="socialInfo.twitter_url && socialInfo.twitter_url !== ''">
			<a
				:href="socialInfo.twitter_url"
				target="_blank"
				rel="noopener noreferrer"
				:aria-label="`${siteInfo.name} Twitter page`"
				class="block p-2"
			>
				<svg
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-4 h-4"
				>
					<path
						d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
					/>
				</svg>
			</a>
		</li>
		<li v-if="socialInfo.instagram_url && socialInfo.instagram_url !== ''">
			<a
				:href="socialInfo.instagram_url"
				target="_blank"
				rel="noopener noreferrer"
				:aria-label="`${siteInfo.name} Instagram page`"
				class="block p-2"
			>
				<svg
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-4 h-4"
				>
					<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
					<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
					<line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
				</svg>
			</a>
		</li>
		<!-- <li v-if="socialInfo.yelp_url && socialInfo.yelp_url !== ''">
			<a :href="socialInfo.yelp_url" target="_blank" rel="noopener noreferrer" class="p-2">Yelp</a>
		</li>-->
	</ul>
</template>

<script>
export default {
	computed: {
		siteInfo() {
			return this.$store.state.siteInfo;
		},
		socialInfo() {
			return this.$store.state.social.info;
		}
	}
};
</script>