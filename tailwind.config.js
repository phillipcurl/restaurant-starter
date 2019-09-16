/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const Color = require('color');
const themeConfig = require('./assets/content/config/theme.json');

const NEAR_BLACK = '#111111';

function getContrastingColor(colorObj) {
	const constrastingColor = colorObj.isLight()
		? Color('#111111')
		: Color('white');
	return constrastingColor.string();
}

function getValidatedColor({
	colorToChange,
	colorToValidate = Color('white'),
	minimumContrastRatio = 5,
	mixingColor,
	mixingAmount,
	tries = 0,
	maxTries = 8
}) {
	const newColor = colorToChange.mix(mixingColor, mixingAmount);
	if (
		newColor.contrast(colorToValidate) < minimumContrastRatio &&
		tries < maxTries
	) {
		return getValidatedColor({
			colorToChange: newColor,
			mixingColor,
			mixingAmount: 0.1,
			tries: ++tries
		});
	}
	return newColor;
}

const brandColor = Color(themeConfig.brand_color);
const brandColorLight = getValidatedColor({
	colorToChange: brandColor,
	mixingColor: Color('white'),
	colorToValidate: Color('#111111'),
	mixingAmount: 0.5
});
const brandColorDark = getValidatedColor({
	colorToChange: brandColor,
	mixingColor: Color('#111111'),
	mixingAmount: 0.2
});

module.exports = {
	theme: {
		extend: {
			colors: {
				brand: brandColor.string(),
				brand_contrast: getContrastingColor(brandColor),
				'brand-light': brandColorLight.string(),
				'brand-light_contrast': getContrastingColor(brandColorLight),
				'brand-dark': brandColorDark.string(),
				'brand-dark_contrast': getContrastingColor(brandColorDark),
				'near-black': themeConfig.is_dark ? '#f7fafc' : '#111111'
			}
		}
	},
	variants: {},
	plugins: []
};
