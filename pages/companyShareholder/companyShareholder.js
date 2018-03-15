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
    imggd: '/img/add@2x.png',
    // 显示表单
    showFrom: false,
    // 增加股东的集合
    user:[],
    // 增加单个股东
    oneList:[
      { name: "", phone: "", email: "", proportion: "", IDCard: "", justIDCardImg: "", backIDCardImg:""}
    ],
    //每次增加要清除
        clearList: [
      { name: "", phone: "", email: "", proportion: "", IDCard: "", justIDCardImg: "", backIDCardImg: "" }
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
    console.log(">>>>>3242")
    if (this.data.showFrom) {
      this.setData({
        imggd: '/img/add@2x.png',
        showFrom: false
      });
    } else {
      this.setData({
        imggd: "/img/jian@2x.png",
        showFrom: true
      });
    }

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
        var oneList = p.data.oneList
        oneList[0].justIDCardImg = tempFilePaths
        p.setData({
           img1: tempFilePaths,
            deleteImg1: "block",
            oneList: oneList
             })
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
        var oneList = p.data.oneList
        oneList[0].backIDCardImg = tempFilePaths
        p.setData({ img2: tempFilePaths })
        p.setData({ img2: tempFilePaths, deleteImg2: "block" ,
          oneList: oneList})
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

  },
  bindKeyInput(e){
     console.log(e)
     var value  = e.detail.value;
     var id = e.currentTarget.id;
     var that = this
     var oneList = that.data.oneList
     console.log(value, id, oneList)
     switch (id){
       case "name": 
         oneList[0].name = value
         that.setData({
           oneList: oneList
         })
       break;   
       case "phone":
         oneList[0].phone =value
         that.setData({
           oneList: oneList
         })
         break;  
       case "email":
         oneList[0].email = value
         that.setData({
           oneList: oneList
         })
         break;
       case "proportion":
         oneList[0].proportion = value
         that.setData({
           oneList: oneList
         })
         break;   
       case "IDCard":
         oneList[0].IDCard = value
         that.setData({
           oneList: oneList
         })
         break;   
     }
  },
  commitUser(){
    if (oneList[0].name != "" && oneList[0].phone != "" && oneList[0].email != "" && oneList[0].proportion != "" && oneList[0].IDCard != "" && oneList[0].justIDCardImg != "" && oneList[0].backIDCardImg != "") {
     
       
    } else {
      wx.showToast({
        title: '请您完善信息',
        icon: 'success',
        duration: 2000
      })
      return;
    }

     var that = this;
     var oneList = that.data.oneList
     var clearList = that.data.clearList
     var user = that.data.user

     user.push(
       oneList
     )
     that.setData({
       user: user,
       oneList:clearList
     })
     console.log(user)
    //  setTimeout(function () {
    //    //你需要执行的代码
    //    oneList[0].name = ""
    //    oneList[0].phone = ""
    //    oneList[0].email = ""
    //    oneList[0].proportion = ""
    //    oneList[0].IDCard = ""
    //    oneList[0].justIDCardImg = ""
    //    oneList[0].backIDCardImg = ""
    //    console.log(user, oneList)
    //  }, 2000)


     console.log(oneList[0])
  
     console.log(user, oneList)
     this.setData({
       imggd: "/img/jian@2x.png",
       showFrom: false
     });
  }

})