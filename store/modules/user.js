const state = {
    userinfo: null
}
const USERINFO_KEY = 'LOGIN_INFO';
const mutations = {
    SET_USERINFO(state, userinfo) {
        state.userinfo = userinfo;
        uni.setStorageSync(USERINFO_KEY, JSON.stringify(userinfo));
    },
    LOAD_USERINFO(state) {
        const info = uni.getStorageSync(USERINFO_KEY);
        if (info) {
            console.log(info);
            state.userinfo = JSON.parse(info);
        }
    }
}

const actions = {
    set_userinfo({
        commit
    }, data) {
        commit('SET_USERINFO', data)
    },
    load_userinfo({
        commit
    }) {
        commit('LOAD_USERINFO', )
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
