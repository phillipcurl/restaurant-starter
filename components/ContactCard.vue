<template>
	<card-base title="Contact">
		<a
			:href="`http://maps.google.com/maps?q=${encodedAddress}`"
			target="_blank"
			rel="noopener noreferrer"
			class="text-center"
		>
			<p class="text-xl font-semibold font-feature">{{contactInfo.address}}</p>
			<p>{{contactInfo.city}}, {{contactInfo.state}} {{contactInfo.zip}}</p>
			<span
				class="inline-block bg-brand text-brand_contrast text-sm font-bold uppercase tracking-wide px-3 py-2 mt-3"
			>View Map</span>
		</a>
		<p v-if="contactInfo.notes && contactInfo.notes !== ''" class="italic">{{contactInfo.notes}}</p>
	</card-base>
</template>

<script>
import CardBase from "~/components/CardBase";

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
	},
	components: {
		CardBase
	}
};
</script>