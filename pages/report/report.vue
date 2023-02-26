<template>
  <view class="status_bar"></view>

  <view class="container">
    <view class="page">
      <uni-segmented-control
        :current="current"
        :values="items"
        @clickItem="onClickItem"
        styleType="button"
        activeColor="#dd524d"
      ></uni-segmented-control>
      {{ current }}
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(['周视图', '月视图', '年视图']);
const current = ref(0);
const onClickItem = (item) => {
  current.value = item.currentIndex;
};
</script>

<style lang="scss">
.page {
  margin: 10rpx;
}
</style>
