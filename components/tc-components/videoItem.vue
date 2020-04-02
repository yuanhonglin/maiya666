<template>
	<view class="video-item">
		<view class="video-cover-img">
			<image class="img" src="/static/imgs/taoci%20(1).png"></image>
			<text class="vip-icon">VIP</text>
		</view>
		<view class="video-info">
			<view class="video-title oneline">
				babycare婴儿推车 新生儿轻便可坐可躺 折叠宝车手推…
			</view>
			<view class="video-birfe oneline">
				宝宝加绒学步鞋女冬季1-3岁软底防滑鞋2岁小童保暖宝宝加绒学步鞋…
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	

	.video-item {
		width: 330rpx;
		padding-bottom: 32rpx;
		.video-cover-img {
			position: relative;
			.img {
				display: block;
				width: 330rpx;
				height: 200rpx;
				border-radius: 8rpx;
			}
			.vip-icon{
				position: absolute;
				top: 18rpx;
				right: 16rpx;
				width:66rpx;
				background:rgba(220,175,90,1);
				border-radius:20px;
				height:33rpx;
				font-size:24rpx;
				font-weight:500;
				text-align: center;
				line-height:33rpx;
				color:rgba(255,255,255,1);
			}
		}
		
		.video-info{
			width: 100%;
			.video-title{
				font-size:28px;
				font-weight:500;
				color:rgba(51,51,51,1);
				margin-top: 12rpx;
			}
			
			.video-birfe{
				font-size:24rpx;
				font-weight:400;
				color:rgba(153,153,153,1);
				margin-top: 8rpx;
			}
		}
	}
</style>
