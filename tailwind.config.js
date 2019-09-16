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
				secondary: themeConfig.secondary_color,
				brand: 'var(--color-brand)',
				brand_contrast: 'var(--color-brand_contrast)',
				'brand-light': 'var(--color-brand-light)',
				'brand-light_contrast': 'var(--color-brand-light_contrast)',
				'brand-dark': 'var(--color-brand-dark)',
				'brand-dark_contrast': 'var(--color-brand-dark_contrast)'
			}
		}
	},
	variants: {},
	plugins: []
};
