// pages/companyType/companyType.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    companyTypes: [
      { value: "文化、咨询、服务类公司",img:"/img/wenhua@2x.png"},
      { value: "贸易类公司", img: "/img/maoyi@2x.png" },
      { value: "科技类公司", img: "/img/keji@2x.png" },
      { value: "工程类公司", img: "/img/gongcheng@2x.png" },
      { value: "餐饮类公司", img: "/img/canying@2x.png" },
      { value: "影视类公司", img: "/img/yings@2x.png" },
      { value: "实业类公司", img: "/img/shiye@2x.png" }
    ]
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
  returnRegister: function (e) {
    app.globalData.companyType = e.currentTarget.dataset.value;
    app.globalData.color1 = "#333"
    app.globalData.size1 = 30
    console.info('***************' + app.globalData.enterpriseType)
    wx.navigateBack({
      delta: 1
    })
  }
})