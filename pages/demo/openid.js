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
          //换取openid
          //发起网络请求

          wx.request({
            //url: "https://api.weixin.qq.com/sns/jscode2session",
            url: "https://100833577.jmsbang.com/weapp/openid",
            data: {
              "code": res.code,
              "appname": "ctcyts"
            },
            method: 'GET',
            success: function (res) {
              console.log(res.data);
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