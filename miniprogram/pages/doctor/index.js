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
                picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%9128.jpg?sign=18363af3680b9c15cd4bedd38ca446a2&t=1698214635',
                expend:false,
            },
            
            {
              title:'10月28日生产控制类1',
              picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E7%94%9F%E4%BA%A7%E6%8E%A7%E5%88%B6%E4%B8%8028.jpg?sign=23f56522819cfbe4db9cdb5b980c4cd3&t=1698218030',
              expend:false,
            },
            {
              title:'10月28日生产控制类2',
              picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E7%94%9F%E4%BA%A7%E6%8E%A7%E5%88%B6%E4%BA%8C28.jpg?sign=befcf19afc79a3a8f0525ef28d88a128&t=1698230348',
              expend:false,
            },
            {
              title:'10月28日运行管理类',
              picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E8%BF%90%E8%A1%8C%E7%AE%A1%E7%90%8628.jpg?sign=572d414cd60f68b4fa0cac6b587e2ab0&t=1698214655',
              expend:false,
          },
            {
              title:'10月29日设计开发类',
              picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E8%AE%BE%E8%AE%A1%E5%BC%80%E5%8F%9129.jpg?sign=d8ba5fb926b2f29b98f155f5f12138fd&t=1698229418',
              expend:false,
            },
            {
              title:'10月29日生产控制类',
              picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E7%94%9F%E4%BA%A7%E6%8E%A7%E5%88%B629.jpg?sign=d81c732c1f341ffa2f4498857be2e1e4&t=1698217946',
              expend:false,
            },
            {
              title:'10月29日运行管理类',
              picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E8%BF%90%E8%A1%8C%E7%AE%A1%E7%90%8629.jpg?sign=45815891683816b9547863d347a17856&t=1698214704',
              expend:false,
          },
          
        ],
        confDoc:[
          {
            type:'28',
            small:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B0%8F%E9%AB%98%E6%96%87.jpg?sign=0b815ca714176698a62f2b0f6c56c907&t=1698222456',
            big:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E9%AB%98%E6%96%87.JPG?sign=e21c4fe12d536eb3534e17c845219f6e&t=1698222206'
          },
          {
            type:'28',
            small:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B0%8F%E9%82%AC.jpg?sign=ae84cbd21df37bcb6362f3d126a25d66&t=1698225766',
            big:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E9%82%AC.jpg?sign=fa34407527345ad24e382a110c9cedf8&t=1698229584'
          },
          {
            type:'28',
            small:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B0%8F%E6%9F%B4.jpg?sign=d59d008e1b147d5f205100e8ae4de482&t=1698226406',
            big:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E6%9F%B4.jpg?sign=847b24d2ef095c06834d450e5919d607&t=1698229597'
          },
          {
            type:'29',
            small:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B0%8F%E9%92%B1.jpg?sign=97df843afca9ccda94ab82fbb5b703c6&t=1698226421',
            big:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E9%92%B1.jpg?sign=419fcc86c9ec8a634af54cb5c5c1752b&t=1698229610'
          },
          {
            type:'29',
            small:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B0%8F%E7%8E%8B.jpg?sign=2e40c398055a189385d98cdffa36fafe&t=1698226440',
            big:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E7%8E%8B.jpg?sign=3cec8f11407a45b5ad0c8ed9ba12d672&t=1698294720'
          },
          {
            type:'29',
            small:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B0%8F%E6%9D%A8.jpg?sign=d7b39361e2386c6380ea686e4c683d51&t=1698226453',
            big:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E6%9D%A8.jpg?sign=018d4c8ecfeda0a202ac5270417079b0&t=1698294668'
          },
          {
            type:'29',
            small:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B0%8F%E9%BD%90.jpg?sign=f61c006ad3270aee6484924fa3d506e7&t=1698226460',
            big:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E9%BD%90.jpg?sign=4e5d458c7b13d0a3437f54cd9eb14f22&t=1698229648'
          },
        ],
        ifBottom: false

    },
    preview(e) {
      wx.vibrateShort()
      const picSrc = e.currentTarget.dataset.big
      wx.previewImage({
        current: picSrc, // 当前显示图片的http链接
        urls: [`${picSrc}`] // 需要预览的图片http链接列表
      })
    },
    ifExpend(e) {
        wx.vibrateShort()
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
        wx.vibrateShort()
        this.setData({
            conf: true,
            topic: false
        })
      },
      showTopic() {
        wx.vibrateShort()
        this.setData({
            topic: true,
          conf: false
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