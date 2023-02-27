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

            <qiun-data-charts type="line" :chartData="chartData" />
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

const chartData = ref({
    categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
    series: [
        {
            name: '目标值',
            data: [35, 36, 31, 33, 13, 34],
        },
        {
            name: '完成量',
            data: [18, 27, 21, 24, 6, 28],
        },
    ],
});
</script>

<style lang="scss">
.page {
    margin: 10rpx;
}
</style>
