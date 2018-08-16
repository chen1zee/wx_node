const { getAccessTokenService } = require('src/services/access_token/index')
const { getQrcodeService } = require('src/services/qrcode/index')

async function run() {
    await getAccessTokenService() // 获取 access_token
    const res = await getQrcodeService({
        path: 'pages/item/index?',
        is_hyaline: false,
        width: 430,
        auto_color: false,
        line_color: { r: "208", b: "109", g: "165" }
    })
    console.log(res.data)
}

try {
    // run()
} catch (e) {
    console.log(e)
}
