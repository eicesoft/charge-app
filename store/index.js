import {
    createStore
} from "vuex";

import user from './modules/user.js';
import account from './modules/account.js';

export default createStore({
    state: {
        base_uri: 'http://192.168.1.99:9999',
    },
    mutations: {
        // 定义mutations，用于修改状态(同步)
        UPDATE_BASE_URI(state, payload) {
            state.uid = payload
        }
    },
    actions: {
        updateBaseUri(context, payload) {
            context.commit('UPDATE_BASE_URI', payload)
        }
    },
    getters: {
        // 定义一个getters
        userinfo(state) {
            return state.user.userinfo;
        },
        baseUri(state) {
            return state.base_uri;
        }
    },
    modules: {
        user,
        account
    }
});
