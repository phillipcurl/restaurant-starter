<template>
	<footer
		class="w-full"
		:class="{'bg-gray-900': themeInfo.is_dark, 'bg-gray-100': !themeInfo.is_dark}"
	>
		<div class="w-full container mx-auto py-16 px-4">
			<section class="flex flex-wrap md:flex-no-wrap md:justify-between">
				<div class="flex-grow w-full">
					<div class="w-full max-w-xs">
						<img :src="siteInfo.icon" alt srcset />
					</div>
				</div>
				<div class="flex-shrink-0">
					<iframe
						src="https://www.opentable.com/widget/reservation/canvas?rid=1041577&amp;type=standard&amp;theme=standard&amp;overlay=false&amp;domain=com&amp;lang=en-US&amp;r3abvariant=true&amp;r3uid=aDsEdPtsZg&amp;newtab=false&amp;disablega=false"
						width="224"
						height="301"
						frameborder="0"
						scrolling="no"
						loading="lazy"
					></iframe>
				</div>
			</section>
			<section>NEXT ROW</section>
		</div>
	</footer>
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
		themeInfo() {
			return this.$store.state.theme.info;
		}
	}
};
</script>