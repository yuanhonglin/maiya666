<template>
	<view>
		<view class="top flex">
			<image src="../../../static/image/tabbar/mine_select.png" mode=""></image>
			<view class="top-b flex justify-center">
				<text class="t1">个人头像</text>
				<text class="t2">(必填)</text>
			</view>
		</view>
		<view class="box">
			<view class="box-left">
				我的工作证
			</view>
			<view class="box-right">
				<text style="margin-right: 30rpx;color: #D53912;">待提交</text>
				<text class="iconfont">&#xe660;</text>
			</view>
		</view>
		<view class="box">
			<view class="box-left">
				医师资格证
			</view>
			<view class="box-right">
				<text style="margin-right: 30rpx;color: #D53912;">待提交</text>
				<text class="iconfont">&#xe660;</text>
			</view>
		</view>
		<button @tap="next" class="b" type="primary">提交认证</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #f7f7f7;
	}
.top{
	margin: 20rpx 0;
	flex-direction: column;
	justify-content: center;
	background-color: #fff;
	padding: 30rpx 0;
	image{
		width: 170rpx;
		height: 170rpx;
		margin:0 auto;
	}
	.top-b{
		margin-top: 20rpx;
		.t1{
			
		}
		.t2{
			font-size: 28rpx;
			color: #333;
		}
	}
}
.box{
	width: 100%;
	background-color: #fff;
	padding: 0 30rpx;
	margin: 0 auto;
	font-size: 30rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	line-height: 80rpx;
	border-bottom: 1rpx solid #f4f4f4;
	.box-left{
		width: 30%;
	}
	.box-right{
		width: 70%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		color: #999;
	}
}.b{
	position: fixed;
	bottom: 0;
		width: 100%;
		margin: 30rpx auto;
		background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
	}
</style>
