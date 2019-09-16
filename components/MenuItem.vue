<template>
	<article class="w-full md:w-1/2 p-4 mb-2">
		<header class="w-full flex items-end">
			<h3
				class="text-xl font-semibold leading-tight pr-3"
				:class="{'uppercase tracking-wide': themeInfo.theme === 'modern'}"
			>{{item.title}}</h3>
			<div
				class="flex-grow mb-1 md:border-b-2"
				:class="{'border-dotted': themeInfo.theme === 'modern', 'border-solid': themeInfo.theme === 'classic'}"
			></div>
			<span class="flex-shrink-0 block pl-3 pb-1 leading-none">{{item.price | price}}</span>
		</header>
		<div class="mt-2">
			<p class="lh-copy">{{item.description}}</p>
			<p v-if="item.notes && item.notes !== ''" class="italic text-sm">* {{item.notes}}</p>
		</div>
	</article>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true
		}
	},
	computed: {
		siteInfo() {
			return this.$store.state.siteInfo;
		},
		themeInfo() {
			return this.$store.state.theme.info;
		},
		menu() {
			return this.$store.state.menu.fullMenu;
		}
	},
	filters: {
		// Filter definitions
		price(value) {
			return `$${value.toFixed(2)}`;
		}
	}
};
</script>