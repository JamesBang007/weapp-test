var WxParse = require('../../wxParse/wxParse.js');
// pages/index/wxp.js
Page({
  data: {
    line: [
      "line_show_11111",
      "line_show_22222",
      "line_show_33333",
      "line_show_44444",
    ]
  },
  onLoad: function (options) {
    // 页面初始化
    //var linedata = "6666666666666"
    //that.data.line[0]
    //WxParse.wxParse('article', 'html', linedata, that, 5);
    /**
     * html解析示例
     */
    var article = `<div>我是HTML代码</div>line_show_33333<div style="margin-top:10px;">
		<h3 style="color: #000;">支持图片自适应</h3>
		<div style="margin-top:10px;">
			<img data-src="//m.tuniucdn.com/fb2/t1/G1/M00/10/39/Cii9EVdfolWIY879AALUA1SNyqcAAGiOwE-dRgAAtQb345_w640_h480_c1_t0_w640_h320_c1_t0.jpg" alt="">
			<img data-src="http://www.ctsscs.com/files/banner/170329_meiguo.jpg" alt="">
		</div>
	</div>
  <p>四川的美景太多太迷人，可以讲上一千零一夜。你说你想去西岭贡嘎、稻城亚丁、峨眉青城还有九寨黄龙，可这些地方玩一圈下来需要很长时间，并不是人人都能这么任性。那我们初到四川，旅游时间又有限的情况下，该如何在众多景点之间取舍呢？下面我来告诉你。</p>
<div class="f-block"><img class="_j_lazyload" style="height: 454px; width: 680px; background: rgb(252, 242, 220); display: block;" data-src="http://n4-q.mafengwo.net/s9/M00/2B/90/wKgBs1gFmhCAdIzpAAecCbQq3-E61.jpeg?imageView2%2F2%2Fw%2F680">
<span class="img-an"></span></div>
<div class="p-section">早上从成都出发到乐山，参观世界第一大佛——乐山大佛，游览凌云寺，大雄宝殿，灵宝塔，下九曲栈道观大渡河、岷江、青衣江三江汇流。还可以选择乘船游览乐山大佛全景和隐形睡佛。乐山大佛并不是只有一尊佛，景区较大，可以慢慢游玩。游览时间约3小时。<br>
<b>【交通】</b>从成都有高铁直达乐山，或者在成都新南门汽车站有大巴直达乐山大佛景区。约2小时。<br>
<b>【门票】</b>门票90元（含乐山大佛、乌尤寺、麻浩崖墓等），游船票70元<br></div>
<p>ll好贴心啊<img src="http://images.mafengwo.net/images/i/face/brands_v2/20@2x.png">爱你~</p>bindName绑定的数据名(必填)
  `;
    /**
    * WxParse.wxParse(bindName , type, data, target,imagePadding)
    * 1.bindName绑定的数据名(必填)
    * 2.type可以为html或者md(必填)
    * 3.data为传入的具体数据(必填)
    * 4.target为Page对象,一般为this(必填)
    * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
    */
    var that = this;
    WxParse.wxParse('article', 'html', article, that, 5);


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