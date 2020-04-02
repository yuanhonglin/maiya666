<template>
	<view class="cont">
		<!-- 消息容器盒子 -->
		<scroll-view class="chat-box" scroll-y :scroll-into-view="scrollInoViewID" @scrolltoupper="scrollToupper">
			<tui-loadmore :visible="loadding" :index="3" type="primary" text=" "></tui-loadmore>
			<block v-for="(item, index) in chatMsg" :key="index">
				<!-- 时间 -->
				<view class="flex-row-col-center time-box" v-if="index % mathNumber === 0">
					<view class="time">{{ item.createTime }}</view>
				</view>

				<!-- 单条消息内容 -->
				<view class="chat-item" :class="{ 'chat-kehu': item.fromId == username.myName }" :id="item.mid">
					<!-- 客服头像 -->
					<view class="img-box flex-row-col-center" v-if="item.fromId == username.yourName">
						<image class="user-photo" :src="shopPhoto" lazy-load></image>
					</view>
					<!-- 文本消息 -->
					<view class="msg-box txt" v-if="item.type === 'txt'">
						<!-- 文本消息中的不同消息 -->
						<block v-for="(msgItem, msgIndex) in item.msg.list" :key="msgIndex">
							<template v-if="msgItem.type === 'txt'">
								{{ msgItem.msg }}
							</template>
							<template v-if="msgItem.type === 'emoji'">
								<image :src="'/static/faces/' + msgItem.msg " mode=""></image>
							</template>
						</block>
					</view>
					
					<!-- 图片消息 -->
					<view class="msg-box img" v-if="item.type === 'img'">
						<image :src="item.msg.url" mode=""></image>
					</view>
					
					<!-- 用户头像 -->
					<view class="img-box flex-row-col-center" v-if="item.fromId == username.myName">
						<image class="user-photo" :src="item.fromAvatar?item.fromAvatar:'/static/image/5.png'" lazy-load></image>
					</view>
				</view>
			</block>
		</scroll-view>
		<!-- <view class="" v-for="(i,j) in chatMsg" :key="j" style="display: flex;">
			{{j}}
		</view> -->
		<!-- 底部输入框盒子 -->
		<view class="fot-box"><chatInput @replySubmit="replySubmit" :username="username"></chatInput></view>
	</view>
</template>

<script>
import chatInput from '@/components/chat/myChatInput.vue';
import tuiLoadmore from '@/components/loadmore/loadmore';

let msgStorage = require('@/webIM/utils/msgstorage');
let disp = require('@/webIM/utils/broadcast');
let msgType = require('@/webIM/utils/msgtype');

