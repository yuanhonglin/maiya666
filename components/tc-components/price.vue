<template>
	<view class="m-price">
		<view class="danwei" :style="'font-size:'+  danweiSize + 'rpx;color:' + danweiColor">￥</view>
		<view class="price" :style="'font-size:'+  priceSize + 'rpx;color:' + priceColor">{{price}}</view>
	</view>
</template>

<script>
	export default {
		name: "mPrice",
		props:{
			price:{
				type: Number
			},
			danweiSize:{
				type: Number,
				default: 24
			},
			priceSize:{
				type: Number,
				default: 36
			},
			danweiColor:{
				type: String,
				default: '#FB7652'
			},
			priceColor:{
				type: String,
				default: '#FB7652'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.m-price{
		.danwei{
			display: inline-block;
			position: relative;
			/* top: 4rpx; */
			// color: #FB7652;
			// font-size: 24rpx;
			font-weight:bold;
		}
		.price{
			display: inline-block;
			// color: #FB7652;
			// font-size: 36rpx;
			font-weight:bold;
		}
	}
	
</style>
