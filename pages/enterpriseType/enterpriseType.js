// pages/enterpriseType/enterpriseType.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     enterpriseType:["有限责任公司", "合伙企业", "个人独资企业", "股份有限公司", "企业非法人分支机构", "非公司企业合伙人", "分公司", "营业单位","个体工商户"]
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
  returnRegister:function(e){
    app.globalData.enterpriseType = e.currentTarget.dataset.value;
    app.globalData.color="#333"
    app.globalData.size=30
    console.info('***************'+app.globalData.enterpriseType)
    wx.navigateBack({
      delta:1
    })
  }
})