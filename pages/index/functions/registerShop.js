// pages/index/functions/registerShop.js
var app = getApp()
var WxParse = require('../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   * \n
   */
  data: {
     content:[
       [
        //  工商注册
         {title: "玉先企业的优势：", text: "1、解决客户无地址注册公司难题\n2、熟悉专业流程，为客户节省时间\n3、跟政府园区关系熟、可享受优惠政策\n4、相关后续服务全面，一站解决，客户无忧\n"},
         {
           title: "公司注册流程：", text: "1、线上查名：客户提供相关注册信息（包括：公司名称，注册资金，法人、股东信息，经营范围、股东比例等），我们帮客户在网上直接核名，最快两天出结果。\n2、提交注册公司资料，委托授权书、场地证明、财务负责人信息，公司章程、公司设立申请书、法人、股东身份信息等\n3、去工商或园区签字；法人、股东或监事，带上身份证原件到签字地点，验证身份证，签字；\n4、领取公司营业执照；按照规定的时间到园区或工商部门领取营业执照 。" } 
         ],
        //  代理记账
       [
       {
         title: "1、价格", text: "小规模纳税人，   200元/月 （按年预收）\n一般纳税人，   500元/ 月 （按年预收）\n" },
       {
         title: "2、特色服务", text: "进出口企业一般纳税人，  800元/月 （按年预收）\n营改增企业一般纳税人，  700元/ 月 （按年预收）\n"
       },
       {
         title: "3、支持大学生创业", text: "帮客户对接相关大学生创业优惠和补助政策，提供优惠代理记账服务；\n"
       },
       {
         title: "4、代理记账业务流程", text: "A、签订委托代理合同，确定服务内容，服务费用，收费时间等\nB、公司会计陪同客户核定税种，办理开票资料\nC、确定传递票据时间和方式\nD、安排做账会计，负责企业财务处理\nE、后续跟踪服务，负责与企业的日常业务沟通和解答客户问题\n"
       },
       {
         title: "5、代理记账服务内容", text: "税务备案、征管鉴定、制作会计凭证、账务处理、编制会计报表、纳税申报、年度汇算清缴、工商执照年检、企业工商税务知识解答"
       }
       ],
      //  代办职责
       [
       {
         title: "代办资质服务内容", text: "1、企业环评\n2、食品经营许可证\n3、人力资源服务许可证\n4、劳务派遣许可证\n5、建筑类资质\n6、高新技术企业认证\n7、餐饮公司注册\n8、餐饮店注册\n9、废旧物回收注册" }
      
       ],
      //  网站建设
       [
       {
         title: "业务范围：", text: "企业官网型\n外贸专业型\n会员服务型\n企业电商型\n微商专业型\nPC建站\n手机端建站"
       }

       ],
      //  商标专利
       [
       {
         title: "一、业务介绍：", text: "自然人、法人或者其他组织对其生产、制造、加工、拣选或经销的商品或者提供的服务需要取得商标专用权的，应当依法向国家工商行政管理总局商标局(以下简称商标局)提出商标注册申请。商标注册用商品和服务国际分类共有45个类别，其中商品34个类别、服务11个类别。指定使用在商品上的商标为商品商标，指定使用在服务上的商标为服务商标。根据《商标法》有关规定，在我国申请注册商品、服务商标的主体为: 自然人、法人或者其他组织(包括事业单位、社会团体、个体工商业者、个人台伙制企业等)以及符合《商标法》第十七条规定的外国人或者外国企业。\n"
       },
       {
         title: "二、提供书件", text: "1、《商标注册申请书》、《商标代理委托书》(我公司提供)\n2、商标图样8张，要求图样清晰、规格为长和宽不小于5厘米并不大于10厘米。如果指定颜色，则需提供彩色图样8张，并附黑白墨稿1张。\n3、证明申请人主体资格或身份的有效证件复印件2份:\na、申请人为自然人的。应提交本人的身份证和个体工商户营业执照复印件(负责人为申请人);\nb、申请人为企业的，应提交企业法人营业执照或营业执照;\n C、申请人为社团、事业单位或其他组织的, 应提供社团法人登记证或事业单位法人证书，或该组织依法成立的证明文件;\n d、申请人为行政机关的，应提交上级主管机关关于设立该机构的证明文件。\n e、如申请注册的商标是人物肖像，应附送经过公证的肖像权人同意将此肖像作为商标注册的声明文件。"
       }

       ],
      //  宣传推广
       [
       {
         title: "业务范围：", text: "1、户外广告\n2、企业宣传片拍摄\n3、网络优化\n4、营销策划\n5、门店宣传片拍摄"
       }

       ],
      //  小程序开发
       [
       {
         title: "业务范围：", text: "1、电商类小程序\n2、门店类小程序\n3、商城类小程序\n4、外卖类小程序\n5、婚庆类小程序\n6、生活服务类小程序\n7、拼车类小程序\n8、官网类小程序\n9、酒店类小程序\n"
       },
       {
         title: "其他类", text: ""
       }
      
       ],
      //  增值服务
       [
       {
         title: "为企业提供：", text: "1、代开发票\n2、待认证发票\n3、代抄税清卡\n4、代办社保\n5、代办公积金\n6、公司变更注销\n7、代办居住证\n8、代办各种资质"
       }
       ]
     ],
    //  图片地址
     functionImg: [
       { url: app.globalData.appImgUrl +'gongshang.jpg'},
       {url: app.globalData.appImgUrl +'daili.jpg'},
       { url: app.globalData.appImgUrl + 'dbzz.png'},
       { url: app.globalData.appImgUrl + 'wangzhan.jpg'},
       { url: app.globalData.appImgUrl + 'shangbiao.jpg'},
       { url: app.globalData.appImgUrl + 'xuanchuan.jpg'},
       { url: app.globalData.appImgUrl + 'xiaochengxu.jpg' },
       { url: app.globalData.appImgUrl + 'zengzhi.jpg' },
       ],
      //  索引
      indexs:0,
      textArr:[]
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this
    console.log(options.indexs,options.value)
    this.setData({
      indexs: options.indexs,
      value: options.value
    })
    wx.setNavigationBarTitle({
      title: options.value
    })
  
    wx.request({
      url: app.globalData.appUrl + 'text/getByType',
      data: {
        xcxuser_name: "have",
        type: parseInt(options.indexs)+1
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