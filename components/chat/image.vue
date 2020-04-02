<template>
	<view></view>
</template>

<script>
	let msgType = require("../../webIM/utils/msgtype.js");
	let disp = require("../../webIM/utils/broadcast.js");
	let msgStorage = require('../../webIM/utils/msgstorage.js');
	export default {
		components: {
			
		},
		data() {
			return {
				
			}
		},
		props: {
			username: {
				type: Object,
				value: {},
			},
			chatType: {
				type: String,
				value: msgType.chatType.SINGLE_CHAT,
			},
		},
	
		onUnload() {
			
		},
		methods: {
			openCamera(){
				var me = this;
				uni.chooseImage({
					count: 1,
					sizeType: ["original", "compressed"],
					sourceType: ["camera"],
					success(res){
						me.upLoadImage(res);
					}
				});
			},
			
			sendImage(){
				var me = this;
				uni.chooseImage({
					count: 1,
					sizeType: ["original", "compressed"],
					sourceType: ["album"],
					success(res){
						me.upLoadImage(res);
					},
				});
			},
			
			isGroupChat(){
				return this.chatType == msgType.chatType.CHAT_ROOM;
			},
			
			getSendToParam(){
				return this.isGroupChat() ? this.username.groupId : this.username.your;
			},
			
			upLoadImage(res){
				var me = this;
				var tempFilePaths = res.tempFilePaths;
				var token = uni.getStorageSync('HuanXinToken');
				uni.getImageInfo({
					src: res.tempFilePaths[0],
					success(res){
						var allowType = {
							jpg: true,
							gif: true,
							png: true,
							bmp: true
						};
						var str = me.$im.config.appkey.split("#");
						var width = res.width;
						var height = res.height;
						var index = res.path.lastIndexOf(".");
						var filetype = (~index && res.path.slice(index + 1)) || "";
						if(filetype.toLowerCase() in allowType){
							console.log("https://a1.easemob.com/" + str[0] + "/" + str[1] + "/chatfiles");
							uni.uploadFile({
								url: "https://a1.easemob.com/" + str[0] + "/" + str[1] + "/chatfiles",
								filePath: tempFilePaths[0],
								name: "file",
								header: {
									"Content-Type": "multipart/form-data",
									Authorization: "Bearer " + token
								},
								success(res){
									var data = res.data;
									var dataObj = JSON.parse(data);
									var id = me.$im.conn.getUniqueId();		// 生成本地消息 id
									var msg = new me.$im.message(msgType.IMAGE, id);
									var file = {
										type: msgType.IMAGE,
										size: {
											width: width,
											height: height
										},
										url: dataObj.uri + "/" + dataObj.entities[0].uuid,
										filetype: filetype,
										filename: tempFilePaths[0]
									};
									msg.set({
										apiUrl: me.$im.config.apiURL,
										body: file,
										from: me.username.myName,
										to: me.username.yourName,
										ext: {
											fromName: uni.getStorageSync('myHXId'),
											fromAvatar: me.$store.state.userInfo.avatar,
											hxMsgId: msgType.IMAGE + id,
											yonghuName: me.$store.state.userInfo.nickname
										}, 
										roomType: false,
										// chatType: me.chatType,
										success: function (argument) {
											disp.fire('em.chat.sendSuccess', id);
										}
									});
									if(me.chatType == msgType.chatType.CHAT_ROOM){
										msg.setGroup("groupchat");
									}
									try {
										me.$emit('sendEnd');
										uni.setStorage({
										    key: 'cool',
										    data: '1',
										    success: function () {
												me.$im.conn.send(msg.body);
										        console.log('success');
										    }
										});
									} catch (e) {
										console.log('当前消息发送失败', e);
									}
									console.log( msg );
									// uni.$emit('saveSendMsg', {
									// 	msg: msg.body,
									// 	type: msgType.IMAGE,
									// })
									msgStorage.saveMsg(msg, msgType.IMAGE);
								},
								fail: (err) => {
									console.log("图片失败:",  err);
								}
							});
						}
					}
				});
			},
		}
	}
</script>

<style>
</style>
