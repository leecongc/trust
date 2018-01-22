// pages/details/details.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:''
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 5000
    })
    /*页面传参，获取上个页面url中的值
    this.setData({
      title: options.class
    })
    */

    /*
      判断请求数据的类型
    */
    if (options.class){
      /*获取首页文章*/
      var urls = getApp().data.APP_PATH +'WeApi/index';
      var datas = options.class;
    } else if (options.news_id){
      /*查看单独的某一条动态*/
      var urls = getApp().data.APP_PATH +'WeApi/index_trdnes';
      var datas = options.news_id;
    } else if (options.demo) {
      /*查看单独的某一条案例*/
      var urls = getApp().data.APP_PATH +'WeApi/index_demo';
      var datas = options.demo;
    } else if (options.about){
      var urls = getApp().data.APP_PATH +'WeApi/index_about';
      var datas = 'show';
    }
    wx.request({
      url: urls,
      data: { art_class:datas},
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
      success:function(res){
        if(res.statusCode==200){
          wx.hideToast();
          var data=res.data.data;
          that.setData({
            user:data.article_user,
            date: data.article_date,
          })
          WxParse.wxParse('content', 'html', data.article_content, that,30);
        }
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})