// pages/demo/openid.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //小程序登录
    wx.login({
      success: function (res) {
        console.log("拿到登录凭证code：" + res.code)
        if (res.code) {
          //发起网络请求，在业务服务器换取 openid和session_key
          wx.request({
            url: "https://oudzqn6o.qcloud.la/weapp/openid",
            data: {
              "appname": "cdcyts",
              "code": res.code
            },
            method: 'GET',
            success: function (res) {
              console.log(res.data);
              //数据存储 同步
              wx.setStorageSync('userOpenid', res.data.openid); //存储openid  
            }
          });

        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });






  }


})