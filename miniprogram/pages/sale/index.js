// pages/sale/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    saleContainerHeight: '',
    list: true,
    ifBottom: false


  },
  showlist() {
    wx.vibrateShort()
    this.setData({
      list: true,
      pic: false
    })
  },
  showPic() {
    wx.vibrateShort()
    this.setData({
      pic: true,
      list: false
    })
  },
  toTheTop() {
    wx.vibrateShort()
    wx.pageScrollTo({
      scrollTop:0,
      duration:500
    })
  },
  onPageScroll: function(e) {
    
    if(e.scrollTop > 150) {
      this.setData({
        ifBottom: true
      })
    } else {
      this.setData({
        ifBottom: false
      })
    }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.getSystemInfo({
      success: res => {
        this.setData({
          saleContainerHeight: res.windowHeight,
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
