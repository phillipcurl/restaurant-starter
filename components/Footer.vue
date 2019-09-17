<template>
	<footer
		class="w-full mt-8"
		:class="{'bg-gray-900': themeInfo.is_dark, 'bg-gray-100': !themeInfo.is_dark}"
	>
		<div class="w-full container mx-auto py-12">
			<section class="flex flex-wrap md:flex-no-wrap md:justify-between">
				<div class="w-full md:w-1/2 lg:w-1/3 p-4">
					<div class="w-48 mx-auto md:mx-0">
						<img :src="siteInfo.icon" alt srcset />
					</div>
					<div class="my-6">
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
					<a
						:href="`tel:${contactInfo.phone}`"
						class="bg-brand text-brand_contrast inline-flex items-center py-2 px-3 my-2"
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
						<span
							class="leading-none ml-2 text-sm font-bold uppercase tracking-wide"
						>{{contactInfo.phone}}</span>
					</a>
					<div class="mt-4">
						<social-links class="inline-flex" />
					</div>
				</div>
				<div class="w-full md:w-1/2 lg:w-1/3 p-4">
					<h3 class="font-black text-2xl">Our Hours</h3>
					<hours-table />
					<div class="mt-4">
						<open-table-button />
					</div>
				</div>
				<form class="w-full md:w-1/2 lg:w-1/3 p-4">
					<h3 class="font-black text-2xl mb-3">Contact Us</h3>
					<div class="mb-3">
						<label class="block text-near-black text-sm font-bold mb-2" for="name">Name</label>
						<input
							class="appearance-none rounded w-full py-2 px-3 text-near-black bg-transparent border border-near-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="name"
							type="text"
							placeholder="Name"
						/>
					</div>
					<div class="mb-3">
						<label class="block text-near-black text-sm font-bold mb-2" for="email">Email</label>
						<input
							class="appearance-none rounded w-full py-2 px-3 text-near-black bg-transparent border border-near-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							placeholder="Email"
							required
						/>
					</div>
					<div class="mb-3">
						<label class="block text-near-black text-sm font-bold mb-2" for="message">Message</label>
						<textarea
							class="appearance-none rounded w-full py-2 px-3 text-near-black bg-transparent border border-near-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
							name="message"
							id="message"
						></textarea>
					</div>
					<div class="flex items-center justify-between">
						<button
							class="bg-brand hover:bg-brand-dark text-brand_contrast font-bold uppercase tracking-wide py-2 px-4 focus:outline-none focus:shadow-outline"
							type="submit"
						>Send</button>
					</div>
				</form>
				<!-- <div class="flex-shrink-0 w-full md:w-auto">
					<iframe
						title="Make a reservation on OpenTable"
						src="https://www.opentable.com/widget/reservation/canvas?rid=1041577&amp;type=standard&amp;theme=standard&amp;overlay=false&amp;domain=com&amp;lang=en-US&amp;r3abvariant=true&amp;r3uid=aDsEdPtsZg&amp;newtab=false&amp;disablega=false"
						width="224"
						height="301"
						frameborder="0"
						scrolling="no"
						loading="lazy"
					></iframe>
				</div>-->
			</section>
			<!-- <section>NEXT ROW</section> -->
		</div>
	</footer>
</template>

<script>
import HoursTable from "~/components/HoursTable";
import OpenTableButton from "~/components/OpenTableButton";
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
		},
		encodedAddress() {
			return encodeURI(
				`${this.contactInfo.address}, ${this.contactInfo.city}, ${this.contactInfo.state} ${this.contactInfo.zip}`
			);
		}
	},
	components: {
		HoursTable,
		OpenTableButton,
		SocialLinks
	}
};
</script>