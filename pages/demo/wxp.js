//在使用的View中引入WxParse模块
var WxParse = require('../../wxParse/wxParse.js');
var lineData = {};
// pages/line/wxp.js

Page({
  data: {
    array: [1, 2, 3, 4, 5],
    line: [
      "line_show_11111",
      "line_show_22222",
      `line_show_33333<div style="margin-top:10px;">
		<h3 style="color: #000;">支持图片自适应</h3>
		<div style="margin-top:10px;">
			<img src="https://m.tuniucdn.com/fb2/t1/G1/M00/10/39/Cii9EVdfolWIY879AALUA1SNyqcAAGiOwE-dRgAAtQb345_w640_h480_c1_t0_w640_h320_c1_t0.jpg" alt="">
			<img src="http://www.ctsscs.com/files/banner/170329_meiguo.jpg" alt="">
		</div>
	</div>`,
      "line_show_44444",
    ],
    showData: { "1": "a" },
    text: {
      "a0_0": "aaa000_000",
      "a1_0": "aaa111_000",
      "a1_1": "aaa111_111",
    }
  },
  onLoad: function (options) {
    // 页面初始化

    var that = this;


    //HTTPS请求数据
    wx.request({
      url: 'http://www.ctsscs.com/minapp/line_show.aspx',
      //url: 'https://bbs.ysichuan.com/api/minapp/line_show.php',
      data: {
        id: 10250
      },
      header: {
        'content-type': 'application/json'
      },
      dataType: 'json',
      success: function (res) {
        //console.log(res.data)

        lineData = res.data;
        for (let i = 0; i < lineData.linetext.length - 1; i++) {
          //console.log(lineData.linetext[i].activity);
          for (let j = 0; j < lineData.linetext[i].activity.length - 1; j++) {
            console.log(i + '_' + j);
            //WxParse.wxParse('article' + i + '_' + j, 'html', lineData.linetext[i].activity[j].text, that, 5);
            //替换
            WxParse.wxParse('article', 'html', lineData.linetext[i].activity[j].text, that, 5);

            //console.log(lineData.linetext[i].activity[j]);
            //console.log(that.data.article.nodes);

            //console.log(lineData.linetext[i].activity[j]);
            //lineData.linetext[i].activity[j].splice(0, 1, "666");
            that.data.line.splice(1, 1, that.data.article.nodes);

          }
        };

        //console.log(that.data.showData);
        //替换

        console.log(that.data.line);

        lineData.splice(0, 1,"666");
        //更新数据
        that.setData({
          showData: lineData
        });
      },
      fail: function () {
        console.log('调用失败')
      }
    })




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
  }
})