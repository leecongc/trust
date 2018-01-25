Page({
  data: {
    imgUrls: [
      'http://www.cnerstudio.com/cnercms/twcms/view/cner_green/applet/images/avatar/zm2.jpg'
    ],
    indicatorDots: true, /*是否显示面板指示点*/
    autoplay: true,      /*是否自动切换*/
    interval: 5000,       /*自动切换时间间隔*/
    duration: 1000,        /*滑动动画时长*/
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
      url: getApp().data.APP_PATH +'WeApi/index_trdnes',
      data: {art_class:'获取5条动态'},
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
        }else{
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

  requt_data:function(e){
    // console.log(e.currentTarget.id);
    if (e.currentTarget.id =='demo'){
      wx.switchTab({
        url: '../demo/demo',
      });  
    } else if (e.currentTarget.id == 'marketing'){
      console.log('微信营销');
      wx.navigateTo({
        url: '../details/details?class=' + e.currentTarget.id
      })
    } else if (e.currentTarget.id == 'science') {
      console.log('信儿科技');
      wx.navigateTo({
        url: '../details/details?class=' + e.currentTarget.id
      });
    } else if (e.currentTarget.id == 'cooperation') {
      console.log('加盟合作');
      wx.navigateTo({
        url: '../details/details?class=' + e.currentTarget.id
      });
    } else if (e.currentTarget.id == 'process') {
      console.log('发展历史');
      wx.navigateTo({
        url: '../details/details?class=' + e.currentTarget.id
      });
    } else if (e.currentTarget.id == 'recruit') {
      console.log('招兵买马');
      wx.navigateTo({
        url: '../details/details?class=' + e.currentTarget.id
      });
    } else {
      console.log('查看动态');
      wx.navigateTo({
        url: '../details/details?news_id=' + e.currentTarget.id
      });
    }
  },
  onPullDownRefresh: function (){
    var that = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 5000
    })
    wx.request({
      url: getApp().data.APP_PATH + 'WeApi/index_trdnes',
      data: { art_class: '获取5条动态' },
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
          });
          wx.stopPullDownRefresh();
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
  formSubmit: function (e) {
    if(e.detail.value.sel!=''){
      console.log('搜索动态');
      wx.navigateTo({
        url: '../details/details?sel_news=' + e.detail.value.sel
      });
    }
  }
})
