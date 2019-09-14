<template>
	<div>
		<navigation />
		<nuxt />
	</div>
</template>

<script>
import Navigation from "~/components/Navigation";

export default {
	components: {
		Navigation
	}
};
</script>

<style>
html,
body {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: 700;
}
</style>
