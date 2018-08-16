/**
 * access_token 事务
 * */
const { getAccessToken } = require('src/api/wxReqApi')
const ServiceError = require('src/error-util/ServiceError')
const accessToken = require('src/storage/access_token')

/** 获取 access_token */
async function getAccessTokenService() {
    if (accessToken.get()) return '已有access_token'
    // 请求获取 access_token
    const res = await getAccessToken({
        grant_type: 'client_credential',
        appid: 'wx5ca651aa8c3543b1',
        secret: '8c6e55d53f7c38daa73120112a45bacb'
    })
    if (res.data.errcode) throw new ServiceError(
        '请求获取access_token失败', res.data
    )
    if (!res.data.access_token) throw new ServiceError(
        'access_token返回为空', res.data
    )
    accessToken.set(res.data.access_token)
    
}

exports.getAccessTokenService = getAccessTokenService
