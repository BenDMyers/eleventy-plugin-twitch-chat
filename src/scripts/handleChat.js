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

	const sender = document.createElement('div');
	sender.classList.add('twitch-chat-sender');
	sender.innerHTML = user;

	const message = document.createElement('div');
	message.innerHTML = messageContents;
	message.classList.add('twitch-chat-message');

	newMessage.appendChild(sender);
	newMessage.appendChild(message);

	newMessage.setAttribute('data-twitch-message', extra.id);
	newMessage.setAttribute('data-twitch-sender', user);

	// Apply style hooks
	const senderRoles = [];
	if (flags.broadcaster) senderRoles.push('broadcaster');
	if (flags.founder) senderRoles.push('founder');
	if (flags.mod) senderRoles.push('mod');
	if (flags.subscriber) senderRoles.push('subscriber');
	if (flags.vip) senderRoles.push('vip');
	if (senderRoles.length > 0) {
		newMessage.setAttribute('data-twitch-sender-roles', senderRoles.join(' '));
	}

	const messageStatus = [];
	if (flags.highlighted) messageStatus.push('highlighted');
	if (flags.customReward) messageStatus.push('customReward');
	if (messageStatus.length > 0) {
		newMessage.setAttribute('data-twitch-message-status', messageStatus.join(' '));
	}

	chatbox.appendChild(newMessage);
}

ComfyJS.Init(watchedChannels);