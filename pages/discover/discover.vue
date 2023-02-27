<template>
  <view class="status_bar"></view>
    
  <view class="container">
    <view class="header">头部</view>
    <view class="body">
      <view class="item" v-for="index in count" :key="index">
        <view class="item-top">测试数据的标题</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      count: 200,
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.header {
  height: 200rpx;
  background-color: $header_bg_color;
  color: $text-color;
  box-sizing: border-box;
}

.body {
  background: #ececec;
  overflow: auto;
  height: calc(100% - 200rpx);
}
</style>
