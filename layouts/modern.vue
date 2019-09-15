<template>
	<div class="theme-modern">
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

.theme-modern h1,
.theme-modern h2,
.theme-modern h3,
.theme-modern h4,
.theme-modern h5,
.theme-modern h6 {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

.main-content {
	padding-top: 52px;
}

.theme-modern .font-feature {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}
</style>
