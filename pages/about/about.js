// pages/about/about.js
var WxParse = require('../../wxParse/wxParse.js');
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
    var that = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 5000
    })
    wx.request({
      url: getApp().data.APP_PATH +'WeApi/index_about',
      data: { art_class: 'show' },
      method: 'GET',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          wx.hideToast();
          var data = res.data.data;
          that.setData({
            user: data.article_user,
            // content: data.article_content,
            date: data.article_date,
          })
          WxParse.wxParse('content', 'html', data.article_content, that, 5);
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

  
})