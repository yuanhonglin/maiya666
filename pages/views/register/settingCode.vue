<template>
	<view>
		<view class="bottom flex justify-between">
			<input type="number" v-model="phone" maxlength="11" placeholder="手机号" />
			<text v-if="phone" class="iconfont" @tap="del" >&#xe60a;</text>
		</view>
		<!-- <view class="bottom flex justify-between">
			<input type="number" value="" placeholder="您的姓名" />
			<text class="iconfont">&#xe60a;</text>
		</view> -->
		<view class="bottom flex justify-between">
			<input type="number" v-model="passWord" maxlength="12" placeholder="6-12位字母数字组合" />
			<text v-if="passWord" class="iconfont" @tap="delete1">&#xe60a;</text>
		</view>
		<button @tap="next" class="b" type="primary">注册</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:'',
				passWord:''
			}
		},
		methods: {
			next(){
				// uni.navigateTo({
				// 	url:'./doctorRenzheng'
				// })
				var a=this.$tool.testPhone(this.phone)
				var b=this.$tool.testPassWord(this.passWord)
				console.log(this.$tool.testPhone(this.phone))
				console.log(this.$tool.testPassWord(this.passWord))
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
				if(a&&b){
					this.$http.register(data).then(res=>{
						console.log(res.code)
						if(res.code==200){
							uni.showToast({
								title:res.msg,
								icon:"none"
							})
							setTimeout(function(){
								uni.navigateTo({
									url:"../login/login"
								})
							},400)
						}else{
							uni.showToast({
								title:res.msg,
								icon:"none"
							})
						}
					})
				}
			},
			del(){
				this.phone=""
			},
			delete1(){
				this.passWord=""
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
