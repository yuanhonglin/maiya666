<template>
	<view class="uni-modal-box">
		<view class="uni-mask"></view>
		<view class="uni-modal">
			<view class="uni-modal__hd"><strong class="uni-modal__title">提示</strong></view>
			<view class="uni-modal__bd">
				<view class="input-box">
					<input type="password" v-model="password" maxlength="6" placeholder="请六位支付密码" placeholder-style="color:#ccc;font-size:32rpx;" />
				</view>
				<view class="forget-box">
					<view class="setting-psw fl" v-if="user_money_passwd" @tap="settingPsw">设置支付密码</view>
					<view class="fr" @tap="forgetPsw">忘记密码</view>
				</view>
			</view>
			<view class="uni-modal__ft">
				<view class="uni-modal__btn uni-modal__btn_default" @tap="BtnCancel">{{ cancelBtn }}</view>
				<view class="uni-modal__btn uni-modal__btn_primary" @tap="BtnConfirm">{{ primaryBtn }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		contentText: {
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
		user_money_passwd: {
			type: String,
			default: null
		}
	},
	data() {
		return {
			password: ''
		};
	},
	methods: {
		BtnCancel() {
			this.$emit('cancel', false);
		},
		BtnConfirm(e) {
			this.$emit('confirm', this.password);
		},
		forgetPsw(e) {
			this.$emit('forgetPsw');
		},
		settingPsw(e) {
			this.$emit('settingPsw');
		}
	}
};
</script>

<style lang="scss">
/* 重置uni-app弹框样式 */
.uni-modal-box {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 999;
	display: block;
	box-sizing: border-box;
	z-index: 1200 !important;
	.uni-mask {
		position: fixed;
		z-index: 1300;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
	}
	.uni-modal {
		position: fixed !important;
		z-index: 1300 !important;
		width: 80% !important;
		max-width: 300px !important;
		top: 50% !important;
		left: 50% !important;
		-webkit-transform: translate(-50%, -50%) !important;
		transform: translate(-50%, -50%) !important;
		background-color: #fff !important;
		text-align: center !important;
		border-radius: 3px !important;
		overflow: hidden !important;
	}
	.uni-modal__hd {
		padding: 1em 1.6em 0.3em !important;
	}
	.uni-modal__title {
		font-weight: 400 !important;
		font-size: 18px !important;
		word-wrap: break-word !important;
		word-break: break-all !important;
		overflow: hidden !important;
		text-overflow: ellipsis !important;
		display: -webkit-box !important;
		-webkit-line-clamp: 2 !important;
		-webkit-box-orient: vertical !important;
	}
	.uni-modal__bd {
		padding: 1.3em 1.6em 1.3em !important;
		min-height: 40px !important;
		font-size: 15px !important;
		line-height: 1.4 !important;
		word-wrap: break-word !important;
		word-break: break-all !important;
		color: #999 !important;
		max-height: 400px !important;
		overflow-y: auto !important;
		.input-box {
			input {
				border: 2rpx solid #d5d5d6;
				border-radius: 6rpx;
				height: 80rpx;
				line-height: 80rpx;
			}
		}
		.forget-box {
			overflow: hidden;
			font-size: 24rpx;
			margin-top: 16rpx;
			.setting-psw {
				color: #f00;
			}
		}
	}
	.uni-modal__ft {
		position: relative !important;
		line-height: 48px !important;
		font-size: 18px !important;
		display: -webkit-box !important;
		display: -webkit-flex !important;
		display: flex !important;
	}
	.uni-modal__btn {
		display: block !important;
		-webkit-box-flex: 1 !important;
		-webkit-flex: 1 !important;
		flex: 1 !important;
		color: #3cc51f !important;
		text-decoration: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
		position: relative !important;
	}
	.uni-modal__btn_default {
		color: #353535 !important;
	}
	.uni-modal__btn_primary {
		color: red !important;
	}
	.uni-modal__btn:after {
		content: ' ' !important;
		position: absolute !important;
		left: 0 !important;
		top: 0 !important;
		width: 1px !important;
		bottom: 0 !important;
		border-left: 1px solid #d5d5d6 !important;
		color: #d5d5d6 !important;
		-webkit-transform-origin: 0 0 !important;
		transform-origin: 0 0 !important;
		-webkit-transform: scaleX(0.5) !important;
		transform: scaleX(0.5) !important;
	}
	.uni-modal__ft:after {
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
/* 重置uni-app弹框样式 结束 */
</style>
