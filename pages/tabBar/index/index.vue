<template>
	<view>
		 <view class="status_bar">
		          <!-- 这里是状态栏 -->
		 </view>
		
		<view class="top flex justify-around" @tap="gotoqCode">
			<view class="top-content" v-for="(item,index) in tabList" :key="index">
				<image :src="item.img" mode=""></image>
				<text>{{item.name}}</text>
			</view>
		</view>
		
		
		<!-- im聊天列表 -->
		<view class="co-list" v-for="(l, index) in chatPeopleList" :key="index" @tap="puDetail(l)">
			<view class="left">
				<view class="imgs">
					<!-- <image :src="myAloneName==l.ext.fromName?imgApi+l.ext.toImg:imgApi+l.ext.fromAvatar" mode=""></image> -->
					<!-- <image src="../../../static/imgs/taoci%20(137).png" v-if="myAloneName==l.fromName" mode=""></image> -->
					<!-- <image :src="h.photo" v-if="h.m_phone==l.fromName" v-for="(h,j) in renderList" :key="j" mode=""></image> -->
					<image :src="l.userImg"  ></image>
				</view>
			</view>
			<view class="right">
				<view class="tt">
					<!-- {{ l.info.to }} --> 
					<!-- <view class="name"  >{{myAloneName==l.ext.fromName?l.ext.toName:l.ext.myName}}</view> -->
					<view class="name">{{l.nickname}}</view>
					<view class="guans">{{ l.time }}</view>
				</view>
				<view class="jies">
					<view class="jie-l" v-if="l.msg.list[0].msg">{{ l.msg.list[0].msg }}</view>
					<view class="jie-l" v-if="l.msg.type == 'img'">[当前不支持图片展示]</view>
					<view class="jie-l" v-if="l.msg.type == 'audio'">[当前不支持音频展示]</view>
					<!-- 阅读状态unReadCount 0：已阅读  >1：未阅读数量 -->
					<!-- <view class="jie-r"><view class="radi" v-if="l.unReadCount > 0"></view></view> -->
					<view class="jie-r"><view class="read-num" v-if="l.unReadCount > 0">{{l.unReadCount}}</view></view>
				</view>
			</view>
		</view>
		<!-- <input type="text" v-model="hisHxid" placeholder="输入要聊天的好友id" /> -->
	</view>
</template>

