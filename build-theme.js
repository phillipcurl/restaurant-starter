const Color = require('color');
const cssGen = require('css-generator');
const fs = require('fs');

const options = {
	indentation: '  ' // 2 spaces
};
const css = cssGen.create(options);

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

const primaryColor = Color('tomato');
const primaryColorLight = getValidatedColor({
	colorToChange: primaryColor,
	mixingColor: Color('white'),
	colorToValidate: Color('#111111'),
	mixingAmount: 0.5
});
const primaryColorDark = getValidatedColor({
	colorToChange: primaryColor,
	mixingColor: Color('#111111'),
	mixingAmount: 0.2
});

css.addRule(':root', {
	'--color-brand': primaryColor.string(),
	'--color-brand_contrast': getContrastingColor(primaryColor),
	'--color-brand-light': primaryColorLight.string(),
	'--color-brand-light_contrast': getContrastingColor(primaryColorLight),
	'--color-brand-dark': primaryColorDark.string(),
	'--color-brand-dark_contrast': getContrastingColor(primaryColorDark)
});

console.log('primary color: ', primaryColor.string());
console.log('light color: ', primaryColorLight.string());
console.log('dark color: ', primaryColorDark.string());

console.log('CSS: ', css.getOutput());

var stream = fs.createWriteStream('./assets/css/theme.css');
stream.once('open', function(fd) {
	stream.write(css.getOutput());
	stream.end();
});
