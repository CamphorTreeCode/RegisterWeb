// pages/companyShareholder/companyShareholder.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addShareholderIcon: '',
    img1: '',
    img2: '',
    deleteImg1: 'none',
    deleteImg2: 'none',

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
    console.info(app.globalData.addShareholderIcon)
    this.setData({
      addShareholderIcon: app.globalData.addShareholderIcon
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
  addShareholder: function (e) {
    console.info(e.currentTarget.dataset.value)
  },
  uploadingImg1: function () {
    var p = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        p.setData({ img1: tempFilePaths, deleteImg1: "block" })
        console.info(tempFilePaths)
      }
    })

  },
  uploadingImg2: function () {
    var p = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        p.setData({ img2: tempFilePaths })
        p.setData({ img2: tempFilePaths, deleteImg2: "block" })
        console.info(tempFilePaths)
      }
    })

  },
  deleteImg1: function () {
    var p = this
    p.setData({ img1: "", deleteImg1: "none" })

  },
  deleteImg2: function () {
    var p = this
    p.setData({ img2: "", deleteImg2: "none" })

  }
})