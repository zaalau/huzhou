// pages/map/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    car: true,
    dinnerContent: [
        {
            title:'2023年10月27日（周五）',
            timeAndPositon: [
                {
                    timeTitle:'18：00-20:00自助晚餐',
                    text:[
                        {
                            text:'龙之梦瑞峰国际大酒店广州楼2楼莲花厅'
                        },
                        {
                            text:'龙之梦瑞峰国际大酒店广州楼28楼白云自助餐厅'
                        }
                    ]
                }
            ], 
        },
        {
            title:'2023年10月28日（周六）',
            timeAndPositon: [
                {
                    timeTitle:'11：30-13：20自助午餐',
                    text:[
                        {
                            text:'龙之梦瑞峰国际大酒店广州楼2楼莲花厅'
                        },
                        {
                            text:'龙之梦瑞峰国际大酒店广州楼28楼白云自助餐厅'
                        }
                    ]
                },
                {
                    timeTitle:'18：00-20：00晚宴',
                    text:[
                        {
                            text:'太湖龙之梦会议中心深圳厅BC'
                        },
                        
                    ]
                }
            ], 
        },
        {
            title:'2023年10月29日（周日）',
            timeAndPositon: [
                {
                    timeTitle:'11：45-13：20自助午餐',
                    text:[
                        {
                            text:'龙之梦瑞峰国际大酒店广州楼2楼莲花厅'
                        },
                        {
                            text:'龙之梦瑞峰国际大酒店广州楼28楼白云自助餐厅'
                        }
                    ]
                },
                {
                    timeTitle:'18：00-20：00自助晚餐',
                    text:[
                        {
                            text:'龙之梦瑞峰国际大酒店广州楼2楼莲花厅'
                        },
                        {
                            text:'龙之梦瑞峰国际大酒店广州楼28楼白云自助餐厅'
                        }
                    ]
                }
            ], 
        },
    ]
  },
  showCar() {
    this.setData({
      car: true,
      dinner: false,
      place: false,
    })
  },
  showDinner() {
    this.setData({
        car: false,
        dinner: true,
        place: false,
    })
  },
  showPlace() {
    this.setData({
        car: false,
        dinner: false,
        place: true,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.getSystemInfo({
        success: res => {
          this.setData({
            infoContainerHeight: res.windowHeight,
          })
        }
      })
      wx.loadFontFace({
        family: '阿',
        source: 'url("https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E8%8B%B9%E6%96%B9%E9%BB%91%E4%BD%93-%E4%B8%AD%E9%BB%91-%E7%AE%80.ttf?sign=97028368eb60429de716adbdff250e3f&t=1697784723")',
        scopes: ['webview', 'native'], //由于canvas是原生组件，所以需要加上native，否则无效
  
        success: function () {}
      })
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
