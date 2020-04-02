<template>
	<view>
		<canvas canvas-id="qrcode" style="width: 215px;height: 215px;margin: 100rpx auto;" />
		<button type="default" @tap="shengc">生成我的二维码</button>
		<button type="default" @tap="share">分享给好友</button>
	</view>
</template>

<script>
import uQRCode  from '@/components/uqrcode.js';
export default {
	data() {
		return {
			canImg:'',
		};
	},
	onLoad() {
		
		// this.$http.getUrl({doctor:uni.getStorageSync('myUsername')}).then(res=>{
		// 	console.log(res)
		// })
	},
	methods:{
		shengc(){
			
			this.make()
		},
		 make() {
		      uQRCode.make({
		        canvasId: 'qrcode',
		        componentInstance: this,
		        text:'http://wechat.maiyayisheng.com/index.php/index/Doctors/invitation?doctor='+uni.getStorageSync('myUsername'),
		        size: 215,
		        margin: 10,
		        backgroundColor: '#ffffff',
		        foregroundColor: '#000000',
		        fileType: 'jpg',
		        correctLevel: uQRCode.defaults.correctLevel,
		        success: res => {
		          console.log(res)
				  this.canImg=res
		        }
		      })
		    },
			share(){
				// plus.share.sendWithSystem({type:'img',content:this.canImg,href:this.canImg}, function(){
				// 		console.log('分享成功');
				// 	}, function(e){
				// 		console.log('分享失败：'+JSON.stringify(e));
				// 	});
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 2,
				    imageUrl: this.canImg,
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			}
	}
};
</script>

<style lang="scss"></style>
