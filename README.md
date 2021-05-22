# eleventy-plugin-twitch-chat

`eleventy-plugin-twitch-chat` is an [Eleventy](https://11ty.dev) plugin that lets you insert live, real-time, heavily styleable Twitch chats into your Eleventy sites.

To use `eleventy-plugin-twitch-chat`, navigate to your Eleventy project in your terminal and install the dependency:

```bash
npm install eleventy-plugin-twitch-chat
```

Then, in your `.eleventy.js` file, import the plugin and add to your Eleventy configuration.

```js
const twitchChat = require('eleventy-plugin-twitch-chat');

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(twitchChat);
}
```

Finally, add a chat to your page! Go to a template or layout file, and use the `twitchChat` shortcode, passing it a string with the channel name(s) you want to watch. For instance, to inject a chat for the [SomeAnticsDev](https://twitch.tv/SomeAnticsDev) Twitch channel, you would add:

```liquid
{% twitchChat 'SomeAnticsDev' %}
```