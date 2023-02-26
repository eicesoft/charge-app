<template>
  <view class="status_bar"></view>
  <view class="container">
    <view class="header">
      <view class="title">小冰记账</view>

      <view class="top-bar">
        <view class="col" @click="handleShow">
          <view class="col-top">{{ activeYear }}年</view>
          <view class="col-buttom">{{ activeMonth }}月</view>
        </view>

        <view class="col2">
          <view class="col-top">收入</view>
          <view class="col-buttom">0</view></view
        >
        <view class="col2">
          <view class="col-top">支出</view> <view class="col-buttom">0</view>
        </view>
      </view>

      <SelectMonth
        @confirm="confirmDate"
        :disabledDate="disabledDate"
        v-model="state.month"
        v-model:visible="state.visible"
      />
    </view>

    <view style="margin-top:40px">
      <view class="record-group">
        <view class="record-title">
          <view>02月25日 星期六</view><view>支出: 78</view></view
        >

        <view class="record-item">
          <view class="record-class">礼金</view> <view>-72</view>
        </view>

        <view class="record-item">
          <view class="record-class">医疗</view> <view>-24</view>
        </view>
      </view>

      <view class="record-group">
        <view class="record-title">
          <view>02月25日 星期五</view><view>支出: 78</view></view
        >

        <view class="record-item">
          <view class="record-class">礼金</view> <view>-72</view>
        </view>

        <view class="record-item">
          <view class="record-class">医疗</view> <view>-24</view>
        </view>
      </view>

      <view class="record-group">
        <view class="record-title">
          <view>02月25日 星期五</view><view>支出: 78</view></view
        >

        <view class="record-item">
          <view class="record-class">礼金</view> <view>-72</view>
        </view>

        <view class="record-item">
          <view class="record-class">医疗</view> <view>-24</view>
        </view>
      </view>

      <view class="record-group">
        <view class="record-title">
          <view>02月25日 星期五</view><view>支出: 78</view></view
        >

        <view class="record-item">
          <view class="record-class">礼金</view> <view>-72</view>
        </view>

        <view class="record-item">
          <view class="record-class">医疗</view> <view>-24</view>
        </view>
      </view>

      <view class="record-group">
        <view class="record-title">
          <view>02月25日 星期五</view><view>支出: 78</view></view
        >

        <view class="record-item">
          <view class="record-class">礼金</view> <view>-72</view>
        </view>

        <view class="record-item">
          <view class="record-class">医疗</view> <view>-24</view>
        </view>
      </view>

      <view class="record-group">
        <view class="record-title">
          <view>02月25日 星期五</view><view>支出: 78</view></view
        >

        <view class="record-item">
          <view class="record-class">礼金</view> <view>-72</view>
        </view>

        <view class="record-item">
          <view class="record-class">医疗</view> <view>-24</view>
        </view>
      </view>

      <view class="record-group">
        <view class="record-title">
          <view>02月25日 星期五</view><view>支出: 78</view></view
        >

        <view class="record-item">
          <view class="record-class">礼金</view> <view>-72</view>
        </view>

        <view class="record-item">
          <view class="record-class">医疗</view> <view>-24</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { reactive, computed } from 'vue';
import SelectMonth from '@/components/select-month';

const state = reactive({
  month: '',
  visible: false,
});

const disabledDate = (year, month) => {
  const date = new Date();
  if (year > date.getFullYear()) {
    return true;
  }
  if (year === date.getFullYear() && month > date.getMonth() + 1) {
    return true;
  }
  return false;
};

const activeMonth = computed(() => {
  return state.month.substring(5);
});

const activeYear = computed(() => {
  return state.month.substring(0, 4);
});

const handleShow = () => {
  console.log('handleShow');
  state.visible = true;
};

const confirmDate = (x) => {
  console.log(x);
};
</script>

<style lang="scss">
.container {
  .title {
    font-size: 30rpx;
    text-align: center;
    padding: 8px 0;
  }
  .header {
    background-color: $header_bg_color;
    color: $text-color;
    // position: fixed;
    // top: 0;
    // left: 0;
    width: 100%;
    .top-bar {
      display: flex;
      padding: 20rpx 0;
      .col-top {
        font-size: 28rpx;
      }
      .col-buttom {
        font-size: 44rpx;
      }
      .col {
        width: 30%;
        text-align: center;
      }
      .col2 {
        width: 35%;
        text-align: center;
      }
    }
  }

  .record-group {
    .record-title {
      display: flex;
      justify-content: space-between;
      font-size: 20rpx;
      padding: 12rpx 20rpx;
      border-bottom: 1px solid #ececec;
      background-color: #fafafa;
    }
    .record-item {
      display: flex;
      justify-content: space-between;
      padding: 24rpx 20rpx;
      font-size: 20rpx;
      border-bottom: 1px solid #fefefe;
      &:last-child {
        border-bottom: 1px solid #ffffff;
      }
      .record-class {
        font-size: 30rpx;
      }
    }
  }
}
</style>
