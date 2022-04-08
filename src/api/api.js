import request from "../common/request"

export function userLogin(data) {
    return request({
        url: "/api/user/login",
        method: "post",
        data
    })
}
