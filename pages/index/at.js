var util = require('../../utils/util.js')
// pages/index/at.js
Page({
  data: {
    subDisabled: false
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  //预约
  formSubmit: function (e) {
    var that = this;
    var fId = e.detail.formId;
    var fObj = e.detail.value;
    that.setData({
      subDisabled: true
    });
    console.log('form发生了submit事件，携带数据为：', fObj)
    //console.log(fId)

    wx.request({
      //url: 'https://m.enjoy16.cn/api/token.php',
      url: 'https://api.weixin.qq.com/cgi-bin/token',
      data: {
        grant_type: 'client_credential',
        appid: 'wx67a6dd77d010a4f0',
        secret: 'fba08e4f1cfb69c0ce23da0e0eeeb19d'
      },
      method: 'GET',
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        //console.log(res.data.access_token)
        var token = res.data.access_token;
        //发送模板消息
        wx.request({
          url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + token,
          data: {
            "touser": wx.getStorageSync('user').openid,
            "template_id": "kMaB9NQRvalFiVvEx-Em8TLgQAkyjezmD4e5wxIhcMs",
            "page": "index",
            "form_id": fId,
            "data": {
              "keyword1": {
                "value": fObj.uname
              },
              "keyword2": {
                "value": fObj.telephone
              },
              "keyword3": {
                "value": util.formatTime(new Date)
              }
            }
          },
          method: 'POST',
          success: function (res) {
            // success
          },
          fail: function (res) {
            // fail
          }
        })



        //
      },
      fail: function (res) {
        // fail
      }
    })





  }
})