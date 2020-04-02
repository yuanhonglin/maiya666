let Disp = require("./Dispatcher");
let msgPackager = require("./msgpackager");
let msgType = require("./msgtype");
let msgStorage = new Disp();
let disp = require("./broadcast");
/**
 * @receiveMsg : 接收到的消息单个消息对象，
 * @type: 接收到的消息的类型
 * */
msgStorage.saveReceiveMsg = function(receiveMsg, type) {
	let sendableMsg;
	if (type == msgType.IMAGE) {
		sendableMsg = {
			id: receiveMsg.id,
			type: type,
			body: {
				id: receiveMsg.id,
				from: receiveMsg.from,
				to: receiveMsg.to,
				type: receiveMsg.type,
				ext: receiveMsg.ext,
				chatType: receiveMsg.type,
				toJid: "",
				body: {
					type: type,
					url: receiveMsg.url,
					filename: receiveMsg.filename,
					filetype: receiveMsg.filetype,
					size: {
						width: receiveMsg.width,
						height: receiveMsg.height
					},
				},
			},
		};
	} else if (type == msgType.TEXT || type == msgType.EMOJI) {
		// 判断如果是文本和表情消息。
		sendableMsg = {
			id: receiveMsg.id,
			type: type,
			body: {
				id: receiveMsg.id,
				from: receiveMsg.from,
				to: receiveMsg.to,
				type: receiveMsg.type, // 聊天类型， chat，聊天类型  不是消息类型
				ext: receiveMsg.ext, // 扩展消息
				chatType: receiveMsg.type, // 群聊类型，true时为聊天室，false时为群组
				toJid: "",
				body: {
					type: type,
					msg: receiveMsg.data,
				},
			},
			value: receiveMsg.data
		};
	} else if (type == msgType.FILE) {
		sendableMsg = {
			id: receiveMsg.id,
			type: type,
			body: {
				id: receiveMsg.id,
				length: receiveMsg.file_length,
				from: receiveMsg.from,
				to: receiveMsg.to,
				type: receiveMsg.type,
				ext: receiveMsg.ext,
				chatType: receiveMsg.type,
				toJid: "",
				body: {
					type: type,
					url: receiveMsg.url,
					filename: receiveMsg.filename,
					msg: "当前不支持此格式消息展示",
				},
			},
			value: receiveMsg.data
		};
	} else if (type == msgType.AUDIO) {
		sendableMsg = {
			id: receiveMsg.id,
			type: type,
			accessToken: receiveMsg.token || receiveMsg.accessToken,
			body: {
				id: receiveMsg.id,
				length: receiveMsg.length,
				from: receiveMsg.from,
				to: receiveMsg.to,
				type: receiveMsg.type,
				ext: receiveMsg.ext,
				chatType: type,
				toJid: "",
				body: {
					type: type,
					url: receiveMsg.url,
					filename: receiveMsg.filename,
					filetype: receiveMsg.filetype,
					from: receiveMsg.from,
					to: receiveMsg.to
				},
			},
		};
	} else {
		return;
	}
	this.saveMsg(sendableMsg, type, receiveMsg);
};

/**
 * sendableMsg：上方格式化的数据
 * type: 消息类型
 * receiveMsg： 接收的原始消息数据
 * */
