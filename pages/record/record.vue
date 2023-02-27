<template>
    <view class="status_bar"></view>
    <view class="container">
        <view class="info-bar">
            <view> 金额: {{ money }}</view>
            <view
                ><image style="width: 20px;height: 20px;" src="/static/icon/enter.png"></image
            ></view>
        </view>
        <view class="tag-list">
            <view class="tag-item" v-for="(item, index) in items">
                <uni-tag
                    @click="selectItem(item)"
                    circle
                    :inverted="select.id != item.id"
                    :text="item.title"
                    size="default"
                    type="error"
                />
            </view>
        </view>
        <NumberInput @enter="enterMoney" :value="money"></NumberInput>
    </view>
</template>

<script>
import NumberInput from '@/components/NumberInput/NumberInput';
import { getAccountItems } from '@/util/request.js';

export default {
    components: {
        NumberInput,
    },
    data() {
        return {
            money: 0,
            items: [],
            select: null,
            types: [{ id: 1, text: '支出' }, { id: 2, text: '收入' }],
        };
    },
    async onLoad() {
        let resp = await getAccountItems();
        console.log(resp);
        this.items = resp.data;
        this.items.push({
            id: 0,
            title: '更多...',
        });
        this.select = this.items[0];
    },
    methods: {
        selectItem(item) {
            if (item.id != 0) {
                this.select = item;
            } else {
            }
        },
        enterMoney(val) {
            // console.log(val);
            this.money = val.money;
        },
    },
};
</script>

<style lang="scss" scoped>
.info-bar {
    display: flex;
    justify-content: space-between;
    margin: 48rpx 32rpx;
    color: $header_bg_color;
}
.tag-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .tag-item {
        margin: 12rpx 12rpx;
    }
}
</style>
