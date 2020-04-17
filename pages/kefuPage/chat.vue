<template>
	<view class="container">
		<view class="content" id="content" :style="{ height: style.contentViewHeight + 'px' }">
			<scroll-view
				id="scrollview"
				class="scroll-view"
				:scroll-with-animation="true"
				:scroll-y="true"
				:style="{ height: style.contentViewHeight + 'px' }"
				@scrolltoupper="scrollToupper"
				:scroll-into-view="scrollInoViewID"
			>
				<tui-loadmore :visible="loadding" :index="3" type="primary" text=" "></tui-loadmore>
				<block v-for="(item, index) in chatMsg" :key="index">
					<view class="time-box" v-if="index % mathNumber === 0">
						<view class="time">{{ item.createTime }}</view>
					</view>
					<!-- 对话消息 -->
					<view class="m-item" :id="item.hxMsgId">
						<view class="m-left">
							<!-- <image class="head_icon" :src="chatUserInfo.avatar ? chatUserInfo.avatar : '/static/logo.png'" v-if="item.fromId != username.myName"></image> -->
							<!-- <image class="head_icon" v-if="item.fromId != username.myName"  :src="shopPhoto" mode="aspectFill"></image> -->
							<image class="head_icon" v-if="item.fromId != username.myName"  :src="paintImg" mode="aspectFill"></image>
						</view>
						<view class="m-content">
							<view class="m-content-head" :class="item.fromId == username.myName ? 'm-content-head-right' : 'm-content-head-left'">
								<view :class="item.fromId == username.myName ? 'm-content-head-customer' : 'm-content-head-home'">
									<view v-if="item.msg.type == 'img' || item.msg.type == 'video'">
										<image
											v-if="item.msg.type == 'img'"
											class="avatar"
											:src="item.msg.url"
											style="width:90px; height:120px; margin:2px auto;"
											mode="aspectFit"
											@tap="previewImage(item.msg.url)"
											:data-url="item.msg.url"
										/>
										<video v-if="item.msg.type == 'video'" :src="item.msg.data" controls autoplay />
									</view>
									<audio-msg v-if="item.msg.type == 'audio'" :msg="item"></audio-msg>
									<view v-else-if="item.msg.type == 'txt' || item.msg.type == 'emoji'">
										<view class="template" v-for="(d_item, d_index) in item.msg.list" :key="d_index">
											<text class="msg-text" style="float:left;">{{ d_item.msg }}</text>

											<!-- <image
												v-if="d_item.type == 'emoji'"
												class="avatar"
												:src="'/static/images/faces/' + d_item.data"
												style="width:25px; height:25px; margin:0 0 2px 0; float:left;"
											/> -->
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="m-right" v-if="item.fromId == username.myName">
							<!-- <image class="head_icon" :src="userInfo.avatar" v-if="userInfo && userInfo.avatar"></image> -->
							<!-- 111 -->
							<!-- <image class="head_icon" src="/static/logo.png"></image> -->
							<!-- <image class="head_icon" src="../../../static/images/mine_def_touxiang_3x.png" mode=""></image> -->
							<!-- <image class="head_icon" :src="myPhoto" mode="aspectFill"></image> -->
							<image class="head_icon" :src="myPhoto" mode="aspectFill"></image>
						</view>
					</view>
				</block>
			</scroll-view>
		</view>
		<chatInput ref="replyEmoji" @replySubmit="replySubmit" @blurClearReplyInfo="blurClearReplyInfo"></chatInput>
	</view>
</template>

<script>
// import config from "../../../common/config.js"
import tuiBadge from '@/components/badge/badge';
import tuiLoadmore from '@/components/loadmore/loadmore';
import chatInput from '@/components/chatInput.vue';
let msgStorage = require('@/webIM/utils/msgstorage');
let disp = require('@/webIM/utils/broadcast');
let msgType = require('@/webIM/utils/msgtype');

let LIST_STATUS = {
	SHORT: 'scroll_view_change',
	NORMAL: 'scroll_view'
};
let page = 0;
let Index = 0;
let curMsgMid = '';
let isFail = false;

