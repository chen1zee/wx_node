const https = require('https')
const axios = require('axios')

class Req {
    constructor(params) {
        this.instance = axios.create({
            httpsAgent: new https.Agent({ keepAlive: true }),
            ...params
        })
    }
    request(url, options) { return this.instance.request({ url, ...options }) }
    post(url, body) { return this.request(url, { method: 'post', body }) }
    get(url, params) { return this.request(url, { method: 'get', params }) }
}

module.exports = Req
