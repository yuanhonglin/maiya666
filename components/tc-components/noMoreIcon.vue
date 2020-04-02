<template>
	<view class="nomore" v-if="visible">
			<view class="icon">
				<image style="width: 260rpx;height: 248rpx;" :src="imgIcon" mode=""></image>
			</view>
			<view class="text-tip">
				{{text}}
			</view>
			<view class="look-other" v-if="type === 'collect'">
				<button class="btn" type="primary">看看其他商品</button>
			</view>
	</view>
</template>

<script>
	export default {
		props: {
			//是否可见
			visible: {
				type: Boolean,
				default: false
			},
			text: {
				type: String,
				default: "暂无数据"
			},
			type:{
				type: String,
				default: ""
			},
			imgIcon:{
				type: String,
				default: ''
			}
		},
		data() {
			return {
			};
		}
	}
</script>

<style lang="scss">
.nomore{
	position: fixed;
	top: 231rpx;
	left: 50%;
	transform: translateX(-50%);
	.icon{
		text-align: center;
	}
	.text-tip{
		text-align: center;
		margin-top: 40rpx;
		color: #666;
	}
	.look-other{
		margin-top: 130rpx;
		text-align: center;
		.btn{
			width:450rpx;
			height:88rpx;
			font-size:32rpx;
			font-weight:400;
			color:rgba(255,255,255,1);
			background:rgba(131,184,201,1);
			border-radius:44rpx;
		}
	}
}

</style>
