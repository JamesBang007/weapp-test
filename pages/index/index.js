//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      //url: '../ajax/ajax'
      url: '/pages/index/at'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      console.log(userInfo)
      that.setData({
        userInfo: userInfo
      })
    })
    console.log(wx.getStorageSync('userOpenid') + '同步');
    console.log(wx.getStorage('userOpenid') + '异步');
    //console.log(wx.getStorageSync('user'));

  }
})
