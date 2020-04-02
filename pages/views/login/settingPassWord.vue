<template>
	<view>
		<view class="top">
			18203641939
		</view>
		<view class="bottom flex justify-between">
			<input type="number" value="" placeholder="新密码" />
			<text class="iconfont">&#xe60a;</text>
		</view>
		<view class="bottom flex justify-between">
			<input type="number" value="" placeholder="确认新密码" />
			<text class="iconfont">&#xe60a;</text>
		</view>
		<button @tap="next" class="b" type="primary">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			next(){
				uni.navigateTo({
					url:'./settingPassWord'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.top{
	margin: 30rpx ;
	font-size: 38rpx;
}
.bottom{
	width: calc(100% - 60rpx);
	margin: 20rpx auto;
	position: relative;
	input{
		width: 100%;
		height: 60rpx;
		padding-bottom: 20rpx;
		border-bottom: 1rpx solid #f1f1f1;
	}
	text{
		font-size: 32rpx;
		position: absolute;
		right: 0;
	}
}
.b{
		width: 90%;
		margin: 30rpx auto;
		background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
	}
</style>
