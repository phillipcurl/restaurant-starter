/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const themeConfig = require('./assets/content/config/theme.json');

module.exports = {
	theme: {
		extend: {
			colors: {
				primary: themeConfig.primary_color,
				secondary: themeConfig.secondary_color
			}
		}
	},
	variants: {},
	plugins: []
};
