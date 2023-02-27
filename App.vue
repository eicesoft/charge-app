<script>
import { useStore } from 'vuex';

export default {
    onLaunch: function() {
        console.log('App Launch');
        const store = useStore();
        store.dispatch('user/load_userinfo')
        if (!store.getters.userinfo) {
            console.log('Go to Login');
            uni.navigateTo({
                url: '/pages/login/login',
            });
        }
        uni.onTabBarMidButtonTap(() => {
            console.log('test mid');
            uni.navigateTo({
                url: '/pages/record/record',
            });
        });
    },
    onShow: function() {
        console.log('App Show');
    },
    onHide: function() {
        console.log('App Hide');
    },
};
</script>

<style lang="scss">
/*每个页面公共css */
@import '@/uni_modules/uni-scss/index.scss';
/* #ifndef APP-NVUE */
@import '@/static/customicons.css';

// 设置整个项目的背景色
page {
    background-color: $background-color;
}

/* #endif */
</style>