export default {
	components: {
		tuiBadge,
		tuiLoadmore,
		chatInput
	},
	data() {
		return {
			loadding: false,
			show: false,
			bottom: 0,
			scrollTop: 0,
			scrollInoViewID: '',
			style: {
				pageHeight: 0,
				contentViewHeight: 0,
				footViewHeight: 90,
				mitemHeight: 0
			},
			chatMsg: [], // 聊天对话列表
			mathNumber: Math.floor(Math.random() * 5 + 10),
			pageNo: 1,
			pageSize: 15,
			total: 0,
			historyMsgList: [], // 远程获取的聊天记录
			username: {
				yourName: '', // 聊天对象的用户名id
				myName: '' // 我的用户名id
			},
			// 聊天对象的具体信息
			chatUserInfo: {
				avatar: '',
				nickname: ''
			},
			visibility: false,
			
			myPhoto:'../../static/image/taoci%20(28).png',    //个人的头像
			shopPhoto:'',  //对面店铺的聊天头像
			shopName:'',
			shopPhoto1:'',
			
			paintImg:'',  //患者的头像
			msgNumbers:-10,
		};
	},
	beforeMount() {
		this.visibility = true;
		page = 0;
		Index = 0;
	},
	beforeDestroy() {
		this.visibility = false;
	},
	onLoad(options) {
		console.log(options)
		const res = uni.getSystemInfoSync();
		this.style.pageHeight = res.windowHeight;
		this.style.contentViewHeight = res.windowHeight - (res.screenWidth / 750) * 114; //像素

		let username = JSON.parse(options.username);
		console.log(username);
		
		this.myPhoto=this.$store.state.userInfo.img  //设置医生的头像
		this.paintImg=username.userImg		//设置患者的头像
		uni.setNavigationBarTitle({
			title:username.paintName
		});
		
		
		// myName是我自己的环信ID   yourName是对方店铺的环信ID
		this.username = {
			yourName: username.yourName, // 聊天对象的用户名id
			myName: uni.getStorageSync('myUsername') // 我的用户名id
		};

		
		// this.create_or_onready()
		
		// 用户的头像  如果是刚换的头像就从缓存取否则从用户信息里取
		let a=uni.getStorageSync("changePhoto")
		if(a){
			// this.myPhoto = config.IMG_BASE_URL + a;
		}else{
			// this.myPhoto=config.IMG_BASE_URL+this.$store.state.userInfo.avatar
		}
		
		console.log(getApp().globalData.memberList)
		// 如果是当前聊天的对象店铺取出店铺名
		// getApp().globalData.memberList.forEach((item,index)=>{
		// 	if(item.name==this.username.yourName){
		// 		console.log(item.nickName)
		// 		// this.shopPhoto=config.IMG_BASE_URL+item.avatar
		// 		this.shopPhoto1=item.avatar
		// 		this.shopName=item.nickName
		// 		uni.setNavigationBarTitle({
		// 			title:item.nickName
		// 		});
		// 	}
		// })
		
		console.log(this.chatMsg)
	},
	onUnload() {
		disp.fire('em.chatroom.leave');
	},

	created() {
		//app端虽然会触发created，但是读取local storage为空
		// #ifdef H5
		this.create_or_onready();
		// #endif
	},
	onShow() {
		console.log(this.chatMsg)
	},
	onReady() {
		// #ifndef H5
		this.create_or_onready();
		// #endif
	},
	methods: {
		previewImage(url){
			url=[url]
			uni.previewImage({
			            urls: url
			        });
		},
		create_or_onready() {
			let _this = this;

			let username = _this.username;
			let myUsername = uni.getStorageSync('myUsername'); // hxid

			// let sessionKey = username.groupId ? username.groupId + myUsername : username.ToName + myUsername; // 无聊天群组 id 弃用
			let sessionKey = username.yourName + myUsername;

			let chatMsg = uni.getStorageSync(sessionKey) || [];
			_this.renderMsg(null, null, chatMsg, sessionKey);
			uni.setStorageSync(sessionKey, null);

			disp.on('em.xmpp.error.sendMsgErr', function(err) {
				curMsgMid = err.data.mid;
				isFail = true;
				return;
			});

			msgStorage.on('newChatMsg', function(renderableMsg, type, curChatMsg, sesskey) {
				// _this.curChatMsg = curChatMsg;
				// console.log("新消息",renderableMsg)
				// console.log('监听到的新消息', JSON.stringify(curChatMsg));
				if (!_this.visibility) return;
				// // 判断是否属于当前会话
				// 消息中的form （消息来自于的用户名id）是否等于从列表点击进来聊天对象的用户名id  || 消息聊天窗口中的to （消息发送的对象用户名id）是否等于从列表点击进来聊天对象的用户名id（当前聊天对象）
				if (renderableMsg.info.from == username.yourName || renderableMsg.info.to == username.yourName) {
					console.log('判断是否属于当前会话', sesskey, sessionKey);
					if (sesskey == sessionKey) {
						_this.renderMsg(renderableMsg, type, curChatMsg, sessionKey, 'newMsg');
					}
				}
			});
		},

		// 处理消息数据
		renderMsg(renderableMsg, type, curChatMsg, sessionKey, isnew) {
			let me = this;
			if (curChatMsg.length > 1) {
				// 判断消息列表中的消息是否重复
				console.log('判断消息列表中的消息是否重复', this.chatMsg);
				this.chatMsg.map(function(elem, index) {
					curChatMsg.map(function(item, i) {
						if (elem.mid == item.mid) {
							//me.data.chatMsg.splice(index, 1)
							curChatMsg.splice(i, 1);
						}
					});
				});
			}

			var historyChatMsgs = uni.getStorageSync('rendered_' + sessionKey) || [];
			
			historyChatMsgs = historyChatMsgs.concat(curChatMsg);

			// console.log('当前历史', renderableMsg);
			// console.log('历史消息', historyChatMsgs);
			// console.log('历史消息', this.historyMsgList);
			// if (!historyChatMsgs.length && !this.historyMsgList.length) return;
			if (!historyChatMsgs.length) return;
			if (isnew == 'newMsg') {
				this.chatMsg = this.chatMsg.concat(curChatMsg);
				this.scrollInoViewID = curChatMsg[0].mid;
			} else {
				this.chatMsg = historyChatMsgs.slice(this.msgNumbers);
				this.scrollInoViewID = historyChatMsgs[historyChatMsgs.length - 1].mid;
			}

			uni.setStorageSync('rendered_' + sessionKey, historyChatMsgs.slice(-2000000));

			let chatMsgStor = uni.getStorageSync(sessionKey) || [];
			chatMsgStor.map(function(item, index) {
				curChatMsg.map(function(item2, index2) {
					if (item2.mid == item.mid) {
						chatMsgStor.splice(index, 1);
					}
				});
			});

			uni.setStorageSync(sessionKey, chatMsgStor);
			Index = historyChatMsgs.slice(-1000000).length;
			uni.pageScrollTo({
				scrollTop: 9999
			});
			if (isFail) {
				this.renderFail(sessionKey);
			}
		},
		renderFail(sessionKey) {
			let me = this;
			let msgList = me.chatMsg;
			msgList.map(item => {
				if (item.mid.substring(item.mid.length - 10) == curMsgMid.substring(curMsgMid.length - 10)) {
					item.msg.data[0].isFail = true;
					item.isFail = true;
					me.chatMsg = msgList;
				}
			});
			if (me.curChatMsg[0].mid == curMsgMid) {
				me.curChatMsg[0].msg.data[0].isShow = false;
				me.curChatMsg[0].isShow = false;
			}
			uni.setStorageSync('rendered_' + sessionKey, msgList.slice(-20));
			isFail = false;
		},

		// 点击发布  获取评论的内容
		replySubmit(e_text) {
			let _this = this;

			String.prototype.trim = function() {
				return this.replace(/(^\s*)|(\s*$)/g, '');
			};
			if (!e_text.trim()) {
				return;
			}
			let id = this.$im.conn.getUniqueId();
			let msg = new this.$im.message(msgType.TEXT, id);
			
			msg.set({
				msg: e_text,
				from: this.username.myName,
				to: this.username.yourName,
				// 扩展消息
				ext: {
					fromName: uni.getStorageSync('myUsername'),// 我的环信id
					myName:this.$store.state.userInfo.nickname, //我的昵称
					fromAvatar: this.$store.state.userInfo.avatar,  //我的头像
					
					hxMsgId: msgType.TEXT + id,
					
					toHxName:this.username.yourName,         //他的环信id  
					toName:this.shopName, 		//他的昵称或者店铺名
					toImg:this.shopPhoto1
			},
				roomType: false,
				chatType: this.chatType,
				success: (id, serverMsgId) => {
					console.log('消息发送成功');
					disp.fire('em.chat.sendSuccess', id, e_text);
				},
				fail: (id, serverMsgId) => {
					console.log('消息发送失败');
				}
			});
			try {
				this.$im.conn.send(msg.body);
			} catch (e) {
				console.log(e);
			}
			let sendMsg = {
				msg: msg,
				type: msgType.TEXT
			};
			msgStorage.saveMsg(sendMsg.msg, sendMsg.type);
			this.zhuanfa(e_text)
		},
		// 给微信用户端转发消息
		zhuanfa(msg){
			console.log(msg)
			let data={
				d_phone	:this.username.myName,
				hid	:this.username.yourName,
				content	:msg,
				d_nickname:this.$store.state.userInfo.nickName,
			}
			this.$http.zhuanfaMessage(data).then(res=>{
				
			})
		},
		// 清空回复的对象
		blurClearReplyInfo(e) {
			// console.log(e);
		},
		// 滚动到顶部 自动触发
		async scrollToupper(e) {
			this.create_or_onready()
			this.msgNumbers=-100000000
			// 监听整个scroll 滚动滚动到顶部  弃用
			if (e.detail.direction && !this.loadding) {
				this.loadding = true;
				if (this.total > this.chatMsg.length) {
					this.pageNo++;
					let res = await this.$http.queryHistoryMessage(this.username.yourName.toString(), this.pageNo, this.pageSize);
					// console.log(res.data.records.length)
					let historyPageList = res.data.records.reverse();
					var newArr = [...historyPageList, ...this.chatMsg];
					this.chatMsg = newArr;
					this.scrollInoViewID = this.chatMsg[res.data.records.length].hxMsgId || this.chatMsg[res.data.records.length].mid;
					this.loadding = false;
				} else {
					this.loadding = false;
				}
			}
		}
	}
};
</script>

