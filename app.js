//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    var that = this
    //获取openid  
    var user = wx.getStorageSync('user') || {};
    if (!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600)) {//不要在30天后才更换openid-尽量提前10分钟更新
      
    } else {
      console.log(user);
    }


  },
  getUserInfo: function (cb) {
    // wx.getUserInfo 接口将逐步不再支持
  },
  globalData: {
    userInfo: null,
    appName: 'cdcyts',
    appid: 'wx67a6dd77d010a4f0',
    appsecret: ''
  }
})

