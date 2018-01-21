// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:'',
    content:'',
    date:''
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
    wx.request({
      url: 'http://www.ceshi.com/Trust/index.php/WeApi/index',
      data: { art_class: options.class},
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
            content: data.article_content,
            date: data.article_date,
          })
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