import {baseURL, Timeout} from '../common/config.js'

const request = (options = {}) => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: baseURL + options.url,
            data: options.data,
            method: options.method || 'GET',
            timeout: Timeout,
            header: {
                'content-type': 'application/json',
                'token': uni.getStorageSync('token')
            },
            success: (res) => {
                if (res.statusCode === 200) {
                    resolve(res.data)
                } else {
                    reject(res.data)
                }
            },
            fail: (err) => {
                reject(err)
            },
            complete: () => {
                uni.hideLoading()
            }
        })
    })
}

export default request