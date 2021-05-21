const injectComfy = require('./src/inject-comfy');
const addTwitchChat = require('./src/twitch-chat-shortcode');

module.exports = (eleventyConfig) => {
	eleventyConfig.addTransform('inject-comfy', injectComfy);
	eleventyConfig.addShortcode('twitchChat', addTwitchChat);
};