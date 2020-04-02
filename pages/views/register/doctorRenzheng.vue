<template>
	<view>
		<view class="box">
			<view class="box-left">
				真实姓名
			</view>
			<view class="box-right">
				<text>哈哈哈</text>
				<text class="iconfont">&#xe660;</text>
			</view>
		</view>
		<view class="box">
			<view class="box-left">
				性别
			</view>
			<view class="box-right" @tap="changeSex">
				<text>男</text>
				<text class="iconfont">&#xe660;</text>
			</view>
		</view>
		<view class="box">
			<view class="box-left">
				医院
			</view>
			<view class="box-right">
				<text>哈哈哈</text>
				<text class="iconfont">&#xe660;</text>
			</view>
		</view>
		<view class="box">
			<view class="box-left">
				科室
			</view>
			<view class="box-right">
				<text>哈哈哈</text>
				<text class="iconfont">&#xe660;</text>
			</view>
		</view>
		<view class="box">
			<view class="box-left">
				职称
			</view>
			<view class="box-right">
				<text>哈哈哈</text>
				<text class="iconfont">&#xe660;</text>
			</view>
		</view>
		<view class="box">
			<view class="box-left">
				医生资质
			</view>
			<view class="box-right" @tap="gotoZiZhi">
				<text>哈哈哈</text>
				<text class="iconfont">&#xe660;</text>
			</view>
		</view>
		<button @tap="next" class="b" type="primary">提交认证</button>
		<w-picker 
		    v-if="selectList.length!=0"
		    mode="selector" 
		    defaultVal="女" 
		    @confirm="onConfirm" 
		    ref="selector" 
		    themeColor="#f00"
		    :selectList="selectList"
		></w-picker >
	</view>
</template>

<script>
	import wPicker from '@/components/uniapp-components/w-picker/w-picker.vue'
	export default {
		components:{
			wPicker
		},
		data() {
			return {
				selectList:[
					{
						label:'男',
						value:1,
					},
					{
						label:"女",
						value:2,
					}
				]
			}
		},
		methods: {
			changeSex(){
				this.$refs.selector.show()
			},
			onConfirm(e){
				console.log(e)
			},
			gotoZiZhi(){
				uni.navigateTo({
					url:'./doctorZiZhi'
				})
			},
			next(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.box{
	width: 90%;
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
		justify-content: space-between;
		align-items: center;
		color: #999;
	}
}
.b{
	position: fixed;
	bottom: 0;
		width: 100%;
		margin: 30rpx auto;
		background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
	}
</style>
