#  [腾讯ai开发平台](https://ai.qq.com/) node生成 ai签名(sign)

# 使用方法
### 以机器人闲聊ai的签名为例：

```
// 定义值不变的参数对象
const parms = {
  app_id: xxx, // 你的应用id
}
const app_key = 'xxxx' // 你的应用密钥

const GetTencentAiSign = require('getTencentAiSign') // 引入包

实例sign生成器 参数介绍

1.app_key 你的应用密钥 必须要

2.parms 为之前所定义不变的参数对象

3.参数可选 部分接口需要一个session(或其他随机串) 代表当次用户的唯一标识，建议在调用的时候自己传参数进去 如果不传则使用当前的sessionKey作为键 取num位随机字符
  参数类型只支持对象 目前只会生成 sessionKey一个键 num不传默认12

const sign = new GetTencentAiSign(app_key, parms ,{sessionKey:'session', num:12})

获取sign
sign.get() 返回结果

{
  app_id: xxx, 应用id
  sign: xxx, 签名
  session: xxx, 因为上面的例子传了sessionKey 所以生成了一个12位的随机字符串 如果实例的时候没有传sessionKey 则不会生成对应的键
  nonce_str: '', 每次请求需要的随机串
  time_stamp: '' 时间戳
}

sign.get({question: 'i love you',session:10000}) 返回结果

{
  app_id: xxx, 应用id
  sign: xxx, 签名
  session: 10000, 生成器中带了跟sessionKey一样的键 则不会再去生成
  nonce_str: '', 每次请求需要的随机串
  time_stamp: '' 时间戳,
  question: 'i love you' 机器人闲聊接口所需参数
}

```