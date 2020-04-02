let WebIM = require("./WebIM")["default"];
let msgType = require("./msgtype");

module.exports = function(sendableMsg, type, myName){
	// console.log("配置消息数据格式化",sendableMsg)
	var time = WebIM.time();
	var renderableMsg = {
		chatType: sendableMsg.body.chatType,
		info: {
			from: sendableMsg.body.from,
			to: sendableMsg.body.to
		},
		username: sendableMsg.body.from == myName ? sendableMsg.body.to : sendableMsg.body.from,
		toIf: sendableMsg.body.from == myName ? sendableMsg.body.to : sendableMsg.body.from,
		yourname: sendableMsg.body.from,
		fromId: sendableMsg.body.from,
		fromAvatar: sendableMsg.body.ext.fromAvatar,
		yonghuName: sendableMsg.body.ext.yonghuName,
		fromName: sendableMsg.body.ext.fromName,
		fromUserId: sendableMsg.body.ext.fromUserId,
		hxMsgId: sendableMsg.body.ext.hxMsgId, // 当前消息本地生成的hx的id,下面的mid
		ext:sendableMsg.body.ext,
		id:'', // 后台生成的列表数据id
		msgId: "", // 环信实时回调生成的id
		msg: {
			type: type,
			url: sendableMsg.body.body.url,
			list: getMsgData(sendableMsg, type),
		},
		style: sendableMsg.body.from == myName ? "self" : "",
		time: time,
		createTime: time,
		mid: sendableMsg.type + sendableMsg.id,
		type: sendableMsg.type  // 消息类型
	};
	if(type == msgType.IMAGE){
		renderableMsg.msg.size = {
			width: sendableMsg.body.body.size.width,
			height: sendableMsg.body.body.size.height,
		};
	}else if (type == msgType.AUDIO) {
		renderableMsg.msg.length = sendableMsg.body.length;
	}else if (type == msgType.FILE){
		renderableMsg.msg.data = [{data: "[当前不支持此格式消息展示]", type: "txt"}];
		renderableMsg.msg.type = 'txt';
	}
	return renderableMsg;

	function getMsgData(sendableMsg, type){
		if(type == msgType.TEXT){
			return WebIM.parseEmoji(sendableMsg.value.replace(/\n/mg, ""));
		}
		else if(type == msgType.EMOJI){
			return sendableMsg.value;
		}
		else if(type == msgType.IMAGE || type == msgType.VIDEO || type == msgType.AUDIO){
			return sendableMsg.body.body.url;
		} else if (type == msgType.FILE) {
			return sendableMsg.body.body.msg
		}
		return "";
	}
};
