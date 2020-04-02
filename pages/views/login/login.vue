<template>
	<view>
		<view class="tab">
			<view class="tab-item" v-for="(item,index) in tabList" :key="index" @tap="tabLick(index)">
				<text  :class="num==index?'textactive':''">{{item.name}}</text>
				<view :class="index==0?'active':''"></view>
			</view>
		</view>
		<view class="" v-if="num==0">
			<view class="ipt">
				<text>手机号</text>
				<input type="text" maxlength="11" v-model="phone" placeholder="请输入手机号" />
			</view>
			<view class="ipt">
				<text>密码</text>
				<input type="text"  maxlength="12" v-model="passWord" placeholder="请输入密码" />
			</view>
			<view @tap="wangjimima" class="ipt" style="margin-top: 0; font-size: 24rpx;color: #126F93;text-decoration: underline;">
				忘记密码?
			</view>
		</view>
		<view class="" v-if="num==1">
			<view class="ipt">
				<text>手机号</text>
				<view class="flex justify-between align-center" style="border-bottom: 1rpx solid #f1f1f1;">
					<input type="text" value="" placeholder="请输入手机号" />
					<text>获取验证码</text>
				</view>
			</view>
			<view class="ipt">
				<text>验证码</text>
				<input type="text" value="" placeholder="请输入密验证码" />
			</view>
			<view class="ipt" style="height: 32rpx; margin-top: 0; font-size: 24rpx;color: #126F93;text-decoration: underline;">
				
			</view>
		</view>
		<button @tap="gotodenglu" class="b" type="primary">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:0,
				tabList:[
					{
						name:'密码登录',
						value:0,
					},
					{
						name:'验证码登录',
						value:1,
					}
				],
				phone:'',
				passWord:'',
			};
		},
		methods:{
			tabLick(index){
				this.num=index
			},
			wangjimima(){
				uni.navigateTo({
					url:'./forgetPassword'
				})
			},
			gotodenglu(){
				var a=this.$tool.testPhone(this.phone)
				var b=this.$tool.testPassWord(this.passWord)
				if(!a){
					uni.showToast({
						title:"请输入正确的手机号",
						icon:"none"
					})
					return
				}
				if(!b){
					uni.showToast({
						title:"按照格式输入密码",
						icon:"none"
					})
					return
				}
				let data={
					phone:this.phone,
					password:this.passWord,
				}
				if(a&b){
					this.$http.login(data).then(res=>{
						if(res.code==200){
							// 自动登录环信
							let options = {
								apiUrl: this.$im.config.apiURL,
								user: this.phone, // 当前登录用户的hxid 用于登录环信im
								pwd: "123456",
								appKey: this.$im.config.appkey
							};
							console.log(options);
							this.$im.conn.open(options);
							uni.setStorageSync('myUsername',this.phone );
							uni.setStorageSync('userInfo',res.data);
							
							
							uni.showToast({
								title:res.msg,
								icon:"none"
							})
							setTimeout(function(){
								uni.switchTab({
									url:"../../tabBar/index/index"
								})
							},400)
							uni.setStorageSync('isLogin',true);
						}else{
							uni.showToast({
								title:res.msg,
								icon:"none"
							})
						}
					})	
				}
			}
		}
	}
</script>

<style lang="scss">
.tab{
	width: 90%;
	margin: 50rpx auto;
	display: flex;
	font-size: 34rpx;
	.tab-item{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.active{
			width: 4rpx;
			height: 30rpx;
			background-color: #333;
			margin: 0 30rpx;
			// border-right: 10rpx solid #333;
		}
		text{
			color: #999;
		}
		.textactive{
			color: #000;
		}
	}
}
.ipt{
	width: 90%;
	margin: 50rpx auto;
	text{
		font-size: 24rpx;
		color: #666;
	}
	input{
		height: 80rpx;
		line-height: 80rpx;
		// padding-bottom: 20rpx;
		// border-bottom: 1rpx solid #f1f1f1;
	}
}
.b{
		width: 90%;
		margin: 30rpx auto;
		background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
	}
</style>