<script>
let msgStorage = require('@/webIM/utils/msgstorage');
let disp = require('webIM/utils/broadcast');
	export default {
		data() {
			return {
				tabList:[
					{
						img:'../../../static/imgs/taoci%20(139).png',
						name:'邀请患者',
					},
					{
						img:'../../../static/imgs/taoci%20(139).png',
						name:'群发',
					},
					{
						img:'../../../static/imgs/taoci%20(139).png',
						name:'认证',
					}
				],
				
				
				list:[],
				listt:[],
				chatPeopleList: [],
				hxIdsArr: [], // 会话列表中用户的id
				
				aloneName:'',
				member:[],
				myTitle:'',
				myAloneName:'',
				
				hisHxid:'',
				renderList:[]
			};
		},
		onLoad() {
			let a = uni.getStorageSync('memberList');
			console.log(a);
			if (a == '') {
				console.log(555)
				getApp().globalData.memberList = [];
			} else {
				console.log(666,a)
				getApp().globalData.memberList = a;
				this.getRoster();
			}
			console.log(getApp().globalData.memberList);
			let _this = this;
			msgStorage.on('newChatMsg', (renderableMsg, type, curChatMsg, sesskey) => {
				console.log('监听到的新消息', curChatMsg);
				
				_this.getRoster();
			});
		},
		onShow() {
			this.myAloneName= uni.getStorageSync('myUsername');
			console.log(this.myAloneName)
			console.log(uni.getStorageSync("userInfo"))
			console.log(this.$store.state)
		},
		onPullDownRefresh() {
			console.log(88888)
			this.getRoster();
		},
		methods:{
			gotoqCode(){
				uni.navigateTo({
					url:"../../views/index/qcode"
				})
			},
			// 点击跳转聊天页面
			puDetail(info) {
				// // uni.showToast({
				// // 	title: '暂未开放哦',
				// // 	icon:"none"
				// // });
				// // return 
				// console.log(info)
				// let myName = uni.getStorageSync('myUsername');
				// this.aloneName=myName
				// // name  都是环信id
				let nameList = {
					myName: uni.getStorageSync('myUsername'),
					yourName: info.username,
					paintName:info.nickname,
					userImg:info.userImg,
				};
				// let memberObj = {
				// 		name: "18203641939", // hxID
				// 		nickName: "哈哈哈哈", // 用户名 或者是店铺名
				// 		avatar: "image/02.png"  // 用户头像  或店铺头像
				// }
				// // 开关  用于控制是否是新的用户发来的消息
				// let newPeople = true
				// getApp().globalData.memberList.map(item=>{
				// 	if(item.name == info.username){
				// 		newPeople = false
				// 		return
				// 	}
				// })
				// if(newPeople){			//如果是新用户发来的消息则把info里最新的用户消息放进消息列表里
				// 	getApp().globalData.memberList.unshift(memberObj)
				// }
				// uni.navigateTo({		
				// 	url:"../../kefuPage/kefuPage?memberObj="+ JSON.stringify(nameList),
				// });
				uni.navigateTo({
					url:"../../kefuPage/chat?username="+ JSON.stringify(nameList),
				});
			},
			// 获取联系人列表
			async getRoster() {
				let _this = this;
				await this.$http.getMessageList({doctor:uni.getStorageSync('myUsername')}).then(res=>{
					console.log(res.data)
					this.renderList=res.data
				})
				_this.chatPeopleList = _this.getChatList();
				console.log(_this.chatPeopleList)
				uni.stopPullDownRefresh();
			},
			// 格式化数据，获取到好友的会话消息列表
			getChatList() {
				var array = [];
				// var member = uni.getStorageSync('member');
				var member = getApp().globalData.memberList;
				console.log(member)
				// console.log('获取存储的联系人列表', member);
				var myName = uni.getStorageSync('myUsername');
				for (let i = 0; i < member.length; i++) {
					let newChatMsgs = uni.getStorageSync(member[i].name + myName) || [];
					let historyChatMsgs = uni.getStorageSync('rendered_' + member[i].name + myName) || [];
					let curChatMsgs = historyChatMsgs.concat(newChatMsgs);
					if (curChatMsgs.length) {
						let lastChatMsg = curChatMsgs[curChatMsgs.length - 1];
						lastChatMsg.unReadCount = newChatMsgs.length;
						if (lastChatMsg.unReadCount > 99) {
							lastChatMsg.unReadCount = '99+';
						}
			
						let dateArr = lastChatMsg.time.split(' ')[0].split('-');
						let timeArr = lastChatMsg.time.split(' ')[1].split(':');
						let month = dateArr[2] < 10 ? '0' + dateArr[2] : dateArr[2];
						this.renderList.forEach((item,index)=>{  //添加一个img始终为要发消息发的那个人
							if(item.hid==lastChatMsg.username){
								console.log('添加头像和名字')
								lastChatMsg.userImg=item.photo
								lastChatMsg.nickname=item.nickname
							}
						})
						
						lastChatMsg.timestamp = new Date().getTime(lastChatMsg.time);
						lastChatMsg.dateTimeNum = `${dateArr[0]}${dateArr[1]}${month}${timeArr[0]}${timeArr[1]}${timeArr[2]}`;
						lastChatMsg.time = `${dateArr[0]}-${dateArr[1]}-${month} ${timeArr[0]}:${timeArr[1]}:${timeArr[2]}`;
						array.push(lastChatMsg);
					}
				}
				array.sort((a, b) => {
					return b.dateTimeNum - a.dateTimeNum;
				});
				// let arrHxId = [];
				// array.map(item => {
				// 	arrHxId.push(item.username);
				// });
				// this.hxIdsArr = arrHxId;
				return array;
			}
		}
	}
</script>
<style>
	page{
		background-color: #F7F7F7;
	}
</style>
<style lang="scss" scoped>
	
	 .status_bar {
	      height: var(--status-bar-height);
	      width: 100%;
	  }
.top{
	padding: 30rpx;
	background-color: #fff;
	margin-bottom: 10rpx;
	.top-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		image{
			width: 140rpx;
			height: 140rpx;
		}
		text{
			color: #333;
			font-size: 32rpx;
		}
	}
}

// 聊天室
	.co-list {
		padding: 53upx 32rpx 32rpx;
		display: flex;
		border-bottom: 1px solid #eee;
		background-color: #fff;
		.left {
			height: 100%;
			.imgs {
				margin-top: 8upx;
				width: 88upx;
				height: 88upx;
				border-radius: 50upx;
				image {
					width: 100%;
					height: 100%;
					border-radius: 50upx;
					background-color: #efefef;
				}
			}
		}
		.right {
			width: calc(100% - 100upx);
			padding-left: 32upx;
			.tt {
				display: flex;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				.name {
					font-size: 28upx;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
					width: 400rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.name.active{
					color: #69c6a2;
				}
				.guans {
					width: calc(100% - 300rpx);
					font-size: 24upx;
					text-align: right;
					color: #59c6ba;
				}
			}
			.jies {
				display: flex;
				justify-content: space-between;
				padding: 18upx 0;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				color: rgba(153, 153, 153, 1);
				font-size: 24upx;
				.jie-l {
					width: 400rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.jie-r {
					width: 7%;
					.radi {
						width: 20upx;
						height: 20upx;
						border-radius: 50upx;
						background-color: #e85f5f;
					}
					.read-num{
						width: 30rpx;
						height: 30rpx;
						color: #fff;
						text-align:center;
						font-size: 20rpx;
						line-height: 30rpx;
						border-radius: 50upx;
						background-color: #e85f5f;
					}
				}
			}
			.time {
				color: rgba(153, 153, 153, 1);
				font-size: 24upx;
			}
		}
	}
</style>
