// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    trdnes:[]
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
      url: getApp().data.APP_PATH+'WeApi/index_trdnes',
      data: { art_class: '获取所有动态' },
      method: 'GET',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          wx.hideToast();
          var data = res.data.data;
          that.setData({
            trdnes: data
          })
        } else {
          wx.hideToast();
          wx.showToast({
            title: '加载失败',
            icon: 'none',
            duration: 2500
          })
        }
        console.log(res)
      }
    })
  },
  /*点击跳转动态详情*/
  details:function(e){
    console.log(e);
    wx.navigateTo({
      url: '../details/details?news_id=' + e.currentTarget.id
    });
  }
})