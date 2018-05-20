// pages/demo/userinfo.js
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
    console.log('页面加载');
  },
  /**
   * button组件，获取用户基本信息
   */
  onGetUserInfo: function (re) {
    console.log(re.detail.userInfo);
    //数据存储 异步
    wx.setStorage({
      key: "userInfo",
      data: re.detail.userInfo
    })
    //数据存储 同步
    wx.setStorageSync('userInfoSync', re.detail.userInfo)

  }

})