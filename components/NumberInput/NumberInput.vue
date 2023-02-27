<template>
    <view class="number-input">
        <view class="number-view">$ {{ moneyString }}</view>
        <view class="box">
            <view class="box-left">
                <view class="row">
                    <view @touchstart="input('1')" class="col">1</view>
                    <view @touchstart="input('2')" class="col">2</view>
                    <view @touchstart="input('3')" class="col">3</view>
                </view>
                <view class="row">
                    <view @touchstart="input('4')" class="col">4</view>
                    <view @touchstart="input('5')" class="col">5</view>
                    <view @touchstart="input('6')" class="col">6</view>
                </view>
                <view class="row">
                    <view @touchstart="input('7')" class="col">7</view>
                    <view @touchstart="input('8')" class="col">8</view>
                    <view @touchstart="input('9')" class="col">9</view>
                </view>
                <view class="row">
                    <view @touchstart="input('.')" class="col">.</view>
                    <view @touchstart="input('0')" class="col">0</view>
                    <view @touchstart="hide" class="col"
                        ><image style="width: 20px;height: 20px;" src="./tobottom.png"></image
                    ></view>
                </view>
            </view>
            <view class="box-right">
                <view class="row">
                    <view @touchstart="deleteNumber" class="col icon"
                        ><image style="width: 20px;height: 20px;" src="./back.png"></image
                    ></view>
                </view>
                <view class="row">
                    <view @touchstart="clearNumber" class="col"
                        ><image style="width: 20px;height: 20px;" src="./clear.png"></image
                    ></view>
                </view>
                <view class="row"> <view @touchstart="enterNumber" class="col2">确认</view></view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'NumberInput',
    props: {
        value: {
            type: Number,
        },
        decimalLength: {
            type: Number,
            default: 2,
        },
    },
    data() {
        return {
            moneyString: this.value.toString(),
        };
    },
    computed: {
        money() {
            return parseFloat(this.moneyString).toFixed(this.decimalLength);
        },
    },
    methods: {
        input(val) {
            console.log(val);
            if (val == '.') {
                if (this.moneyString.indexOf('.') == -1) {
                    if (this.moneyString == '0') {
                        this.moneyString = val;
                    } else {
                        this.moneyString += val;
                    }
                }
            } else {
                if (this.moneyString == '0') {
                    this.moneyString = val;
                } else {
                    this.moneyString += val;
                }
            }
        },
        deleteNumber() {
            let length = this.moneyString.length;
            this.moneyString = this.moneyString.substring(0, length - 1);
            if (this.moneyString.length == 0) {
                this.moneyString = '0';
            }
        },
        clearNumber() {
            this.moneyString = '0';
        },
        enterNumber() {
            this.$emit('enter', {
                money: this.money,
                moneyString: this.moneyString,
            });
        },
        hide() {},
    },
};
</script>

<style lang="scss" scoped>
.number-input {
    width: 100%;
    background-color: #ececec;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 500rpx;
    color: #515151;
    .number-view {
        font-size: 34rpx;
        margin: 10rpx 20rpx;
    }
    .box {
        margin: 0 20rpx;
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        height: 100%;
        .box-left {
            width: 80%;
            height: 100%;
        }
        .box-right {
            width: 20%;
            height: 100%;
            .row {
                width: 100%;
                .col {
                    width: 100%;
                    height: 90rpx;
                    line-height: 90rpx;
                    background-color: #fff;
                    border-radius: 12rpx;
                    margin: 8rpx;
                }
                .col2 {
                    width: 100%;
                    height: 196rpx;
                    line-height: 196rpx;
                    background-color: #ffd572;
                    border-radius: 12rpx;
                    margin: 8rpx;
                    &:active {
                        background-color: #ffe69b;
                    }
                    &:focus {
                        background-color: #ffe69b;
                    }
                }
            }
        }
    }
    .row {
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        text-align: center;
        .col {
            height: 90rpx;
            line-height: 90rpx;
            width: 33%;
            background-color: #fff;
            border-radius: 12rpx;
            margin: 8rpx;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
            &:active {
                background-color: #f5f5f5;
            }
            &:focus {
                background-color: #f5f5f5;
            }
        }
    }
}
</style>
