// pages/companyShareholder/companyShareholder.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addShareholderIcon:'https://s14.postimg.org/rc78jmj4h/image.png',
    // 显示表单
    showFrom:false,
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
    console.log(">>>>")

      this.setData({
        addShareholderIcon: app.globalData.addShareholderIcon,
        showFrom: false
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
  addShareholder:function(e){
     console.info(e.currentTarget.dataset.value)
     console.log(">>>>>3242")
     if (this.data.showFrom) {
       this.setData({
         addShareholderIcon: app.globalData.addShareholderIcon,
         showFrom: false
       });
     } else {
       this.setData({
         addShareholderIcon: app.globalData.addShareholderIcon,
         showFrom: true
       });
     }

  }

})