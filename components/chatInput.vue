<template>
	<view>
		<view class="cf-bg" @tap="cemojiCfBg" v-show="cfBg"></view>
		<!--评论盒子-->
		<view class="comment-fixed">
			<view class="bot-chat">
				<view class="form-box">
					<!-- <text class="iconfont" @tap="openAudio">&#xe618;</text> -->
					<input
						type="text"
						ref="inputFocus"
						:focus="focusBool"
						v-model="commentContent"
						class="cf-content"
						:fixed="true"
						@focus="textAreaFocus"
						maxlength="200"
						@blur="textAreaBlur"
						@confirm="reply"
						confirm-type="send"
						placeholder="说点什么吧"
						placeholder-style="font-size:32upx; color:#BFBFBF;"
					/>
				</view>
				<view class="icon-box">
					<!-- <text class="iconfont" @tap="emojiShowHide(1)">&#xe648;</text> -->
					<text @tap="emojiShowHide(1)">表情</text>
					<!-- <text class="iconfont" @tap="emojiShowHide(2)">&#xe621;</text> -->
				</view>
			</view>

			<!--emoji表情盒子-->
			<!-- :class=" isLoad ? 'no-emoji-move' : ''" -->
			<view class="emoji-box" :class="isShow ? 'emoji-move-in' : 'emoji-move-out'">
				<scroll-view scroll-y style="height:200px" v-if="showTypeNum == 1">
					<block v-for="(e, e_i) in emojis" :key="e_i">
						<view class="emoji-cell">
							<view class="touch-active" @tap="emojiChoose" :data-emoji="e.char"
								:data-oxf="e.emoji">{{e.char}}</view>
						</view>
					</block>
					<view class="send-emoji" @tap="reply" v-if="showTypeNum == 1">
						发送
					</view>
				</scroll-view>
				<view style="height:214rpx" v-if="showTypeNum == 2">
						<view class="file-box">
							<view class="file-item margin-right" @tap="sendImage">
								<view class="iconfont">&#xe691;</view>
								<view class="file-item-name">
									图片
								</view>
							</view>
						<!-- 	<view class="file-item" @tap="sendVideo">
								<view class="iconfont" style="font-size: 70rpx;">&#xe638;</view>
								<view class="file-item-name">
									视频
								</view>
							</view> -->
						</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 评论盒子
			focusBool: false, // 是否自动获取焦点
			isShow: false, //控制emoji表情和上传文件是否显示
			showTypeNum:0, //  1 表情  2 文件
			isLoad: true, //解决初试加载时emoji动画执行一次
			commentContent: '', //评论框的内容
			isLoading: true, //是否显示加载数据提示
			cfBg: false,
			emojiChar:
				'☺-😋-😌-😍-😏-😜-😝-😞-😔-😪-😭-😁-😂-😃-😅-😆-👿-😒-😓-😔-😏-😖-😘-😚-😒-😡-😢-😣-😤-😢-😨-😳-😵-😷-😸-😻-😼-😽-😾-😿-🙊-🙋-🙏-✈-🚇-🚃-🚌-🍄-🍅-🍆-🍇-🍈-🍉-🍑-🍒-🍓-🐔-🐶-🐷-👦-👧-👱-👩-👰-👨-👲-👳-💃-💄-💅-💆-💇-🌹-💑-💓-💘-🚲',
			//0x1f---
			emoji: [
				'60a',
				'60b',
				'60c',
				'60d',
				'60f',
				'61b',
				'61d',
				'61e',
				'61f',
				'62a',
				'62c',
				'62e',
				'602',
				'603',
				'605',
				'606',
				'608',
				'612',
				'613',
				'614',
				'615',
				'616',
				'618',
				'619',
				'620',
				'621',
				'623',
				'624',
				'625',
				'627',
				'629',
				'633',
				'635',
				'637',
				'63a',
				'63b',
				'63c',
				'63d',
				'63e',
				'63f',
				'64a',
				'64b',
				'64f',
				'681',
				'68a',
				'68b',
				'68c',
				'344',
				'345',
				'346',
				'347',
				'348',
				'349',
				'351',
				'352',
				'353',
				'414',
				'415',
				'416',
				'466',
				'467',
				'468',
				'469',
				'470',
				'471',
				'472',
				'473',
				'483',
				'484',
				'485',
				'486',
				'487',
				'490',
				'491',
				'493',
				'498',
				'6b4'
			],
			emojis: [] //qq、微信原始表情
		};
	},
	beforeMount() {
		// 表情处理
		var em = {},
			that = this,
			emChar = that.emojiChar.split('-');
		that.emoji.forEach(function(v, i) {
			em = {
				char: emChar[i],
				emoji: '0x1f' + v
			};
			that.emojis.push(em);
		});
	},
	methods: {
		//点击emoji背景遮罩隐藏emoji盒子
		cemojiCfBg: function() {
			this.isShow = false;
			this.cfBg = false;
			this.showTypeNum = 0
		},
		//文本域获得焦点事件处理
		textAreaFocus: function() {
			this.isShow = false;
			this.cfBg = true;
			this.showTypeNum = 0
		},
		//文本域失去焦点时 事件处理
		textAreaBlur: function(e) {
			this.focusBool = false;
			// this.commentContent = ""
			// console.log(this.commentContent);
		},
		//解决滑动穿透问题
		emojiScroll: function(e) {
			console.log(e);
		},
		//点击表情显示隐藏表情盒子
		emojiShowHide: function(num) {
			
			if(this.isShow){
				if(this.showTypeNum > 0 && this.showTypeNum != num){
					this.showTypeNum = num
				}else{
					this.isShow = false
					this.showTypeNum = 0
				}
				
			}else{
				this.isShow = true
				this.showTypeNum = num
			}
			this.isLoad = false;
			this.cfBg = true;
		},
		//表情选择
		emojiChoose: function(e) {
			//当前输入内容和表情合并
			this.commentContent = this.commentContent + e.currentTarget.dataset.emoji;
		},
		switchChange(e) {
			this.$emit('switchChange', e.detail.value);
		},
		
		// 点击语音
		openAudio(){
			this.$helper.toast("none", "功能尚未开放~", 1500)
		},
		sendImage(){
			this.$helper.toast("none", "功能尚未开放~", 1500)
		},
		sendVideo(){
			this.$helper.toast("none", "功能尚未开放~", 1500)
		},
		
		reply() {
			this.cfBg = false;
			this.showTypeNum = 0
			this.isShow = false
			this.$emit('replySubmit', this.commentContent);
			this.$emit('blurClearReplyInfo', '');
			this.commentContent = '';
		}
	}
};
</script>

