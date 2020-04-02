<template>
	<view class="nav">
		<!-- app导航条 -->
		<view class="nav-header">
			<!-- #ifdef APP-PLUS -->
			<view class="nav-placing"></view>
			<!-- #endif -->
			<view class="navbar">
				<view class="nav-back iconfont" @tap="navBack">&#xe620;</view>
				<view class="nav-title">
					<text class="iconfont">&#xe609;</text>
					<input class="search-input" v-model="keyword" type="text" placeholder="请输入城市名" placeholder-style="color:#999" />
				</view>
				<view class="nav-btn" @tap="searchBtn">搜索</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		title: {
			type: String
		},
		isShowRight: {
			type: Boolean,
			default: false
		},
		rightBtn: {
			type: String
		}
	},
	data() {
		return {};
	},
	methods: {
		aaaa() {
			uni.showToast({
				title: 'aaaaaaaa'
			});
		}
	}
};
</script>

<style lang="scss">
.nav {
	position: fixed;
	top: 0;
	width: 100%;
	color: #fff;
	overflow: hidden;
	background-color: #19c19b;
	.nav-placing {
		height: var(--status-bar-height);
		box-sizing: content-box;
	}
	.navbar {
		height: 88rpx;
		display: flex;
		align-items: center;
		position: relative;
		.nav-back {
			position: absolute;
			left: 24rpx;
		}
		.nav-title {
			width: 100%;
			text-align: center;
			font-size: 32rpx;
			font-weight: 500;
		}
		.nav-btn {
			height: 88rpx;
			display: flex;
			align-items: center;
			position: absolute;
			right: 24rpx;
			font-size: 28rpx;
		}
	}
}
</style>
