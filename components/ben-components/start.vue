<template>
  <view class="star-box">
    <view class="star-back">
		<image class="star-img" :class="i !== 4?'margin-right':''" v-for="(n ,i) in total" :key="i" src="/static/image/icon_pingjia@2x.png" @tap="starClick(n)"></image>
    </view>
    <view class="star-front" :style="widthStar">
		<image class="star-img" :class="i !== 4?'margin-right':''" v-for="(n ,i) in total" :key="i" src="/static/image/icon_pingjia_pr@2x.png" @tap="starClick(n)"></image>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    // 总共几个星星
    total: {
      default: 5,
      type: Number
    },
    // 选中了几个
    value: {
      type: Number
    }
  },
  data () {
    return {
      widthStar: ''
    }
  },
  computed: {

  },
  components: {},
  methods: {
    frontStyle: function (num) {
      var w = 40 * (num + num -1)
      this.widthStar = 'width:' + w + 'rpx'
    },
    starClick: function (n) {
      this.$emit('StarClick', n)
      this.frontStyle(n)
    }
  },
  mounted () {}
}

</script>
<style lang='scss'>
.star-box {
  position: relative;
  height: 40rpx;
  width: 320rpx;
  .star-back {
    position: absolute;
  }
  .star-front {
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
  }
  .star-img {
    width: 40rpx;
    height: 40rpx;
    /* -moz-user-select: none; */
    cursor: pointer;
  }
  .margin-right{
	  margin-right: 30rpx;
  }
}



</style>
