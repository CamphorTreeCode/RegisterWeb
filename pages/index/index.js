var app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图
    movies: [
      { url: app.globalData.appImgUrl +'sdgaehg.jpg' },
      { url: app.globalData.appImgUrl + 'srthwery.jpg' },
      { url: app.globalData.appImgUrl +'wgwegeg.jpg' }

    ] ,
    //功能区域  
    functionImg: [
      { name: "工商注册", url:"/img/gszhuce@2x.png"},
      { name: "代理记账", url:"/img/dailijizhang@2x.png"},
      { name: "代办资质", url: "/img/myMoney@2x.png" },
      { name: "网站建设", url: "/img/webOpen@2x.png" },
      { name: "商标专利", url: "/img/shopLogo@2x.png" },
      { name: "宣传推广", url: "/img/xuanchuantuiguang@2x.png" },
      { name: "小程序开发", url: "/img/xcxkf@2x.png" },
      { name: "增值服务", url: "/img/zzfw@2x.png" },
    ],
    //最新公告
    infoArr:[1,2,3,4],
    swiper:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var p=this
    // 查询公告
    wx.request({
      url: app.globalData.appUrl+'notice/getnewnotice',
      data:{
        xcxuser_name:"have"
      },
    
    success: function (res) {
        console.log(res)
      p.setData({
        infoArr:res.data
      })
        
        console.info(p.data.infoArr)
      }
    })
    // 查询轮播图
    wx.request({
      url: app.globalData.appUrl + 'swiper/selectAll',
      data: {
        xcxuser_name: "have"
      },

      success: function (res) {
        console.log(res)
        p.setData({
          swiper: res.data
        })
    
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
    
  },
  // 功能区域跳转到页面
  JumpFunctions(e){
  console.log(e,e.currentTarget.id,e.currentTarget.dataset.value);
    var id = e.currentTarget.id
    var value = e.currentTarget.dataset.value
      wx.navigateTo({
        url: '/pages/index/functions/registerShop?indexs='+id+"&value="+value,
      }) 



  },
  noticeDetails(e){
  console.log(e);
  var id = e.currentTarget.id
  // var index = e.currentTarget.dataset.index
  // var infoArr = this.data.infoArr
  // console.log(infoArr)

  //   try {
  //     wx.setStorageSync('infoArr', infoArr[index])
  //   } catch (e) {
  //   }


  wx.navigateTo({
    url: '/pages/newNotice/newNotice?id=' + id 
  }) 
  }
})