<template>
	<view>
		<view class="box">
			<view class="box-left">
				<view class="box-left-item">
					<text class="t1">患者A</text>
					<text>28岁</text>
				</view>
				<view class="box-left-item">
					<text class="t1">昵称</text>
					<text>患者A</text>
				</view>
				<view class="box-left-item">
					<text class="t1">电话</text>
					<text>18203641939</text>
				</view>
				<view class="box-left-item">
					<text class="t1">地区</text>
					<text>河南.郑州</text>
				</view>
			</view>
			<view class="box-right">
				<image src="../../../static/imgs/taoci%20(158).png" mode=""></image>
			</view>
		</view>
		<view class="bot">
			<view class="bot-son">
				发送消息
			</view>
			<view class="bot-son">
				查看档案
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f7f7f7;
}
.box{
	background-color: #fff;
	padding: 30rpx;
	display: flex;
	justify-content: space-between;
	.box-left{
		width: 70%;
		.box-left-item{
			margin-top: 20rpx;
			.t1{
				margin-right: 20rpx;
			}
		}
	}
	.box-right{
		image{
			width: 120rpx;
			height: 120rpx;
			border-radius: 30rpx;
		}
	}
}
.bot{
	position: fixed;
	bottom: 100rpx;
	width: 100%;
	display: flex;
	justify-content: space-around;
	.bot-son{
		width: 40%;
		line-height: 70rpx;
		background-color: #007AFF;
		text-align: center;
		color: #fff;
		border-radius: 10rpx;
	}
}
</style>
