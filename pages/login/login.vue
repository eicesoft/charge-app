<template>
    <view>
        <form>
            <view class="uni-form-item uni-column">
                <view class="title">用户名:</view>
                <input v-model="username" class="uni-input" focus placeholder="请输入用户名" />
            </view>

            <view class="uni-form-item uni-column">
                <view class="title">密码:</view>
                <input
                    v-model="password"
                    type="password"
                    class="uni-input"
                    focus
                    placeholder="请输入密码"
                />
            </view>

            <view> <button type="default" @click="login">登录</button> </view>
        </form>
    </view>
</template>

<script>
import { mapActions } from 'vuex';
import { loginRequest } from '@/util/request.js';
// console.log(request)
export default {
    data() {
        return {
            username: 'kelezyb',
            password: '123456',
        };
    },
    methods: {
        ...mapActions('user', ['set_userinfo']),
        async login() {
            let resp = await loginRequest({
                username: this.username,
                password: this.password,
            });

            if (resp.code == 200) {
                this.set_userinfo(resp.data);
                console.log('登录成功.');
                uni.switchTab({
                    url: '/pages/index/index',
                });
            }
        },
    },
};
</script>

<style lang="scss"></style>
