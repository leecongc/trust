// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    demos:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 5000
    })
    wx.request({
      url: getApp().data.APP_PATH +'WeApi/index_demo',
      data: { art_class: '获取所有案例' },
      method: 'GET',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          wx.hideToast();
          var data = res.data.data;
          // console.log(data);
          for(var i=0;i<data.length;i++){
            var str = data[i].article_content;

            if (str.indexOf("http") != -1 && str.indexOf("alt") != -1){
              var a =str.indexOf("http");/*http 首次出现位置*/
              var b =str.indexOf("alt");/*http 首次出现位置*/
              // console.log(a);
              console.log(str.substring(a, b-2));
              data[i]['img_url'] = str.substring(a, b - 2);
            }else{
              data[i]['img_url'] = null ;
            }

          }
          that.setData({
            demos: data
          })
        } else {
          wx.hideToast();
          wx.showToast({
            title: '加载失败',
            icon: 'none',
            duration: 2500
          })
        }
        // console.log(res)
      }
    })
  },
  /*点击跳转动态详情*/
  details: function (e) {
    console.log(e);
    wx.navigateTo({
      url: '../details/details?demo=' + e.currentTarget.id
    });
  },
  
})