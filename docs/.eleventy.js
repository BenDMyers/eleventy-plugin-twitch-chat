const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const twitchChat = require('eleventy-plugin-twitch-chat');

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(twitchChat);
}