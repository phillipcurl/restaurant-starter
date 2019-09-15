<template>
	<div class="theme-classic">
		<navigation />
		<main class="main-content">
			<nuxt />
		</main>
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
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap");

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

h1:not(.font-black),
h2:not(.font-black),
h3:not(.font-black),
h4:not(.font-black),
h5:not(.font-black),
h6:not(.font-black) {
	font-weight: 700;
}

.theme-classic h1,
.theme-classic h2,
.theme-classic h3,
.theme-classic h4,
.theme-classic h5,
.theme-classic h6 {
	font-family: "Playfair Display", serif;
}

.main-content {
	padding-top: 52px;
}

.theme-classic .font-feature {
	font-family: "Playfair Display", serif;
}
</style>
