<script>
require('webIM/sdk/libs/strophe');
let msgStorage = require('webIM/utils/msgstorage');
let msgType = require('webIM/utils/msgtype');

let disp = require('webIM/utils/broadcast');
let logout = false;
let is_reconnect = false;
	import Vue from 'vue';
	export default {
		globalData: {
			unReadMessageNum: 0,
			// 获取会话列表（每次点击客服的时候都添加进list，不管是否聊天，同时又新消息进来的时候也添加进list，同时进行去重）
			memberList: [
				// {
				// 	name: '',
				// 	nickName: '',
				// 	avatar: ''
				// }
			],
			client:'',
		},
		onLaunch: function() {
			// console.log('App Launch')
			/*
			 * 判断当前本地存储中是否存在user_id 或者user_token  如果存在 赋值给vuex中的userId，并重新获取一边userInfo
			 * 如果不存在 则为未登录  默认不处理
			 * */
			var a=uni.getStorageSync('isLogin');
			if(!a){
				uni.navigateTo({   //未登录跳转到登录注册页面
					url:'pages/views/register/newUser'
				})
			}
				
			// uni.getStorage({
			// 	key: 'user_token',
			// 	success: res => {
			// 		this.$store.commit('USER_TOKEN', res.data);
			// 		// this.$store.dispatch('queryUserById');
			// 		uni.switchTab({
			// 			url:'pages/tabBar/index/index'
			// 		})
			// 	},
			// 	fail: err => {
			// 		console.log(err.errMsg + '，未登录哦');
			// 		uni.navigateTo({   //未登录跳转到登录注册页面
			// 			url:'pages/views/register/newUser'
			// 		})
			// 	}
			// });
			// #ifdef APP-PLUS
				// 锁屏屏幕方向  竖直正方向
				plus.screen.lockOrientation('portrait-primary')
				// app热更新（代码暂时移动到个人中心的设置下检测版本号）

			// #endif

			// 获取系统设备信息
			uni.getSystemInfo({
				success: (res) => {
					console.log(res)
					// 获取设备系统；
					console.log(res.platform)
					// 获取手机型号
					console.log(res.model)
				}
			})
			uni.getSystemInfo({
				success: (e)=> {
					//状态栏高度
					let StatusBar = e.statusBarHeight;
					let CustomBar = 0;
					Vue.prototype.StatusBar = StatusBar;
					// #ifndef MP
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 44;
						CustomBar = e.statusBarHeight + 44;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
						CustomBar = e.statusBarHeight + 45;
					}
					// #endif
					// #ifdef MP-WEIXIN
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif
					// #ifdef MP-ALIPAY
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
					//全局混入  设置全局变量 全局方法
					//2019.9.7 see:https://juejin.im/post/5b7bb9b56fb9a019f671266a
					Vue.mixin({
						data() {
							return {
								CustomBar,
								StatusBar
							};
						}
					});
				}
			});
		var me = this;
		// var logs = uni.getStorageSync('logs') || [];
		// logs.unshift(Date.now());
		// uni.setStorageSync('logs', logs);
		// console.log(logs);
		disp.on('em.main.ready', function() {
			me.calcUnReadSpot();
		});
		//离开chatroom
		disp.on('em.chatroom.leave', function() {
			console.log('em.chatroom.leave');
			me.calcUnReadSpot();
		});
		disp.on('em.chat.session.remove', function() {
			me.calcUnReadSpot();
		});
		disp.on('em.chat.audio.fileLoaded', function() {
			me.calcUnReadSpot();
		});

		disp.on('em.main.deleteFriend', function() {
			me.calcUnReadSpot();
		});
		disp.on('em.chat.audio.fileLoaded', function() {
			me.calcUnReadSpot();
		});

		this.$im.conn.listen({
			onOpened: message => {
				this.$im.conn.setPresence();
				console.log('环信登陆成功环信登陆成功环信登陆成功环信登陆成功环信登陆成功环信登陆成功');
				message.accessToken && uni.setStorageSync('HuanXinToken', message.accessToken);
				console.log(message);
				// uni.setStorageSync("myUsername",test_account || this.name.toLowerCase());
				if (is_reconnect) {
					uni.hideToast();
					// this.$helper.toast('success', '环信登陆成功', 2000);
					is_reconnect = false;
				}
				// 在登录页 登录成功后自动跳转到系统的聊天页面（此页面不适用当前项目 该方法弃用）
				// if(this.getCurrentRoute() == "pages/login/login" || getCurrentRoute() == "pages/login_token/login_token"){
				// 	this.onLoginSuccess();
				// }
			},
			onReconnect: () => {
				this.$helper.toast('loading', '重连中...', 2000);
			},
			onSocketConnected: () => {
				// this.$helper.toast('success', '登陆成功', 2000);
				console.log('环信登陆成功环信登陆成功环信登陆成功环信登陆成功环信登陆成功环信登陆成功');
			},
			onClosed: () => {
				console.log('连接关闭回调');
				this.$helper.toast('none', '网络已断开', 2000);
				// 连接关闭  需要重新登录  是否可以自动登录 待测试
				uni.redirectTo({
					url: 'pages/login/login'
				});
				this.$conn.closed = true;
				this.$im.conn.close();
			},
			onInviteMessage: message => {
				this.$options.globalData.saveGroupInvitedList.push(message);
				disp.fire('em.xmpp.invite.joingroup', message);
				// uni.showModal({
				// 	title: message.from + " 已邀你入群 " + message.roomid,
				// 	success(){
				// 		disp.fire("em.xmpp.invite.joingroup", message);
				// 	},
				// 	error(){
				// 		disp.fire("em.xmpp.invite.joingroup", message);
				// 	}
				// });
			},
			// 监听订阅 加好友  等同于该项目的喜欢对方
			onPresence: message => {
				console.log('onPresence', message);
				// switch (message.type) {
				// 	case 'unsubscribe':
				// 		// 取消订阅成功(已废弃)
				// 		// pages[0].moveFriend(message);
				// 		break;
				// 	// 好友邀请列表  订阅和反向订阅
				// 	case 'subscribe':
				// 		if (message.status === '[resp:true]') {
				// 			return;
				// 		} else {
				// 			// pages[0].handleFriendMsg(message);
				// 			for (let i = 0; i < this.$options.globalData.saveFriendList.length; i++) {
				// 				if (this.$options.globalData.saveFriendList[i].from === message.from) {
				// 					this.$options.globalData.saveFriendList[i] = message;
				// 					disp.fire('em.xmpp.subscribe');
				// 					return;
				// 				}
				// 			}
				// 			this.$options.globalData.saveFriendList.push(message);
				// 			console.log(JSON.stringify(this.$options.globalData.saveFriendList));
				// 			disp.fire('em.xmpp.subscribe');
				// 		}
				// 		break;
				// 	// 被订阅后确认同意被订阅
				// 	case 'subscribed':
				// 		uni.showToast({
				// 			title: '添加成功',
				// 			duration: 1000
				// 		});
				// 		disp.fire('em.xmpp.subscribed');
				// 		break;
				// 	// 拒绝对方的订阅请求
				// 	case 'unsubscribed':
				// 		uni.showToast({
				// 			title: '已拒绝',
				// 			duration: 1000
				// 		});
				// 		break;
				// 	case 'memberJoinPublicGroupSuccess':
				// 		this.$helper.toast('none', '已进群', 1000);
				// 		break;
				// 	// 好友列表
				// 	// case "subscribed":
				// 	// 	let newFriendList = [];
				// 	// 	for(let i = 0; i < me.$options.globalData.saveFriendList.length; i++){
				// 	// 		if(me.$options.globalData.saveFriendList[i].from != message.from){
				// 	// 			newFriendList.push(me.$options.globalData.saveFriendList[i]);
				// 	// 		}
				// 	// 	}
				// 	// 	me.$options.globalData.saveFriendList = newFriendList;
				// 	// 	break;
				// 	// 删除好友
				// 	case 'unavailable':
				// 		disp.fire('em.xmpp.contacts.remove');
				// 		disp.fire('em.xmpp.group.leaveGroup', message);
				// 		break;

				// 	case 'deleteGroupChat':
				// 		disp.fire('em.xmpp.invite.deleteGroup', message);
				// 		break;

				// 	case 'leaveGroup':
				// 		disp.fire('em.xmpp.group.leaveGroup', message);
				// 		break;

				// 	case 'removedFromGroup':
				// 		disp.fire('em.xmpp.group.leaveGroup', message);
				// 		break;
				// 	// case "joinChatRoomSuccess":
				// 	// 	uni.showToast({
				// 	// 		title: "JoinChatRoomSuccess",
				// 	// 	});
				// 	// 	break;
				// 	// case "memberJoinChatRoomSuccess":
				// 	// 	uni.showToast({
				// 	// 		title: "memberJoinChatRoomSuccess",
				// 	// 	});
				// 	// 	break;
				// 	// case "memberLeaveChatRoomSuccess":
				// 	// 	uni.showToast({
				// 	// 		title: "leaveChatRoomSuccess",
				// 	// 	});
				// 	// 	break;

				// 	default:
				// 		break;
				// }
			},

			onRoster: message => {
				console.log('连接成功回调', message);
				// let pages = getCurrentPages();
				// if(pages[0]){
				// 	pages[0].onShow();
				// }
			},

			onVideoMessage: message => {
				console.log('onVideoMessage: ', message);
				if (message) {
					msgStorage.saveReceiveMsg(message, msgType.VIDEO);
				}
				this.calcUnReadSpot(message);
				this.ack(message);
			},

			onAudioMessage: message => {
				console.log('onAudioMessage', message);
				if (message) {
					if (this.onMessageError(message)) {
						msgStorage.saveReceiveMsg(message, msgType.AUDIO);
					}
					this.calcUnReadSpot(message);
					this.ack(message);
				}
			},

			onCmdMessage: message => {
				console.log('onCmdMessage', message);
				if (message) {
					if (this.onMessageError(message)) {
						msgStorage.saveReceiveMsg(message, msgType.CMD);
					}
					this.calcUnReadSpot(message);
					this.ack(message);
				}
			},

			// onLocationMessage: (message)=>{
			// 	console.log("Location message: ", message);
			// 	if(message){
			// 		msgStorage.saveReceiveMsg(message, msgType.LOCATION);
			// 	}
			// },

			onTextMessage: message => {
				console.log('收到文本消息', message);
				if (message) {
					if (this.onMessageError(message)) {
						// 收到文本消息，把消息进行格式化
						// plus.nativeUI.alert(JSON.stringify(message))
						msgStorage.saveReceiveMsg(message, msgType.TEXT);
					}
					this.calcUnReadSpot(message);
					this.ack(message);
				}
			},

			onEmojiMessage: message => {
				console.log('收到表情消息', message);
				if (message) {
					if (this.onMessageError(message)) {
						msgStorage.saveReceiveMsg(message, msgType.EMOJI);
					}
					this.calcUnReadSpot(message);
					this.ack(message);
				}
			},

			onPictureMessage: message => {
				console.log('收到图片消息', message);
				if (message) {
					if (this.onMessageError(message)) {
						msgStorage.saveReceiveMsg(message, msgType.IMAGE);
					}
					this.calcUnReadSpot(message);
					this.ack(message);
				}
			},

			onFileMessage: message => {
				console.log('收到文件消息', message);
				if (message) {
					if (this.onMessageError(message)) {
						msgStorage.saveReceiveMsg(message, msgType.FILE);
					}
					this.calcUnReadSpot(message);
					this.ack(message);
				}
			},

			// 各种异常
			onError: error => {
				console.log('失败回调', error);
				// 16: server-side close the websocket connection  服务端关闭了websocket链接
				if (error.type == this.$im.statusCode.WEBIM_CONNCTION_DISCONNECTED && !logout) {
					console.log(this.$im.conn.autoReconnectNumTotal, this.$im.conn.autoReconnectNumMax);

					// if (this.$im.conn.autoReconnectNumTotal < this.$im.conn.autoReconnectNumMax) {
					// 	return;
					// }
					uni.showToast({
						icon: 'none',
						title: '聊天服务重连，请稍后重试',
						duration: 1500
					});
					// 环信失败回调  重新登录  是否自动登录 待测试
					// setTimeout(function() {
					// 	uni.redirectTo({
					// 		url: '/pages/login/login'
					// 	});
					// }, 1500);

					var options = {
						apiUrl: this.$im.config.apiURL,
						user: uni.getStorageSync('myUsername'),
						pwd: '123456',
						appKey: this.$im.config.appkey,
						success: token => {
							uni.hideLoading();
							logout = false;
							var token = token.access_token;
							uni.setStorageSync('HuanXinToken', token);
						},
						error: function() {
							logout = true;
						}
					};
					this.$im.conn.open(options);
					// return;
				}
				// 8: offline by multi login 多端登录，被踢下线
				if (error.type == this.$im.statusCode.WEBIM_CONNCTION_SERVER_ERROR) {
					uni.showToast({
						icon: 'none',
						title: '账号多端登录，请重新登录',
						duration: 1500
					});
					setTimeout(function() {
						uni.reLaunch({
							url: '/pages/login/login'
						});
					}, 1500);
				}
				if (error.type == this.$im.statusCode.WEBIM_CONNCTION_OPEN_ERROR) {
					disp.fire('em.xmpp.error.passwordErr');
					// uni.showModal({
					// 	title: "用户名或密码错误",
					// 	confirmText: "OK",
					// 	showCancel: false
					// });
				}
				if (error.type == this.$im.statusCode.WEBIM_CONNCTION_AUTH_ERROR) {
					disp.fire('em.xmpp.error.tokenErr');
				}
				if (error.type == 'socket_error') {
					///sendMsgError
					console.log('网络已断开socket_errorsocket_error', error);
					// uni.showToast({
					// 	title: '网络已断开',
					// 	icon: 'none',
					// 	duration: 2000
					// });
					// disp.fire('em.xmpp.error.sendMsgErr', error);
					// 网络断开重连
					var options = {
						apiUrl: this.$im.config.apiURL,
						user: uni.getStorageSync('myUsername'),
						pwd: 'isong123456',
						appKey: this.$im.config.appkey,
						success: token => {
							uni.hideLoading();
							logout = false;
							var token = token.access_token;
							uni.setStorageSync('HuanXinToken', token);
						},
						error: function() {
							logout = true;
						}
					};
					console.log(options)
					this.$im.conn.open(options);
				}
			}
		});
		console.log('isOpened', this.$im.conn.isOpened());
		console.log(uni.getStorageSync('HuanXinToken'))
		console.log(uni.getStorageSync('myUsername'))
		console.log(uni.getStorageSync(this.$store.state.userToken));
		setTimeout(() => {
			if (!this.$im.conn.isOpened() && uni.getStorageSync('HuanXinToken') && uni.getStorageSync('myUsername') && this.$store.state.userToken) {
				is_reconnect = true;
				// uni.showToast({
				// 	title: '自动链接聊天成功',
				// 	icon: 'none'
				// });
				// this.$helper.toast('loading', '自动链接聊天...', 10000, true);
				//尝试使用token重新登陆
				this.$conn.open({
					apiUrl: this.$im.config.apiURL,
					user: uni.getStorageSync('myUsername'),
					accessToken: uni.getStorageSync('HuanXinToken'),
					appKey: this.$im.config.appkey
				});
			}
		}, 1000);
		},
		methods: {
			// 在登录页 登录成功后自动跳转到系统的聊天页面（此页面不适用当前项目 该方法弃用）
			onLoginSuccess() {
				uni.hideToast();
				uni.switchTab({
					url: '../chat/chat'
				});
			},

			ack(receiveMsg) {
				// 处理未读消息回执
				var bodyId = receiveMsg.id; // 需要发送已读回执的消息id
				var ackMsg = new this.$im.message('read', this.$im.conn.getUniqueId());
				ackMsg.set({
					id: bodyId,
					to: receiveMsg.from
				});
				this.$im.conn.send(ackMsg.body);
			},

			// 消息是否异常。 true 正常发送，。false 异常消息
			onMessageError(err) {
				if (err.type === 'error') {
					uni.showToast({
						title: err.errorText
					});
					return false;
				}
				return true;
			},

			getCurrentRoute() {
				let pages = getCurrentPages();
				let currentPage = pages[pages.length - 1];
				return currentPage.route;
			},

			calcUnReadSpot(message) {
				// 获取用户名称
				let myName = uni.getStorageSync('myUsername');
				let members = this.$options.globalData.memberList || []; // 获取所有存储的好友
				let count = members.reduce(function(result, curMember, idx) {
					let chatMsgs;
					// console.log(curMember)
					if (curMember.roomId) {
						chatMsgs = uni.getStorageSync(curMember.roomId + myName.toLowerCase()) || [];
					} else {
						chatMsgs = uni.getStorageSync(curMember.name.toLowerCase() + myName.toLowerCase()) || [];
					}
					// console.log(chatMsgs)
					return result + chatMsgs.length;
				}, 0);
				// console.log(count)
				this.$options.globalData.unReadMessageNum = count;
				disp.fire('em.xmpp.unreadspot', message);
			}
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
/*每个页面公共css */
@import '/static/css/base.css';

/* 单行溢出隐藏 */
.oneline {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

/* 两行移除隐藏 */
.twoline {
	white-space: normal;
	word-break: break-all;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}
/* 三行移除隐藏 */
.threeline {
	white-space: normal;
	word-break: break-all;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
}

/* 底部按钮 */
.footer-btn {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 98rpx;
	background-color: #fff;
}
.footer-btn .btn {
	height: 100%;
	height: 100%;
	border-radius: 10rpx 10rpx 0px 0px;
	font-size: 32upx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.footer-btn .btn .iconfont {
	margin-right: 24upx;
}
</style>
