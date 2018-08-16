const { postQrcode } = require('src/api/wxReqApi')
const WxError = require('src/error-util/WxError')

/** 获取小程序二维码 */
async function getQrcodeService(params) {
    const res = await postQrcode(params)
    if (WxError.resDataEmpty(res)) throw new WxError.emptyCreator(
        '二维码返回为空'
    )
    console.log(res.data)
    if (WxError.judgeIsWxError(res.data)) throw new WxError(
        '请求获取小程序二维码失败', res.data
    )
    return res
}

exports.getQrcodeService = getQrcodeService
