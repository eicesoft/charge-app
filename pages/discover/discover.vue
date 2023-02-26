<template>
  <view style="height: 100%;">
    <view style="height: 400rpx;"> xxxxxxxx</view>
    <view style="background-color: #cccccc;">
      <scroll-view
        :scroll-top="scrollTop"
        scroll-y="true"
        class="scroll-Y"
        @scrolltoupper="upper"
        @scrolltolower="lower"
        @scroll="scroll"
      >
        <view id="demo1" class="scroll-view-item uni-bg-red">A</view>
        <view id="demo2" class="scroll-view-item uni-bg-green">B</view>
        <view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
      old: {
        scrollTop: 0,
      },
    };
  },
  methods: {
    upper(e) {
      console.log(e);
    },
    lower(e) {
      console.log(e);
    },
    scroll(e) {
      console.log(e);
      this.old.scrollTop = e.detail.scrollTop;
    },
    goTop(e) {
      this.scrollTop = this.old.scrollTop;
      this.$nextTick(function() {
        this.scrollTop = 0;
      });
      uni.showToast({
        icon: 'none',
        title: '纵向滚动 scrollTop 值已被修改为 0',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-Y {
  height: calc(100vh - 500rpx);
}

.scroll-view_H {
  white-space: nowrap;
  width: 100%;
}

.scroll-view-item {
  height: 500rpx;
  line-height: 500rpx;
  text-align: center;
  font-size: 36rpx;
}
</style>
