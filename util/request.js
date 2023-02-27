import store from '@/store';

async function request(route, param, method = 'GET') {
    let header = {};

    if (store.getters.userinfo) {
        header.Authorization = store.getters.userinfo.token;
    }

    let resp = await uni.request({
        url: store.getters.baseUri + route,
        method: method,
        data: param,
        header: header,
    });
    if (resp.statusCode == 200) {
        const {
            data
        } = resp;

        if (data.code == 200) {
            return data;
        } else {
            uni.showToast({
                icon: 'error',
                title: data.message,
            })
        }
    } else if (resp.statusCode == 401) {
        uni.showToast({
            icon: 'error',
            title: "用户登录信息已过期, 请重新登录.",
            success() {
                uni.navigateTo({
                    url: '/pages/login/login',
                });
            }
        })

    } else {
        uni.showToast({
            icon: 'error',
            title: "服务器异常"
        })
    }
}

export async function loginRequest(param) {
    let resp = await request('/user/auth', param, 'POST')
    return resp;
}

export async function getAccountItems(account_id = 0) {
    let resp = await request('/account/items', {
        account_id: account_id
    })
    return resp;
}
