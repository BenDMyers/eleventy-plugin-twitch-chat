---
title: Style Recipes
layout: page.html
---

{% twitchChat '5t3phDev' %}

`eleventy-plugin-twitch-chat` makes heavy use of [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) as style hooks. This affords a *lot* of flexibility while remaining very succinct.


```html
<ul data-twitch-chat="5t3phDev">
	<li
		data-twitch-message="f39a53b3-5bbb-4b28-940f-f92b61df0d33"
		data-twitch-sender="BenDMyers"
		data-twitch-sender-roles="founder subscriber"
		data-twitch-sender-color="#FF0000"
		style="--twitch-sender-color: #FF0000"
	>
		<div class="twitch-chat-sender">
			BenDMyers
		</div>
		<div class="twitch-chat-message">
			It's so good
			<img
				alt="x5t3phStarburst"
				data-twitch-emote="x5t3phStarburst"
				src="http://static-cdn.jtvnw.net/emoticons/v1/emotesv2_158f6b36fc8a440988b09eed270e5abb/3.0"
			/>
		</div>
	</li>
</ul>
```

The injected chatbox itself is a `<ul>`, and each message is an `<li>`.

## Style the Chatbox

### Style all chatboxes:

The chatbox `<ul>` has a `data-twitch-chat` attribute. You can use this to style the chatbox itself. 

```css
[data-twitch-chat] {
	/* Styles */
}
```

The `[data-twitch-chat]` selector is also helpful for scoping down child elements' styles, and for increasing specificity.

### Style a chatbox for a specific streamer:

Especially in cases where you may want to show multiple live chatboxes, each one for a different streamer, you may want to style each streamer's chatbox separately.

The `data-twitch-chat` attribute is set to the streamer's channel name (case sensitive), meaning you can style each streamer's chatbox separately:

```css
[data-twitch-chat="SomeAnticsDev"] {
	/* Styles */
}
```

## Style a Message Block

Each message gets its own `<li>` inside the chatbox's `<ul>`. You *can* style each message block with `[data-twitch-chat] > li`. However, to make this easier, each `<li>` is given a `data-twitch-message` attribute, with the value set to Twitch's internal ID for that message. You can use this `[data-twitch-message]` as a style hook for all messages in the chatbox:

```css
[data-twitch-message] {
	/* Styles */
}
```

## Style the Message Sender

### Style all senders:

```css
.twitch-chat-sender {
	/* Styles */
}
```

### Style a specific sender:

```css
[data-twitch-sender="BenDMyers"] .twitch-chat-sender {
	/* Styles */
}
```

### Style a sender by their role:

```css
[data-twitch-sender-roles*="subscriber"] {
	/* Styles */
}
```

### Apply a sender's chosen color:

```css
.twitch-chat-sender {
	color: var(--twitch-sender-color);
}
```

## Style the Message Contents

```css
.twitch-chat-message {
	/* Styles */
}
```

## Style Emotes

### Style all emotes:

```css
[data-twitch-emote] {
	/* Styles */
}
```

### Style a specific emote:

```css
[data-twitch-emote="jlengsBoop"] {
	/* Styles */
}
```

### Style all emotes by a specific streamer:

```css
[data-twitch-emote^="jlengs"] {
	/* Styles */
}
```