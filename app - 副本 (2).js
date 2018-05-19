//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          //获取用户信息
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
          //这里存储了appid、secret、token串
          var d = that.globalData.wxData;
          //请求接口将 code 换成 openid 和 session_key
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appId + '&secret=' + d.appSecret + '&js_code=' + res.code + '&grant_type=authorization_code',
            data: {},
            method: 'GET',  
            success: function (res) {
              var obj = {};
              obj.openid = res.data.openid;
              obj.expires_in = Date.now() + res.data.expires_in;

              wx.setStorageSync('user', obj);//存储openid  
            }
          });
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})