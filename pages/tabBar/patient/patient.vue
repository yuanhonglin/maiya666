<template>
	<view>
		<view class="status_bar">
		         <!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<text class="t1">我的患者（250人）</text>
			<text class="iconfont t2">&#xe607;</text>
		</view>
		<view class="center">
			<input type="text" value="" placeholder="搜索更多"  placeholder-style="text-align:center;"/>
		</view>
		
		<view class="top flex justify-around">
			<view class="top-content" v-for="(item,index) in tabList" :key="index" @tap="gotonewuser(index)">
				<image :src="item.img" mode=""></image>
				<text>{{item.name}}</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	import pinyin from "../../../utils/Convert_Pinyin.js"
	export default {
		data() {
			return {
				tabList:[
					{
						img:'../../../static/imgs/taoci%20(139).png',
						name:'新患者',
					},
					{
						img:'../../../static/imgs/taoci%20(139).png',
						name:'会员列表',
					},
					{
						img:'../../../static/imgs/taoci%20(139).png',
						name:'分组',
					}
				],
			};
		},
		onLoad(){
			// console.log(pinyin)
		},
		onShow() {
			
		},
		methods:{
			gotonewuser(index){
				if(index==0){
					uni.navigateTo({
						url:"../../views/patient/newPaint"
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f7f7f7;
	}
 .status_bar {
	      height: var(--status-bar-height);
	      width: 100%;
	  }
	  .top{
		  text-align: center;
		  line-height: 80rpx;
		  position: relative;
		  .t1{
			  
		  }
		  .t2{
			  font-size: 40rpx;
			  position: absolute;
			  right: 60rpx;
		  }
	  }
	  .center{
		  background-color: #fff;
		  padding: 20rpx 0;
		  input{
			  width: 85%;
			  border: 1rpx solid #999;
			  border-radius: 30rpx;
			  margin: 0 auto;
			  padding: 10rpx 20rpx;
			  height: 68rpx;
			  background-color: #f7f7f7;
		  }
	  }
	  .top{
	  	padding: 30rpx;
	  	background-color: #fff;
	  	.top-content{
	  		display: flex;
	  		justify-content: center;
	  		flex-direction: column;
	  		align-items: center;
	  		image{
	  			width: 80rpx;
	  			height: 80rpx;
	  		}
	  		text{
	  			color: #333;
	  			font-size: 32rpx;
	  		}
	  	}
	  }
</style>
