const injectComfy = require('./src/inject-comfy');

module.exports = (eleventyConfig) => {
	eleventyConfig.addTransform('inject-comfy', injectComfy);
};