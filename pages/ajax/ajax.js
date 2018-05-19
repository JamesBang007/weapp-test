// pages/ajax/ajax.js
Page({
  data:{
    listData: []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    wx.request({
      url: 'https://www.enjoy16.cn/index.php',
      data: {
        m:'minapp',
        c:'index',
        a:'lists',
        catid:'43'
      },
      header: {
          'content-type': 'application/json'
      },
      dataType:'json',
      success: function(res) {
        //console.log(res.data)
        //更新数据 
        that.setData({  
          listData:res.data
        })
        console.log(res.data[0]['title'])
      }
    })


  },
  onReady:function(){
    // 页面渲染完成


  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})