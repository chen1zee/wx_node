const Req = require('./req')
const access_token = require('src/storage/access_token')

const wxReq = new Req({
    baseURL: 'https://api.weixin.qq.com/',
    params: { access_token: access_token.get() }
})

// 获取小程序 二维码
 exports.postQrcode = data => wxReq.post('wxa/getwxacode', { data })
// 获取 access_token
exports.getAccessToken = params => wxReq.get('cgi-bin/token', params)
