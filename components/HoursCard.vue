<template>
	<section class="flex flex-col" :class="cardClass">
		<h2 class="text-3xl lg:text-4xl font-black text-center">Hours</h2>
		<div v-if="themeInfo.theme === 'modern'" class="w-24 mx-auto border-t-4 border-brand mt-3"></div>
		<div v-if="themeInfo.theme === 'classic'" class="w-32 mx-auto">
			<svg class="w-full" viewBox="0 0 81 8" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M80 0.999998C80 0.999998 78.8 0.599997 78.5 2.4C78.4 2.8 78.4 3.5 78 4H2.29999C1.59999 4.1 0.799987 4.5 0.299987 5.4C0.0999867 5.9 -0.100011 7.2 0.899989 7.5C0.899989 7.5 2.09999 7.9 2.39999 6.1C2.49999 5.7 2.49999 5 2.79999 4.6H78C78.8 4.6 80 4.4 80.6 3.1C80.9 2.6 81.1 1.2 80 0.999998Z"
					fill="currentColor"
				/>
			</svg>
		</div>
		<dl class="flex flex-wrap items-center pt-5 hours-operation">
			<!-- <dt class="w-1/2 uppercase font-semibold tracking-wider text-sm py-1 px-2 text-right">Sunday</dt>
			<dd class="w-1/2 py-1 px-2">9:00 AM - 11:00 PM</dd>-->
			<dt class="w-1/2 uppercase font-semibold tracking-wider text-sm py-1">Monday</dt>
			<dd class="w-1/2 py-1">9:00 AM - 11:00 PM</dd>
			<dt class="w-1/2 uppercase font-semibold tracking-wider text-sm py-1">Tuesday</dt>
			<dd class="w-1/2 py-1">9:00 AM - 11:00 PM</dd>
			<dt class="w-1/2 uppercase font-semibold tracking-wider text-sm py-1">Wednesday</dt>
			<dd class="w-1/2 py-1">9:00 AM - 11:00 PM</dd>
			<dt class="w-1/2 uppercase font-semibold tracking-wider text-sm py-1">Thursday</dt>
			<dd class="w-1/2 py-1">9:00 AM - 11:00 PM</dd>
			<dt class="w-1/2 uppercase font-semibold tracking-wider text-sm py-1">Friday</dt>
			<dd class="w-1/2 py-1">9:00 AM - 11:00 PM</dd>
			<dt class="w-1/2 uppercase font-semibold tracking-wider text-sm py-1">Saturday</dt>
			<dd class="w-1/2 py-1">9:00 AM - 11:00 PM</dd>
		</dl>
	</section>
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
		},
		cardClass() {
			if (this.themeInfo.theme === "classic") {
				return `border-near-black border-2 p-10 m-4`;
			} else if (this.themeInfo.theme === "modern") {
				let baseClass = `p-10 m-4`;
				if (this.themeInfo.is_dark) {
					return baseClass + " bg-gray-900";
				} else {
					return baseClass + " bg-gray-100";
				}
				return ``;
			} else {
				return "";
			}
		}
	}
};
</script>