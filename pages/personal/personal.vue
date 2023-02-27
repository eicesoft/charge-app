<template>
    <view class="status_bar"></view>

    <view class="container">
        <view class="header">
            <view>个人中心 - {{ userinfo.username }}</view>
        </view>
    </view>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters(['userinfo']),
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.header {
    background-color: $header_bg_color;
    padding: 32rpx;
}
</style>
