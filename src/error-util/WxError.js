/**
 * 请求微信接口的 错误类
 * */

const ServiceError = require('./ServiceError')

class WxError extends ServiceError {
    static judgeIsWxError(data) { return data.errcode }
}

module.exports = WxError
