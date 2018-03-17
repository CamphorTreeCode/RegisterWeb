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
    size1:0,
    // 股东数组
    shareholder:[],
    // 注册公司的大数组 push数组还得重新添加 
    company:[
      {
        companyname:"",
        remarkname:'',
        enterprisetype:'',
        registeredcapital:'',
        businessscope:'',
        companytype:'',
        shareholder:[],
        linkman:"",
        linkphone:""
      }
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
    console.info(app.globalData.enterpriseType)
    console.info(app.globalData.size)
    console.info(app.globalData.companyType)
    console.info(app.globalData.size1)
    console.log("user>>>>>>>>", this.data.shareholder)
    var company = this.data.company
    company[0].enterprisetype = app.globalData.enterpriseType
    company[0].companytype = app.globalData.companyType
    company[0].shareholder = this.data.shareholder
    this.setData({
      color: app.globalData.color,
      size: app.globalData.size,
      enterpriseType: app.globalData.enterpriseType,
      color1: app.globalData.color1,
      size1: app.globalData.size1,
      companyType: app.globalData.companyType,
      company: company
    });
    console.log("user>>>>>>>>", company)
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
  },
  bindKeyInput(e){
  console.log(e)
 
  },
  bindKeyInput(e){
  console.log(e)
  var that =this
  var company = that.data.company
  var id = e.target.id
  var value= e.detail.value
  switch(id){
    case "applyName":
      company[0].companyname = value
      break;
    case "selectCompanyName":
      company[0].remarkname =value
    break;
    case "capital":
      company[0].registeredcapital = value
      break;
    case "management":
      company[0].businessscope = value
      break;
    case "contact":
      company[0].linkman = value
      break;
    case "contactType":
      company[0].linkphone = value
      break;
  }
  that.setData({
    company: company
  })

  }
})