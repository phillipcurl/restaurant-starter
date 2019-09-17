<template>
	<section class="flex flex-col" :class="cardClass">
		<header v-if="title && title !== ''" class="flex-shrink-0 px-4 pt-3">
			<h2 class="text-3xl lg:text-4xl font-black text-center">{{title}}</h2>
			<divider />
		</header>
		<div class="flex-grow flex items-center justify-center p-4 md:p-5">
			<slot />
		</div>
	</section>
</template>

<script>
import Divider from "~/components/Divider";

export default {
	props: {
		title: {
			type: String
		}
	},
	computed: {
		siteInfo() {
			return this.$store.state.siteInfo;
		},
		themeInfo() {
			return this.$store.state.theme.info;
		},
		cardClass() {
			if (this.themeInfo.theme === "classic") {
				return `border-near-black border-2`;
			} else if (this.themeInfo.theme === "modern") {
				if (this.themeInfo.is_dark) {
					return "bg-gray-900";
				} else {
					return "bg-gray-100";
				}
			} else {
				return "";
			}
		}
	},
	components: {
		Divider
	}
};
</script>