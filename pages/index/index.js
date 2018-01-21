Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true, /*是否显示面板指示点*/
    autoplay: true,      /*是否自动切换*/
    interval: 5000,       /*自动切换时间间隔*/
    duration: 1000        /*滑动动画时长*/
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
    }
    
  }
})
