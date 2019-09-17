<template>
	<card-base title="Hours">
		<hours-table />
	</card-base>
</template>

<script>
import CardBase from "~/components/CardBase";
import HoursTable from "~/components/HoursTable";

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
		CardBase,
		HoursTable
	}
};
</script>