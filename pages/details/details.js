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
      duration: 8000
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
    } else if (options.sel_news) {
      /*表单提交，查询动态*/
      var urls = getApp().data.APP_PATH + 'WeApi/sel_news';
      var datas = options.sel_news;
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
          console.log(res);
          if (res.data != -1 && res.data != -2){
            var data = res.data.data;
            that.setData({
              user: data.article_user,
              date: data.article_date,
              title: data.article_name,
            })
            WxParse.wxParse('content', 'html', data.article_content, that, 30);
          }else{
            wx.showToast({
              title: '加载失败',
              icon: 'none',
              duration: 2500
            })
          }
          
        }
        
      }, 
      fail: function (err) {
        console.log(err)
        wx.showToast({
          title: '加载失败，请重新加载',
          icon: 'none',
          duration: 2500
        })
      }
    })
  },

  
})