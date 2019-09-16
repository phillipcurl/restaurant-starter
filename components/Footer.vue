<template>
	<footer
		class="w-full"
		:class="{'bg-gray-900': themeInfo.is_dark, 'bg-gray-100': !themeInfo.is_dark}"
	>
		<div class="w-full container mx-auto py-16 px-4">
			<section class="flex flex-wrap md:flex-no-wrap md:justify-between">
				<div class="flex-grow w-full">
					<div class="w-48 mx-auto md:mx-0">
						<img :src="siteInfo.icon" alt srcset />
					</div>
					<div class="mt-6">
						<a
							:href="`http://maps.google.com/maps?q=${encodedAddress}`"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p class="text-xl font-semibold font-feature">{{contactInfo.address}}</p>
							<p>{{contactInfo.city}}, {{contactInfo.state}} {{contactInfo.zip}}</p>
							<span
								class="inline-block bg-brand text-brand_contrast text-sm font-bold uppercase tracking-wide px-3 py-2 mt-3"
							>View Map</span>
						</a>
					</div>
				</div>
				<div class="flex-shrink-0">
					<iframe
						title="Make a reservation on OpenTable"
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
		},
		encodedAddress() {
			return encodeURI(
				`${this.contactInfo.address}, ${this.contactInfo.city}, ${this.contactInfo.state} ${this.contactInfo.zip}`
			);
		}
	}
};
</script>