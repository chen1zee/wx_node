const fs = require('fs')
const path = require('path')
const { localStoragePath } = require('src/config')
const cache = {} // 用于 get set 时 取用， 防止 多次读写文件
const writeLock = { // 对应key写入锁
}
const pending = { // 记录 对应key 在set时遇到锁
}

function val2String(val) {
    const type = typeof val
    if (type == 'object') {
    
    }
}

function _string2Val(string) {
}
// TODO
function _setValToCache(key, val) {
    cache[key] = val
    if (writeLock[key]) pending[key] = true
    writeLock[key] = true
}

/** write完毕回调 */
function _writeFileFinishCb(key) {
    writeLock[key] = false // 释放写入锁
    // 有 pending 则重新 写入
    if (pending[key]) {
        pending[key] = false
        set(key, cache[key])
    }
}

function get(key) {

}

function set(key, val) {
    _setValToCache(key, val)
    // 写入 文件
    const file = path.resolve(localStoragePath, `./${key}.json`)
    fs.writeFile(file, JSON.stringify(val), 'utf8', err => {
        if (err) console.log(err)
        _writeFileFinishCb(key)
    })
}

module.exports = {
    get,
    set
}