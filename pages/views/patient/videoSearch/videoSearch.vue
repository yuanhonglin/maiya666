<template>
	<view class="video-page">
		<!-- 顶部导航 -->
		<!-- <uni-nav-bar :fixed="true" color="#333333" background-color="#FFFFFF">
			<view class="input-view">
				<uni-icons class="input-uni-icon" type="search" size="22" color="#999999" />
				<view class="input-placeholder">
					请输入关键字
				</view>
			</view>
		</uni-nav-bar> -->
		<!-- 顶部筛选项 -->
		<view class="nav-screening flex justify-around align-center">
			<view class="screening-item">
				<view class="select-item">
					<text class="item-title">窑口</text>
					<text class="iconfont">&#xe65b;</text>
				</view>
			</view>
			<view class="screening-item">
				<view class="select-item">
					<text class="item-title">年代</text>
					<text class="iconfont">&#xe65b;</text>
				</view>
			</view>
			<view class="screening-item">
				<view class="select-item">
					<text class="item-title">品种</text>
					<text class="iconfont">&#xe65b;</text>
				</view>
			</view>
		</view>
		
		<!-- 轮播和头条 -->
		<view class="swiper-toutiao">
			<!-- 轮播图 -->
			<view class="swiper-group">
				<swiper class="screen-swiper" :indicator-dots="false" :circular="true" :interval="4000" :duration="1000" :current="swiperCurrent"
				 @change="swiperChange">
					<swiper-item v-for="(swiperItem, swiperIndex) in 3" :key="swiperIndex">
						<view class="swiper-item">
							<image class="img" src="../../../static/imgs/taoci%20(10).png" mode=""></image>
						</view>
					</swiper-item>
				</swiper>
				<!-- 自定义dots -->
				<view class="dots">
					<view v-for="(dl, di) in 3" :key="di" class="dot" :class="di === swiperCurrent ? 'active' : ''" :data-current="di"
					 @tap="clickDot"></view>
				</view>
			</view>
		
			<!-- 滚动公告 -->
			<view class="toutiao-box">
				<view class="toutiao-icon">
					<image class="img" src="../../../static/image/toutiao_icon.png" mode=""></image>
				</view>
				<view class="notice-list">
					<view class="notice-left">
						<view class="notice-list-item">最新电影：复联终版4月24日即将上线！</view>
					</view>
					<view class="vip-btn">
						立即开通
					</view>
				</view>
		
			</view>
		</view>
		
		<!-- 免费视频 -->
		<view class="free-video video-box">
			<view class="video-title flex justify-between align-center">
				<view class="title">
					免费视频
				</view>
				<view class="more-btn" @tap="lookMore">
					更多>
				</view>
			</view>
		
			<view class="video-list">
				<block v-for="(item, index) in 3" :key="index">
					<videoItem></videoItem>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import videoItem from "@/components/tc-components/videoItem.vue"
	import uniIcons from '@/components/uniapp-components/uni-icons/uni-icons.vue'
	import uniNavBar from "@/components/uniapp-components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {
			uniNavBar,
			uniIcons,videoItem
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.video-page {
		padding-top: 44px;
		.input-view {
			display: flex;
			flex-direction: row;
			flex: 1;
			width: 686rpx;
			background-color: #F9FBFC;
			height: 37px;
			border-radius: 18.5px;
			padding: 0 16px;
			line-height: 37px;
			color: #999999;
			.input-placeholder{
				margin-left: 11px;
			}
		}
		
		.nav-screening{
			
			height: 112rpx;
			.screening-item{
				width: 33.33%;
				text-align: center;
				
				.select-item{
					display: inline-block;
					width:152rpx;
					height:56rpx;
					line-height: 56rpx;
					background:rgba(255,255,255,1);
					border:1px solid rgba(191,191,191,1);
					border-radius:28rpx;
				}
				
			}
		}
		
	}
</style>
