const crypto = require('crypto');
const md5 = crypto.createHash("md5");

const util = {
  getRandomStr: (len) => {
    var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var nums = "";
    for (var i = 0; i < len; i++) {
      var id = parseInt(Math.random() * 61);
      nums += chars[id];
    }
    return nums;
  },
  getReqSign: (parms, appkey) => {
    let arr = Object.keys(parms).sort();
    let sign = ''
    arr.forEach(item => {
      if (item !== '') {
        sign += `${item}=${encodeURI(String.prototype.replace.call(parms[item], /\s/g, '+'))}&`
      }
    })
    sign += 'app_key=' + appkey
    return md5.update(sign).digest('hex').toUpperCase()
  },
  isObject: (target) => {
    return Object.prototype.toString.call(target) === '[object Object]'
  }
}



module.exports = util