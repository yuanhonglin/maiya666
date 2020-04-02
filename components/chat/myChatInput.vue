<template>
	<view class="">
		<view class="input-box flex">
			<!-- <view class="input-img-box no-shrink" @tap="hoverYuYin"><image class="input-img" src="../../../static/image/yuyin.png" lazy-load></image></view> -->
			<view class="flex-grow ml-20 mr-20">
				<view class="input flex-row-col-center color-999" v-if="showYuYin">长按发送语音</view>
				<input
					type="text"
					v-else
					class="input flex-row-col-center"
					v-model="inputInfo"
					@focus="handleFocus"
					@blur="handleBlur"
					:focus="isFocus"
					placeholder="单行输入..."
				/>
			</view>
			<view class="no-shrink flex">
				<image class="input-img mr-20" src="../../../static/image/biaoqing.png" @click="emojiBtnClick" lazy-load></image>

				<view class="send-btn flex-row-col-center" v-if="showSend" @tap="handleSend">发送</view>
				<!-- #ifdef APP-PLUS -->
					<image class="input-img" v-else src="../../../static/image/caozuo.png" lazy-load @tap="hoverOption"></image>
				<!-- #endif -->
			</view>
		</view>

		<!-- 单击加号时的操作盒子 -->
		<view class="option-box flex animated fadeInUp faster" v-if="showOption">
			<view class="option-img-box flex-row-col-center"><image @tap="openCamera" class="option-img" src="../../../static/image/paizhao.png" lazy-load></image></view>
			<view class="option-img-box flex-row-col-center"><image @tap="sendImage" class="option-img" src="../../../static/image/xiangce.png" lazy-load></image></view>
		</view>

		<!-- 表情盒子 -->
		<chatEmoji ref="emoji" @newEmojiStr="emojiAction"></chatEmoji>
		
		<!-- 发送图片的处理组件 -->
			<chatImage ref="image" @sendEnd="sendImageEnd" :username="username"></chatImage>
		<!-- <scroll-view v-if="isShowEmoji" scroll-y="true" class="emojiBox">
			<block v-for="(item, index) in emojis" :key="index">
				<view class="emoji-cell">
					<view class="touch-active" :data-emoji="item.char" :data-oxf="item.emoji">{{ item.char }}</view>
				</view>
			</block>
		</scroll-view> -->
	</view>
</template>

<script>
import chatEmoji from './emoji.vue';
import chatImage from './image.vue';
export default {
	components:{
		chatEmoji,
		chatImage
	},
	props:{
		username: Object
	},
	data() {
		return {
			isFocus: false, // 输入框是否聚焦
			showYuYin: false, // 是否显示语音
			showSend: false, // 是否显示发送文字
			isShowEmoji: true, // 是否显示表情
			showOption: false, // 是否显示图片和视频选项
			inputInfo: '', // 输入框内容
			emojis: [] // qq、微信原始表情列表
		};
	},
	watch: {
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
	methods: {
		// 单击发送按钮的处理函数
		handleSend() {
			this.$emit('replySubmit', this.inputInfo);
			this.inputInfo = '';
			// this.isFocus = true;
			// let data = {
			// 	type: 1,
			// 	msg: this.inputInfo
			// }
			// this.chatList.push( data );
			// this.inputInfo = '';
			// this.count++;
			// if( this.count > 2 ){
			// 	this.chatList.push({
			// 		type: 0,
			// 		msg: '我是客服，你的百科全书'
			// 	})
			// 	this.count = 0;
			// }
			// this.getHeight();

		},

		// 单击语音按钮的处理函数
		hoverYuYin() {
			this.showYuYin = !this.showYuYin;
		},
		// 获取焦点时触发
		handleFocus() {
			if (!this.isFocus) {
				this.isFocus = true;
			}
		},
		// 输入框失去焦点
		handleBlur() {
			this.isFocus = false;
		},
		
		// 表情按钮单击
		emojiBtnClick() {
			this.isShowEmoji = !this.isShowEmoji;
			this.isShowEmoji ? this.$refs.emoji.openEmoji() : this.$refs.emoji.cancelEmoji();
		},
		
		// 单击某个表情时的操作
		emojiAction(ev){
			var str;
			let emoji = ev.msg;
			if( ev ){
				str = this.inputInfo + emoji;
			}
			this.inputInfo = str;
		}, 
				
		// 单击加号时执行的操作
		hoverOption() {
			this.showOption = !this.showOption;
		},
		
		// 打开相机
		openCamera(){
			this.$refs.image.openCamera();
		},
		
		// 图片发送结束，隐藏操作框
		sendImageEnd(){
			this.showOption = false;
		},
		
		// 选择图片
		sendImage(){
			this.$refs.image.sendImage();
		},
	}
};
</script>

<style scoped>
.input-box {
	width: 100%;
	height: 100upx;
	padding: 10upx 33upx;
	border-top: 1px solid #dddddd;
	border-bottom: 1px solid #dddddd;
}
.input-img-box {
	width: 56upx;
	height: 56upx;
}
.input-img {
	width: 56upx;
	height: 56upx;
	border-radius: 100%;
}
.input {
	height: 72upx;
	border-radius: 36upx;
	background-color: #f9f9f9;
	padding: 0 20upx;
}
.send-btn {
	height: 56upx;
	padding: 0 10upx;
}
.option-box {
	height: 220upx;
}
.option-img-box {
	width: 120upx;
	height: 120upx;
	background: #e6e6e6;
	border: 1px solid rgba(230, 230, 230, 1);
	border-radius: 28upx;
	margin-left: 50upx;
}
.option-img {
	width: 60upx;
	height: 46upx;
}

/* 表情盒子 */
.emojiBox {
	height: 200px;
	padding: 0 30rpx;
	display: flex;
}
.emoji-cell {
	width: 12.5%;
	height: 33px;
	display: inline-block;
}
.touch-active {
	/* width: 92rpx;
	height: 92rpx;
	padding: 20rpx; */
	border-radius: 12rpx;
	font-size: 48rpx;
}
</style>
