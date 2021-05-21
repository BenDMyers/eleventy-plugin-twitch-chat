// const ComfyJS = {
// 	version() {return 'Version'},
// 	onError(error) {},
// 	onCommand(user, command, message, flags, extra) {},
// 	onChat(user, message, flags, self, extra) {},
// 	onWhisper(user, message, flags, self, extra) {},
// 	/**
// 	 * Handles chat events when a message is deleted
// 	 * @param {String} id - unique identifier for deleted message
// 	 * @param {Object} extra - metadata for deletion event
// 	 * @param {String} extra.id - unique identifier for deleted message
// 	 * @param {String} extra.roomId - 
// 	 */
// 	onMessageDeleted(id, extra) {},
// 	onJoin(user, self, extra) {},
// 	onPart(user, self, extra) {},
// 	onHosted(user, viewers, autohost, extra) {},
// 	onRaid(user, viewers, extra) {},
// 	onSub(user, message, subTierInfo, extra) {},
// 	onResub(user, message, streakMonths, cumulativeMonths, subTierInfo, extra) {},
// 	onSubGift(gifterUser, streakMonths, recipientUser, senderCount, subTierInfo, extra) {},
// 	onSubMysteryGift(gifterUser, numbOfSubs, senderCount, subTierInfo, extra) {},
// 	onGiftSubContinue(user, sender, extra) {},
// 	onCheer(user, message, bits, flags, extra) {},
// 	onChatMode(flags, channel) {},
// 	onReward(user, reward, cost, message, extra) {},
// 	onConnected(address, port, isFirstConnect) {},
// 	onReconnect(reconnectCount) {},
// 	Init(username, password, channels, isDebug) {}
// };

const chatbox = document.querySelector('[data-twitch-chat]');
const watchedChannels = chatbox.getAttribute('data-twitch-chat');

ComfyJS.onChat = function(user, messageContents, flags, self, extra) {
	const newMessage = document.createElement('li');
	newMessage.setAttribute('data-twitch-message', extra.id);

	// Format sender
	const sender = document.createElement('p');
	const senderRoles = [];
	if (flags.broadcaster) senderRoles.push('broadcaster');
	if (flags.mod) senderRoles.push('mod');
	if (flags.subscriber) senderRoles.push('subscriber');
	if (flags.vip) senderRoles.push('vip');
	
	sender.setAttribute('data-twitch-sender', user);
	sender.innerHTML = user;
	sender.setAttribute('data-twitch-sender-roles', senderRoles.join(' '));

	const message = document.createElement('p');
	message.innerHTML = messageContents;

	newMessage.appendChild(sender);
	newMessage.appendChild(message);
	chatbox.appendChild(newMessage);
}

ComfyJS.Init(watchedChannels);