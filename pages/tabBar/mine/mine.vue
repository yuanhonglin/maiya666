<template>
	<view>
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		<view class="top">
			<view class="top-left">
				<image class="img1" src="../../../static/imgs/taoci%20(137).png" mode=""></image>
				<text>dasdasda</text>
			</view>
			<image class="img2" src="../../../static/image/shezhi.png" mode=""></image>
		</view>
		<view class="paint">
			<view class="paint-num">
				<text class="t1">666</text>
				<text class="t2">患者</text>
			</view>
			<!-- <view class="paint-num" style="width:2rpx;background-color: #f7f7f7;">
				
			</view> -->
			<view class="paint-num">
				<text class="t1">666</text>
				<text class="t2">评价</text>
			</view>
		</view>
		<view class="item">
			<text class="t1">健康档案</text>
			<text class="iconfont t2">&#xe660;</text>
		</view>
		<view class="item">
			<text class="t1">邀请医生</text>
			<text class="iconfont t2">&#xe660;</text>
		</view>
		<view class="item">
			<text class="t1">使用教程</text>
			<text class="iconfont t2">&#xe660;</text>
		</view>
		<button @tap="clear" type="default">清除缓存</button>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		clear() {
			uni.showModal({
				title: '',
				content: '确定清除本地缓存',
				success: res => {
					if (res.confirm) {
						uni.clearStorage();
						uni.showToast({
							title: '清除成功'
						});
					} else if (res.cancel) {
					}
				}
			});
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #f7f7f7;
}
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
}
.top {
	padding: 80rpx 50rpx;
	background-color: #fff;
	// width: 90%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	.top-left {
		display: flex;
		justify-content: center;
		align-items: center;
		.img1 {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			margin-right: 30rpx;
		}
		text {
		}
	}
	.img2 {
		width: 60rpx;
		height: 60rpx;
	}
}
.paint {
	display: flex;
	justify-content: space-around;
	background: #fff;
	border-top: 10px solid #f7f7f7;
	border-bottom: 10px solid #f7f7f7;
	padding: 20rpx 0;
	.paint-num {
		display: flex;
		flex-direction: column;
		.t1 {
			font-size: 34rpx;
			color: #333;
			margin: 20rpx;
		}
		.t2 {
			font-size: 34rpx;
			color: #333;
			text-align: center;
		}
	}
}
.item{
	padding: 40rpx 30rpx;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 5rpx solid #f7f7f7;
	.t1{
		font-size: 34rpx;
		color: #333;
	}
	.t2{
		
	}
}
</style>
