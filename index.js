
const util = require('./util')

class getTencentAiSign {
  constructor(appkey, parms = {}, option = false) {
    this.parms = util.isObject(parms) ? parms : {}
    this.appkey = appkey || ''
    this.option = option
  }
  getDeafultParms () {
    return {
      nonce_str: util.getRandomStr(17),
      time_stamp: parseInt(Date.now() / 1000)
    }
  }
  get (parm){
    if (!util.isObject(parm)) parm = {}
    let option = this.option
    let parms = { ...this.parms, ...parm, ...(this.getDeafultParms())}
    if (option && option.sessionKey && !(parms[option.sessionKey])){
      parms[option.sessionKey] = util.getRandomStr(option.num || 12)
    }
    parms.sing = util.getReqSign(parms, this.appkey)
    return parms
  }
}

module.exports = getTencentAiSign