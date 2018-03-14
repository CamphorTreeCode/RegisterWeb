// pages/registerCompany/registerCompany.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    enterpriseType:'',
    color:'',
    size:0,
    companyType:'',
    color1:'',
    size1:0
  
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
    console.info(app.globalData.enterpriseType)
    console.info(app.globalData.size)
    console.info(app.globalData.companyType)
    console.info(app.globalData.size1)
    this.setData({
      color: app.globalData.color,
      size: app.globalData.size,
      enterpriseType: app.globalData.enterpriseType,
      color1: app.globalData.color1,
      size1: app.globalData.size1,
      companyType: app.globalData.companyType
    });
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
  chooseType:function(){
      wx.navigateTo({
        url: '/pages/enterpriseType/enterpriseType',
      })
  },
  chooseTypec: function () {
    wx.navigateTo({
      url: '/pages/companyType/companyType',
    })
  },
  companyShareholder:function(){
    wx.navigateTo({
      url: '/pages/companyShareholder/companyShareholder',
    })
  }
})