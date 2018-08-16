/**
 * 微信 Access_token
 * */
let access_token = ''

module.exports = {
    get() { return access_token || '' },
    set(val) { access_token = val }
}