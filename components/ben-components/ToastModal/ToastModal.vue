
<template>
	<view class="modal-box" v-if="show">
		<view class="mask" @tap="clickMask"></view>
		<view class="modal">
			<view class="modal__hd" v-if="title"><strong class="modal__title">{{title}}</strong></view>
			<view class="modal__bd">{{content}}</view>
			<view class="modal__ft">
				<view class="modal__btn modal__btn_default" :style="'color: '+cancelColor" @tap="cancel">{{cancelBtn}}</view>
				<view class="modal__btn modal__btn_primary" :style=" 'color:'+ primaryColor" @tap="confirm">{{primaryBtn}}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props:{
		show:{
			type: Boolean,
			default: false
		},
		title:{
			type: String,
			default: '提示'
		},
		content: {
			type: String,
			default: ''
		},
		cancelBtn: {
			type: String,
			default: '取消'
		},
		primaryBtn: {
			type: String,
			default: '确定'
		},
		primaryColor:{
			type:String,
			default:'#ff0000'
		},
		cancelColor:{
			type:String,
			default:'#666666'
		}
	},
	data() {
		return {};
	},
	methods:{
		// cancel(){
		// 	// this.$emit("cancel", false);
		// },
		// confirm(e){
		// 	// this.$emit("confirm", true);
		// },
		// clickMask(){
		// 	// this.$emit('closeMask',false)
		// }
	}
};
</script>

<style lang="scss">
/* 重置app弹框样式 */
.modal-box {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 999;
	display: block;
	box-sizing: border-box;
	z-index: 1200;
	.mask {
		position: fixed;
		z-index: 1300;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
	}
	.modal {
		position: fixed;
		z-index: 1300;
		width: 80%;
		max-width: 300px;
		top: 45%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		background-color: #fff;
		text-align: center;
		border-radius: 3px;
		overflow: hidden;
	}
	.modal__hd {
		padding: 1em 1.6em 0.3em;
	}
	.modal__title {
		font-weight: 400;
		font-size: 18px;
		word-wrap: break-word;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.modal__bd {
		padding: 1.3em 1.6em 1.3em;
		min-height: 40px;
		font-size: 15px;
		line-height: 1.4;
		word-wrap: break-word;
		word-break: break-all;
		color: #999;
		max-height: 400px;
		overflow-y: auto;
	}
	.modal__ft {
		position: relative;
		line-height: 48px;
		font-size: 18px;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
	}
	.modal__btn {
		display: block;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		color: #3cc51f;
		text-decoration: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		position: relative;
	}
	.modal__btn_default {
		// color: #353535;
	}
	.modal__btn_primary {
		color: red;
	}
	.modal__btn:after {
		content: ' ';
		position: absolute;
		left: 0;
		top: 0;
		width: 1px;
		bottom: 0;
		border-left: 1px solid #d5d5d6;
		color: #d5d5d6;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scaleX(0.5);
		transform: scaleX(0.5);
	}
	.modal__ft:after {
		content: ' ';
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		height: 1px;
		border-top: 1px solid #d5d5d6;
		color: #d5d5d6;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
}
/* 重置app弹框样式 结束 */
</style>