let LIST_STATUS = {
	SHORT: 'scroll_view_change',
	NORMAL: 'scroll_view'
};
let page = 0;
let Index = 0;
let curMsgMid = ''; // 发送失败消息的ID
let isFail = false; // 消息是否发送失败
export default {
	components: {
		chatInput,
		tuiLoadmore,
	},
	data() {
		return {
			loadding: false,	//滚动的状态
			total:0,	//总页数
			
			scrollInoViewID: '', // 显示容器的ID
			mathNumber: Math.floor(Math.random() * 5 + 10),

			// 聊天双方的环信ID
			username: {
				yourName: '',
				myName: ''
			},
			myHXId: '',   // 我的环信ID
			myPhoto: '', // 我的头像
			shopPhoto: '', // 店铺头像
			chatMsg: [] ,// 聊天对话列表
			
			hisMessage:{
				toId:'',
				pageNo:1,
				pageSize:10,
			},
			historyMsgList:[],  // 历史聊天记录
			
		};
	},
	watch: {
		chatMsg(newVal) {
			this.chatMsg = newVal;
			console.log(this.chatMsg)
		},
		inputInfo(newVal) {
			if (newVal) {
				this.showSend = true;
			} else {
				this.showSend = false;
			}
		},
		isFocus(newVal) {
			if (newVal) {
				this.showOption = false;
			}
		}
	},
	onLoad(options) {
		console.log(getApp().globalData.memberList)
		let memberObj = JSON.parse(options.memberObj);
		let myHXId = uni.getStorageSync('myHXId');
		this.myHXId = myHXId;
		// myName是我自己的环信ID   yourName是对方店铺的环信ID
		this.username = {
			yourName: memberObj.yourName, // 客服的环信id
			// yourName: '1378ffea9dabdde96739feac21549aae', // 客服的环信id
			// myName: '677212946543149056' ,// 我的环信id
			myName: myHXId // 我的环信id
		};
		console.log(memberObj);

		// 获取并设置我的用户头像
		// let userAvatar = this.$store.state.userInfo.avatar;
		// this.myPhoto = userAvatar;

		// 设置当前聊天对象的名称和头像
		// this.shopPhoto = memberObj.avatar;
		
		getApp().globalData.memberList.forEach((item,index)=>{
			if(item.name=memberObj.yourName){
				this.shopPhoto=item.avatar
				uni.setNavigationBarTitle({
					title: item.nickName,
				});
			}
		})
		// uni.setNavigationBarTitle({
		// 	title: memberObj.nickName
		// });
		// 获取历史消息
		this.hisMessage.toId=memberObj.yourName
		// this.hisMessage.toId='1378ffea9dabdde96739feac21549aae'
		this.getHistoryMessage()
		
	},

	onUnload() {
		disp.fire('em.chatroom.leave');
	},

	onShow() {
		console.log(666)
		this.create_or_onready();
	},
	// created() {
	// 	//app端虽然会触发created，但是读取local storage为空
	// 	// #ifdef H5
	// 	this.create_or_onready();
	// 	// #endif
	// },
	// onReady() {
	// 	// #ifndef H5
	// 	this.create_or_onready();
	// 	// #endif
	// },

	methods: {
		// 进入页面时，初始化消息数据
		create_or_onready() {
			let _this = this;

			let username = _this.username;
			let myUsername = uni.getStorageSync('myHXId'); // hxid

			// 获取与该用户的本地聊天信息
			let sessionKey = username.yourName + myUsername;
			let chatMsg = uni.getStorageSync(sessionKey) || [];
			uni.setStorageSync(sessionKey, null);
			
			// 获取到消息后，进行渲染，渲染成功之后，把与该用户的本地聊天消息清除
			_this.renderMsg(null, null, chatMsg, sessionKey);
	
		// 监听消息发送失败的处理函数
			disp.on('em.xmpp.error.sendMsgErr', function(err) {
				curMsgMid = err.data.mid;
				isFail = true;
				return;
			});
			// 监听新消息发送事件，绑定对应的处理函数
			msgStorage.on('newChatMsg', function(renderableMsg, type, curChatMsg, sesskey) {
				    //发送消息成功后，在当前页面数据里push一条消息
				// console.log('监听到的新消息',renderableMsg,curChatMsg,sesskey);
				// console.log('页面渲染的消息长度',  _this.chatMsg.length)
				// uni.getStorage({
				//     key: 'cool',
				//     success: function (res) {
				// 		if(res.data==1){
				// 			console.log('888888888888888',res.data)
				// 			_this.chatMsg.push(renderableMsg)
				// 			console.log(_this.chatMsg)
				// 		}
				//     }
				// });
				// 判断是否属于当前会话
				// 消息中的form （消息来自于的用户名id）是否等于从列表点击进来聊天对象的用户名id  || 消息聊天窗口中的to （消息发送的对象用户名id）是否等于从列表点击进来聊天对象的用户名id（当前聊天对象）
				if (renderableMsg.info.from == username.yourName || renderableMsg.info.to == username.yourName) {
					if (sesskey == sessionKey) {
						_this.renderMsg(renderableMsg, type, curChatMsg, sessionKey, 'newMsg');
					}
				}
			});
		},
		/**
		 * 功能：渲染消息展示
		 * renderableMsg: 当前的消息 ||
		 * type: 消息类型
		 * curChatMsg: 所有的聊天消息
		 * sessionKey: 拼接的双方环信ID
		 * isnew: 'newMsg'-新消息 不传则不是
		 */
		renderMsg(renderableMsg, type, curChatMsg, sessionKey, isnew) {
			let me = this;
			// if (curChatMsg.length > 1) {
			// 	// 判断消息列表中的消息是否重复
			// 	this.chatMsg.map(function(elem, index) {
			// 		curChatMsg.map(function(item, i) {
			// 			if (elem.mid == item.mid) {
			// 				curChatMsg.splice(i, 1);
			// 			}
			// 		});
			// 	});
			// }

			// 从本地读取历史消息，与当前消息拼接在一起
			var historyChatMsgs = uni.getStorageSync('rendered_' + sessionKey) || [];
			historyChatMsgs = me.unique(historyChatMsgs.concat(curChatMsg));

			// 拼接后，如果没有任何消息，则不再继续执行
			if (!historyChatMsgs.length) return;

			if (isnew == 'newMsg') {
				me.chatMsg = me.unique( me.chatMsg.concat(curChatMsg) );
				me.scrollInoViewID = me.chatMsg[me.chatMsg.length - 1].mid;
			} else {
				// 初始化时，从历史消息中取出后10条
				me.chatMsg = historyChatMsgs.slice(-10);
				me.scrollInoViewID = historyChatMsgs[historyChatMsgs.length - 1].mid;
				if(me.historyMsgList.length <= 0){
					me.chatMsg = historyChatMsgs.slice(-10);
					me.scrollInoViewID = historyChatMsgs[historyChatMsgs.length - 1].hxMsgId;
				}else{
					me.chatMsg = me.historyMsgList.reverse().slice(-10);
					me.scrollInoViewID = me.historyMsgList[me.historyMsgList.length - 1].hxMsgId;
				}
			}

			console.log( "打印的消息", this.chatMsg);
			
			// 最终的历史消息取出最后20条，存储到本地中
			uni.setStorageSync('rendered_' + sessionKey, historyChatMsgs.slice(-20));

			// 取出当前的聊天信息
			// let chatMsgStor = uni.getStorageSync(sessionKey) || [];
			// chatMsgStor.map(function(item, index) {
			// 	curChatMsg.map(function(item2, index2) {
			// 		if (item2.mid == item.mid) {
			// 			chatMsgStor.splice(index, 1);
			// 		}
			// 	});
			// });

			// uni.setStorageSync(sessionKey, chatMsgStor);
			// Index = historyChatMsgs.slice(-10).length;
			// uni.pageScrollTo({
			// 	scrollTop: 9999
			// });
			if (isFail) {
				me.renderFail(sessionKey);
			}
			console.log(me.chatMsg)
		},
		
		// 数组去重函数
		unique(arr){
			let tempArr = [];
			arr.forEach( (item, index) => {
				if( index === 0 ){
					tempArr.push(item);
				}else{
					let flag = true;
					for(let i = 0; i < tempArr.length; i++ ){
						if( item.mid === tempArr[i].mid ){
							flag = false;
						}
					}
					if( flag ){
						tempArr.push(item);
					}
				}
			})
			return tempArr;
		}, 

		// 渲染失败的函数
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

		// 发送消息
		replySubmit(e_text) {
			let _this = this;
			String.prototype.trim = function() {
				return this.replace(/(^\s*)|(\s*$)/g, '');
			};
			if (!e_text.trim()) {
				return;
			}
			// 随机生成一个ID作为消息ID
			let id = this.$im.conn.getUniqueId();
			let msg = new this.$im.message(msgType.TEXT, id);

			msg.set({
				msg: e_text,
				from: this.username.myName,
				to: this.username.yourName,
				// 扩展消息
				ext: {
					fromName: uni.getStorageSync('myHXId'), // 我的环信id
					fromAvatar: this.$store.state.userInfo.avatar,
					hxMsgId: msgType.TEXT + id,
					myName: this.$store.state.userInfo.username //我的昵称
					// toHxName:'',
					// toName:'', // 他
					// toImg:''
				},
				roomType: false,
				// chatType: this.chatType,
				success: (id, serverMsgId) => {
					
					disp.fire('em.chat.sendSuccess', id, e_text);
				},
				fail: (id, serverMsgId) => {
					console.log('消息发送失败');
				}
			});
			try {
				console.log('发送成功')
				uni.setStorage({
				    key: 'cool',
				    data: '1',
				    success: res => {
				        console.log('success');
						this.$im.conn.send(msg.body);
				    }
				});
				
			} catch (e) {
				console.log('当前消息发送失败', e);
			}

			// 消息发送成功后，保存消息
			console.log(msg,msgType.TEXT)
			msgStorage.saveMsg(msg, msgType.TEXT);
		},
		
		// 获取历史消息
		getHistoryMessage(){
			this.$flyApi.getMessage(this.hisMessage).then(res => {
				// this.historyMsgList = res.data.records;
				// this.chatMsg=this.chatMsg.concat(this.historyMsgList)
				
				this.chatMsg=res.data.records.reverse()
				console.log(this.chatMsg)
				// if (res.code == 1) {
				// 	this.create_or_onready();
					this.total = res.data.total;
				// }
			});
		},
		// 滚动到顶部 自动触发
		async scrollToupper(e) {
			// 监听整个scroll 滚动滚动到顶部  弃用
			if (e.detail.direction && !this.loadding) {
				this.loadding = true;
				console.log(this.total)
				console.log(this.chatMsg.length)
				if (this.total > this.chatMsg.length) {
					this.hisMessage.pageNo++;
					var res
					await this.$flyApi.getMessage(this.hisMessage).then(res1 => {
						console.log(res1)
						res=res1
						console.log(res.data)
					})
					// console.log(res.data)
					// let res = await this.$http.queryHistoryMessage(this.username.yourName.toString(), this.pageNo, this.pageSize);
					// console.log(res.data.records.length)
					let historyPageList = res.data.records.reverse();
					var newArr = [...historyPageList, ...this.chatMsg];
					console.log( res );
					this.chatMsg = newArr;
					console.log(this.chatMsg)
					// this.create_or_onready();
					// this.scrollInoViewID = this.chatMsg[res.data.records.length].toId || this.chatMsg[res.data.records.length].id;
					this.loadding = false;
				} else {
					this.loadding = false;
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.cont {
	background-color: #f7f7f7;
	height: 100vh;
}
// 时间
.time-box {
	margin: 40upx 0;
}
.time {
	border-radius: 25upx;
	background-color: #cfcfcf;
	padding: 5upx 30upx;
	font-size: 28upx;
	color: #ffffff;
}
// 时间结束

.chat-box {
	height: calc(100vh - 100upx);
	padding-bottom: 30upx;
	box-sizing: border-box;
}
// 单条聊天记录
.chat-item {
	padding: 0 30upx;
	margin-top: 38upx;
	display: flex;
}
.img-box {
	width: 80upx;
	height: 80upx;
	border-radius: 100%;
	background: linear-gradient(320deg, rgba(254, 187, 107, 1) 0%, rgba(255, 164, 41, 1) 100%);
	margin-right: 30upx;
}
.kefu-img {
	width: 48upx;
	height: 40upx;
}
.msg-box {
	position: relative;
	max-width: 550upx;
	background: #ffffff;
	border-radius: 20upx;
	padding: 13upx 20upx;
	font-size: 32upx;
	color: #000000;
	font-weight: 400;
	line-height: 56upx;
	display: flex;
	flex-wrap: wrap;
	word-break: break-word;
}
.msg-box.txt image{
	width: 52rpx;
	height: 52rpx;
}
.msg-box.img image{
	
	width: 510rpx;
	// height: auto;
}

.msg-box::before {
	content: '';
	position: absolute;
	left: -28upx;
	top: 24upx;
	border: 15upx solid transparent;
	border-right: 15upx solid #ffffff;
}
// 单条聊天记录结束

// 用户发的消息记录
.user-photo {
	width: 80upx;
	height: 80upx;
	border-radius: 100%;
}
.chat-kehu {
	justify-content: flex-end;
}
.chat-kehu .img-box {
	margin-right: 0;
	margin-left: 30upx;
}
.chat-kehu .msg-box::before {
	left: auto;
	right: -28upx;
	top: 24upx;
	border: 15upx solid transparent;
	border-left: 15upx solid #ffffff;
}
// 用户发的消息记录结束
.fot-box {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	background-color: #ffffff;
}
</style>
