/**
 * 业务层 错误工具类
 * */
const JSONTag = 'JSONString:'
const ServiceErrorName = 'ServiceError'

class ServiceError extends Error {
    /**
     * @param {String} description 描述
     * @param {String|Object} detail 附加详情
     */
    constructor(description, detail) {
        let messageString
        if (typeof detail == 'object') {
            // 添加判断 是否JSON串
            messageString = JSONTag + JSON.stringify(detail)
        } else {
            messageString = detail
        }
        super(messageString)
        this.description = description
        this.name = ServiceErrorName
    }
    /** 判断是否 业务层 错误 */
    static is(error) {
        return error.name == ServiceErrorName
    }
    /** 返回 data 为空 */
    static resDataEmpty(res) { return !res.data }
    /** 返回 data 为空 构造函数 */
    static emptyCreator(description) {
        return new ServiceError(description, null)
    }
    /** 打印 */
    static console(error) {
        if (!this.is(error)) console.log(error)
        // 业务层错误
        console.log('******** 业务层错误 ********')
        console.log(error.description)
        let msg = error.message
        if (msg.indexOf(JSONTag) == 0) {
            msg = JSON.parse(msg.substring(JSONTag.length, msg.length))
        }
        console.log(msg)
    }
    /** getter */
    static getMsg(error) {
        let msg = error.message
        if (msg.indexOf(JSONTag) == 0) {
            msg = JSON.parse(msg.substring(JSONTag.length, msg.length))
        }
        return msg
    }
}

module.exports = ServiceError
