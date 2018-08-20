// pages/aboutUs/aboutUs.js
var app = getApp()
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:'',
    backimg: app.globalData.appImgUrl+'guanyuwomen.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */   
  onLoad: function (options) {
    var that = this
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl

        that.setData({
          avatarUrl: avatarUrl
        })
      }
    })

    wx.request({
      url: app.globalData.appUrl + 'text/getByType',
      data: {
        xcxuser_name: "have",
        type: 9
      },

      success: function (res) {
        console.log(res)
        that.setData({
          textArr: res.data[0]

        })
        var article = res.data[0].context

        WxParse.wxParse('article', 'html', article, that, 5);

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
  phone(){
    wx.makePhoneCall({
      phoneNumber: '13524012018' //仅为示例，并非真实的电话号码
    })
  }
})