msgStorage.saveMsg = function(sendableMsg, type, receiveMsg) {
	// console.log('sendableMsgsendableMsg', sendableMsg)
	let me = this;
	let myName = uni.getStorageSync("myUsername"); // 获取到当前用户的名称
	console.log(myName)
	let sessionKey;
	// 仅用作群聊收消息，发消息没有 receiveMsg
	if (receiveMsg && receiveMsg.type == "groupchat") {
		sessionKey = receiveMsg.to + myName;
	}
	// 群聊发 & 单发 & 单收
	else {
		// 判断消息from 是否 来自于当前用户， 如果是sessionKey 的值为  to加name  否则 是from 加name
		sessionKey = sendableMsg.body.from == myName ?
			sendableMsg.body.to + myName :
			sendableMsg.body.from + myName;

		console.log(sendableMsg)
		console.log(sessionKey)
	}
	let curChatMsg = wx.getStorageSync(sessionKey) || [];
	let renderableMsg = msgPackager(sendableMsg, type, myName);
	if (type == msgType.AUDIO) {
		renderableMsg.msg.length = sendableMsg.body.length;
		renderableMsg.msg.token = sendableMsg.accessToken;
	}
	curChatMsg.push(renderableMsg);
	//console.log('renderableMsgrenderableMsg', renderableMsg)
	if (type == msgType.AUDIO) {
		renderableMsg.msg.token = sendableMsg.accessToken;
		//如果是音频则请求服务器转码
		// wx.downloadFile({
		// 	url: sendableMsg.body.body.url,
		// 	header: {
		// 		"X-Requested-With": "XMLHttpRequest",
		// 		Accept: "audio/mp3",
		// 		Authorization: "Bearer " + sendableMsg.accessToken
		// 	},
		// 	success(res){
		// 		// wx.playVoice({
		// 		// 	filePath: res.tempFilePath
		// 		// });
		// 		renderableMsg.msg.url = res.tempFilePath;

		// 		save();
		// 	},
		// 	fail(e){
		// 		console.log("downloadFile failed", e);
		// 	}
		// });
	}
	// else{
	// 	save();
	// }

	save();

	function save() {
		console.log("保存消息", curChatMsg)

		let memName = curChatMsg[0].info.from == myName ? curChatMsg[0].info.to : curChatMsg[0].info.from
		let fromName = curChatMsg[0].info.from == myName ? curChatMsg[0].ext.toName : curChatMsg[0].ext.myName
		let avatarImg = curChatMsg[0].info.from == myName ? curChatMsg[0].ext.toImg : curChatMsg[0].ext.fromAvatar
		console.log(getApp().globalData.memberList)
		console.log(memName)
		// getApp().globalData.memberList.map((item, index) => {
		// 	if (item.name === memName) {
		// 		console.log('我不是第一条新消息')
		// 		let a={
		// 			name: memName,
		// 			// nickName: item.nickName,
		// 			// avatar: item.avatar
		// 			nickName: fromName,
		// 			avatar: avatarImg
		// 		}
		// 		getApp().globalData.memberList.splice(index, 1)
		// 		getApp().globalData.memberList.unshift(a)
		// 	}
		// })
		if (some(getApp().globalData.memberList, memName)) {
			console.log('我已经有了')
			getApp().globalData.memberList.map((item, index) => {
				if (item.name === memName) {
					console.log('我不是第一条新消息')
					let a={
						name: memName,
						// nickName: item.nickName,
						// avatar: item.avatar
						nickName: fromName,
						avatar: avatarImg
					}
					getApp().globalData.memberList.splice(index, 1)
					getApp().globalData.memberList.unshift(a)
				}
			})
		}else{
			console.log('我还没有')
			let a = {
				name: memName,
				// nickName: item.nickName,
				// avatar: item.avatar
				nickName: fromName,
				avatar: avatarImg
			}
			// getApp().globalData.memberList.splice(index, 1)
			getApp().globalData.memberList.unshift(a)
		}

		function some(arr, aName) {
			return arr.some((item, index) => {
				return item.name == aName
			})

		}
		// 如果为空,则是第一条消息
		if (getApp().globalData.memberList == "") {
			console.log('我是第一条新消息')
			let a = {
				name: memName,
				nickName: fromName,
				avatar: avatarImg
			}
			getApp().globalData.memberList.unshift(a)
		}
		console.log(getApp().globalData.memberList)
		let a = getApp().globalData.memberList
		uni.setStorageSync("memberList", a)

		wx.setStorage({
			key: sessionKey,
			data: curChatMsg,
			success() {
				if (type == msgType.AUDIO || type == msgType.VIDEO) {
					disp.fire('em.chat.audio.fileLoaded');
				}
				me.fire("newChatMsg", renderableMsg, type, curChatMsg, sessionKey);
			}
		});
	}
};
module.exports = msgStorage;
