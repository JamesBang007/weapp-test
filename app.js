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
      /*
      //调用登录接口
      wx.login({
        success: function (res) {
          console.log(res);
          //获取用户信息
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
          //openid
          wx.request({
            //url: "https://api.weixin.qq.com/sns/jscode2session",
            url:"http://bbs.ysichuan.com/api/minapp/jscode2session.php",
            data: {
              "js_code": res.code,
              "c_type": "ctcyts"
            },
            method: 'GET',
            success: function (res) {
              console.log(res.data);
              wx.setStorageSync('userOpenid', res.data.openid); //存储openid  
            }
          });
        }
      })
      */


      /*api
      wx.login({
        success: function (res) {
          wx.request({
            url: "https://api.weixin.qq.com/sns/jscode2session",
            data: {
              "appid": that.globalData.appid,
              "secret": that.globalData.appsecret,
              "js_code": res.code,
              "grant_type": "authorization_code"
            },
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
            // header: {}, // 设置请求的 header  
            success: function (res) {
              var obj = {};
              obj.openid = res.data.openid;
              obj.expires_in = Date.now() + res.data.expires_in;

              wx.setStorageSync('user', obj);//存储openid  
            }
          });
        }
      });
      */
    } else {
      console.log(user);
    }


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
        }
      })
    }
  },
  globalData: {
    userInfo: null,
    appName: '四川旅游攻略网',
    appid: 'wx67a6dd77d010a4f0',
    appsecret: '64f6257a27b060a401443a9b925cdf91'
  }
})