<style lang="scss">
page {
	background: #ffffff;
}

.container {
	border-top: 1px solid rgba(238, 238, 238, 1);
	box-sizing: border-box;
	.content {
		.scroll-view {
			padding-bottom: 20px;
		}

		// 消息时间
		.time-box {
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top: 32rpx;
			.time {
				padding: 12rpx 24rpx;
				font-size: 24rpx;
				color: #fff;
				background: rgba(0, 0, 0, 0.14);
				border-radius: 8rpx;
			}
		}

		.m-item {
			display: flex;
			flex-direction: row;
			padding: 32rpx 32rpx 0;
			.m-left {
				display: flex;
				width: 88upx;
				justify-content: center;
				align-items: flex-start;
			}
			.m-right {
				display: flex;
				width: 88upx;
				justify-content: center;
				align-items: flex-start;
			}
			.head_icon {
				width: 88upx;
				height: 88upx;
				border-radius: 50%;
				background-color: #f7f7f7;
			}
			.m-content {
				display: flex;
				flex: 1;
				flex-direction: column;
				justify-content: center;
				word-break: break-all;
				text-align: justify;
				.m-content-head {
					position: relative;
				}

				.m-content-head-left {
					display: flex;
					justify-content: flex-start;
					padding-left: 16rpx;
				}

				.m-content-head-right {
					display: flex;
					justify-content: flex-end;
					padding-right: 16rpx;
				}

				.m-content-head-home {
					text-align: left;
					padding: 20upx 36rpx;
					color: #333;
					border-top-left-radius: 0;
					border-top-right-radius: 65rpx;
					border-bottom-left-radius: 65rpx;
					border-bottom-right-radius: 65rpx;
					background: rgba(246, 246, 246, 1);
				}

				.m-content-head-home:before {
					border: 15upx solid transparent;
					border-right: 15upx solid #1482d1;
					left: -26upx;
					width: 0;
					height: 0;
					position: absolute;
					// content: ' ';
				}

				.m-content-head-customer {
					color: #fff;
					padding: 20upx 36rpx;
					border-top-left-radius: 65rpx;
					border-top-right-radius: 0;
					border-bottom-left-radius: 65rpx;
					border-bottom-right-radius: 65rpx;
					background-color: rgba(89, 198, 186, 1);
				}

				.m-content-head-customer:after {
					border: 15upx solid transparent;
					border-left: 15upx solid white;
					top: 20upx;
					right: -26upx;
					width: 0;
					height: 0;
					position: absolute;
					content: ' ';
				}
			}
		}
	}
}

.tui-flex-end {
	justify-content: flex-end;
}

.tui-flex-reverse {
	flex-direction: row-reverse;
}
</style>
