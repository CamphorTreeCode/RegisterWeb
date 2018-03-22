// pages/newNotice/newNotice.js
var WxParse = require('../../wxParse/wxParse.js');
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   content:[],
   noticeid:33
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 
    var that =this;

// 增加浏览量
    wx.request({
      url: app.globalData.appUrl + 'notice/addViewCount',
      data: {
        xcxuser_name: "have",
        noticeId: options.id
      },

      success: function (res) {
        var content = that.data.content;
        // var id = options.id
        console.log(res.data)
        content = res.data[0]
        // try {
        //   content = wx.getStorageSync('infoArr')
        //   console.log(content);
    
        //   if (value) {
        //     // Do something with return value
        //   }
        // } catch (e) {
        //   // Do something when catch error
        // }
        console.log(content)
        var article = content.context

        WxParse.wxParse('article', 'html', article, that, 5);
       // content.viewcount = res.data
        that.setData({
          content: content,
          noticeid: options.id
        })
        console.log(res)
    
        // try {
        //   wx.clearStorageSync("infoArr")
        // } catch (e) {
        //   // Do something when catch error
        // }
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '最新公告',
      path: '/pages/newNotice/newNotice?id=' + this.data.noticeid,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})