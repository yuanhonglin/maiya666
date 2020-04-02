<template>
	<view>
		<view class="box" @tap="gotodetail">
			<view class="box-left">
				<image class="img1" src="../../../static/imgs/taoci%20(138).png" mode=""></image>
				<view class="box-left-name">
					<text>灰色巴黎</text>
					<image src="../../../static/image/qq_zero.png" mode=""></image>
				</view>
			</view>
			<view class="box-right">
				<text>18天前</text>
			</view>
		</view>
		<view class="box">
			<view class="box-left">
				<image class="img1" src="../../../static/imgs/taoci%20(138).png" mode=""></image>
				<view class="box-left-name">
					<text>灰色巴黎</text>
					<image src="../../../static/image/qq_zero.png" mode=""></image>
				</view>
			</view>
			<view class="box-right">
				<text>18天前</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			gotodetail(){
				uni.navigateTo({
					url:"./userPaintDetail"
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f7f7f7;
}
.box{
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	padding: 20rpx;
	border-bottom: 1rpx solid #f7f7f7;
	.box-left{
		display: flex;
		.img1{
			margin-right: 20rpx;
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
		}
		.box-left-name{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			text{
				
			}
			image{
				width: 20rpx;
				height: 20rpx;
			}
		}
	}
	.box-right{
		text{
			font-size: 24rpx;
			color: #999;
		}
	}
}
</style>
