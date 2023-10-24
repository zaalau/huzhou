// pages/doctor/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        conf: true,
        topicContent:[
            {
                title:'10月28日设计开发类',
                picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/WechatIMG116.jpg?sign=861f29c85e12270b6eeb83631bffba11&t=1698031271',
                expend:false
            },
            {
                title:'10月28日运行管理类',
                picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/WechatIMG117.jpg?sign=63c00808df89a6e86194459b8379c3f2&t=1698031283',
                expend:false
            },
        ]
    },
    ifExpend(e) {
        const index = e.currentTarget.dataset.index
        const topicContent = this.data.topicContent
        const newTopicContent = topicContent.map((v,i) => {
          if(index === i) {
            return {
              ...v,
              expend:!v.expend
            }
          }else {
            return {
              ...v
            }
          }
        })
        this.setData({
            topicContent: newTopicContent
        })
      },
    showConf() {
        this.setData({
            conf: true,
            topic: false
        })
      },
      showTopic() {
        this.setData({
            topic: true,
          conf: false
        })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.getSystemInfo({
            success: res => {
              this.setData({
                doctorContainerHeight: res.windowHeight,
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