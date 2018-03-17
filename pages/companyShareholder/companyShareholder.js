// pages/companyShareholder/companyShareholder.js
var app = getApp()
var util = require("../../utils/util")
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
      { name: "", phone: "", email: "", holdscale: "", idcard: "", idimgZ: "", idimgF:""}
    ],
    //每次增加要清除
        clearList: [
          { name: "", phone: "", email: "", holdscale: "", idcard: "", idimgZ: "", idimgF: "" }
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
        var tempFilePaths = res.tempFilePaths[0]
        var oneList = p.data.oneList

        wx.uploadFile({


          url: 'http://shensu.free.ngrok.cc/Maven_Project/tool/addImg',

          filePath: tempFilePaths,
          name: 'file',
          header: {
            "Content-Type":
            "multipart/form-data"
          },
          success: function (res) {
            console.log(res)
            oneList[0].idimgZ = res.data
            //do something  
            p.setData({
              img1: tempFilePaths,
              deleteImg1: "block",
              oneList: oneList
            })
          }
        })

 
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
        console.log(res)
        var tempFilePaths = res.tempFilePaths[0]
        var oneList = p.data.oneList
        wx.uploadFile({


          url: 'http://shensu.free.ngrok.cc/Maven_Project/tool/addImg',

          filePath: tempFilePaths,
            name: 'file',
            header: {
              "Content-Type":
              "multipart/form-data"
            },
            success: function (res) {
              console.log(res)
              oneList[0].idimgF = res.data
              //do something  

              p.setData({ img2: tempFilePaths })
              p.setData({
                img2: tempFilePaths, deleteImg2: "block",
                oneList: oneList
              })
            }
        })
  
  

 
      }
    })

  },
  deleteImg1: function () {
    var p = this
    var oneList = p.data.oneList
    oneList[0].idimgZ = ""
    p.setData({ img1: "", deleteImg1: "none", oneList: oneList})

  },
  deleteImg2: function () {
    var p = this
    var oneList = p.data.oneList
    oneList[0].idimgF = ""
    p.setData({ img2: "", deleteImg2: "none" ,
      oneList: oneList})

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
         oneList[0].holdscale = value
         that.setData({
           oneList: oneList
         })
         break;   
       case "IDCard":
         oneList[0].idcard = value
         that.setData({
           oneList: oneList
         })
         break;   
     }
  },
  commitUser(){
    var that = this;
    var oneList = that.data.oneList
    var clearList = that.data.clearList
    var user = that.data.user
    if (oneList[0].name != "" && oneList[0].phone != "" && oneList[0].email != "" && oneList[0].holdscale != "" && oneList[0].idcard != "" && oneList[0].idimgZ != "" && oneList[0].idimgF != "") {
   
    
      if (util.isEmail(oneList[0].email)) {

      } else {
        wx.showToast({
          title: '邮箱格式不正确',
          icon: 'success',
          duration: 2000
        })
        return;
      }


      if (util.isIdCard(oneList[0].idcard))
      {

      }else{
        wx.showToast({
          title: '身份证格式不正确',
          icon: 'success',
          duration: 2000
        })
        return;
      }
      if (oneList[0].holdscale<101) {

      } else {
        wx.showToast({
          title: '股份比例不正确',
          icon: 'success',
          duration: 2000
        })
        return;
      }
        
    } else {
      wx.showToast({
        title: '请您完善股东信息',
        icon: 'success',
        duration: 2000
      })
      return;
    }



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
       imggd: "/img/add@2x.png",
       showFrom: false
     });
  },
  deletaIndex(e){
    console.log(e)
    var that = this
    var user = that.data.user
    var id = e.target.id
    
    wx.showModal({
      title: '',
      content: '是否确定删除',
      confirmColor:"#1196DB",
      cancelColor:"#333",
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
  
          user.splice(id, 1);
          that.setData({
            user: user

          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

    
  },
  commitxx(){
  var user = this.data.user
   var pages = getCurrentPages();
   var prevPage = pages[pages.length - 2]; //上一个页面
   //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
   prevPage.setData({
     shareholder: user})
   wx.navigateBack({
     delta: 1
   })
  }

})