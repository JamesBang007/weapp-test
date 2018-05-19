// pages/demo/phoneNumber.js
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
  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
    //回调获取到微信返回的加密数据
    //然后在结合 session_key 以及 app_id 解密获取手机号


    
  }
})