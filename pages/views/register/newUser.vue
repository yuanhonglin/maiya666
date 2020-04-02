<template>
	<view>
		<view class="top flex justify-center">
			<image src="../../../static/image/512.png" mode=""></image>
		</view>
		<view class="btn">
			<button @tap="gotodenglu" class="b" type="primary">登录</button>
			<button @tap="gotozhuce" class="btn1" type="primary">注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			gotozhuce(){
				uni.navigateTo({
					url:"./settingCode"
				})
			},
			gotodenglu(){
				uni.navigateTo({
					url:'../login/login'
				})
				// if( uni.getStorageSync("myUsername")){
				// 	uni.switchTab({
				// 		url:"../../tabBar/index/index"
				// 	})
				// 	return
				// }
				// let options = {
				// 	apiUrl: this.$im.config.apiURL,
				// 	user: "18203641938", // 当前登录用户的hxid 用于登录环信im
				// 	pwd: "123456",
				// 	appKey: this.$im.config.appkey
				// };
				// uni.setStorage({
				//     key: 'myUsername',
				//     data: '18203641938',
				//     success: function () {
				//         console.log('保存本地的环信id成功');
				//     }
				// });
				// this.$im.conn.open(options);
				// uni.switchTab({
				// 	url:"../../tabBar/index/index"
				// })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top{
		image{
			width: 400rpx;
			height: 400rpx;
			margin-top: 100rpx;
		}
	}
.btn{ 
	.b{
		width: 90%;
		margin: 30rpx auto;
		background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
	}
	.btn1{
		width: 90%;
		margin: 30rpx auto;
		background-color: #fff;
		border: 2rpx solid #999;
		color: #333;
	}
}
</style>
