Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图
    movies: [
      { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520848135396&di=bc802f38c062133311b5dcb02c1dc09c&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0190a359648a67a8012193a366f663.jpg' },
      { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520848170827&di=2381b4ecf29e18e1c07d577b76786695&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F18%2F05%2F28%2F31N58PICg4Z_1024.jpg' },
      { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520848170827&di=2381b4ecf29e18e1c07d577b76786695&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F18%2F05%2F28%2F31N58PICg4Z_1024.jpg' }

    ] ,
    //功能区域  
    functionImg: [
      { name: "工商注册", url:"/img/gszhuce@2x.png"},
      { name: "代理记账", url:"/img/dailijizhang@2x.png"},
      { name: "代办资质", url: "/img/myMoney@2x.png" },
      { name: "网站建站", url: "/img/webOpen@2x.png" },
      { name: "商标专利", url: "/img/shopLogo@2x.png" },
      { name: "宣传推广", url: "/img/xuanchuantuiguang@2x.png" },
      { name: "小程序开发", url: "/img/xcxkf@2x.png" },
      { name: "增值服务", url: "/img/zzfw@2x.png" },
    ],
    //最新公告
    infoArr:[1,2,3,4]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },
  // 功能区域跳转到页面
  JumpFunctions(e){
  console.log(e,e.currentTarget.id,e.currentTarget.dataset.value);
    var id = e.currentTarget.id
    var value = e.currentTarget.dataset.value
      wx.navigateTo({
        url: '/pages/index/functions/registerShop?indexs='+id+"&value="+value,
      }) 


  }
})