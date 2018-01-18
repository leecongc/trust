// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  /*点击跳转动态详情*/
  details:function(e){
    console.log(e);
    wx.navigateTo({
      url: '../details/details'
    });
  }
})