<style lang="scss">
.comment-fixed {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #fff;
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
	z-index: 100;
	.bot-chat {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100upx;
		border-top: 1px solid rgba(238, 238, 238, 1);
		background: rgba(255, 255, 255, 1);
		padding: 14upx 32upx;
		.form-box {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			// width: 520rpx;
			width: 620rpx;
			height: 72rpx;
			border-radius: 36rpx;
			.iconfont{
				font-size: 60rpx;
				color: #333;
				font-weight: 400;
			}
			.cf-content {
				height: 100%;
				font-size: 32rpx;
				color: #333;
				padding: 14rpx 24rpx;
				font-size: 32rpx;
				height: 72rpx;
				// width: 440rpx;
				width: 100%;
				outline: none;
				margin-left: 24rpx;
				border-radius: 36rpx;
				background-color: #f2f2f2;
			}
		}
		
		.icon-box{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.iconfont{
				font-size: 60rpx;
				color: #bfbfbf;
				margin-left: 24rpx;
			}
		}
	}
}

.cf-bg {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: transparent;
	z-index: 99;
}

.emoji {
	background-color: #fff;
	width: 30px;
	height: 30px;
	text-align: center;
	padding-top: 2px;
	box-sizing: border-box;
	font-size: 20px;
}

.emoji-box {
	position: relative;
	height: 200px;
	padding: 5px 0;
	box-sizing: border-box;
	margin-bottom: -200px;
	.emoji-cell {
		width: 12.5%;
		height: 33px;
		display: inline-block;
		.touch-active{
			width: 92rpx;
			height: 92rpx;
			padding: 20rpx;
			border-radius: 12rpx;
			font-size: 48rpx;
		}
	}
	.send-emoji{
		position: fixed;
		bottom: 12rpx;
		right: 24rpx;
		font-size: 32rpx;
		color: #fff;
		font-weight: 600;
		padding: 12rpx 32rpx;
		border-radius: 8rpx;
		background-color: #59c6ba;
	}
	
	// 更多发送文件 
	.file-box{
		display: flex;
		justify-content: flex-start;
		padding: 20rpx 32rpx;
		.file-item{
			width: 120rpx;
			height: 153rpx;
			border: 1px solid #eee;
			text-align: center;
			padding: 20rpx 0 12rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.iconfont{
				font-size: 55rpx;
				color: #bfbfbf;
			}
			.file-item-name{
				font-size: 28rpx;
				color: #bfbfbf;
			}
		}
		.margin-right{
			margin-right: 32rpx;
		}
	}
}


.emoji-move-in {
	-webkit-animation: emoji-move-in 0.3s forwards;
	animation: emoji-move-in 0.3s forwards;
}

.emoji-move-out {
	-webkit-animation: emoji-move-out 0.3s forwards;
	animation: emoji-move-out 0.3s forwards;
}

.no-emoji-move {
	-webkit-animation: none;
	animation: none;
}

@-webkit-keyframes emoji-move-in {
	0% {
		margin-bottom: -200px;
	}

	100% {
		margin-bottom: 0;
	}
}

@keyframes emoji-move-in {
	0% {
		margin-bottom: -200px;
	}

	100% {
		margin-bottom: 0;
	}
}

@-webkit-keyframes emoji-move-out {
	0% {
		margin-bottom: 0;
	}

	100% {
		margin-bottom: -200px;
	}
}

@keyframes emoji-move-out {
	0% {
		margin-bottom: 0;
	}

	100% {
		margin-bottom: -200px;
	}
}

@-webkit-keyframes pd-left-move {
	0% {
		padding-left: 5px;
	}

	100% {
		padding-left: 15px;
	}
}

@keyframes pd-left-move {
	0% {
		padding-left: 5px;
	}

	100% {
		padding-left: 15px;
	}
}
</style>
