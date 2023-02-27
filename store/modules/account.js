const state = {
    accountItems: null
}

const mutations = {
    SET_ACCOUNT_ITEMS(state, account_items) {
        state.accountItems = account_items;
    }
}

const actions = {
    set_account_items({
        commit
    }, data) {
        commit('SET_ACCOUNT_ITEMS', data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
