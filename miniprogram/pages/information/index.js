// pages/information/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      ifBottom:false,
      schedule:true,
      organization:false,
      expend:false,
      scheduleContent:[
        {
          title:'日程概览',
          expend:false,
          picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E6%97%A5%E7%A8%8B%E6%A6%82%E8%A7%88.jpg?sign=68ac5b4ec7c068041bd96cf2fee9bede&t=1698231376'
        },
        {
          title:'大会报告日程',
          expend:false,
          picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%A4%A7%E4%BC%9A%E6%8A%A5%E5%91%8A%E6%97%A5%E7%A8%8B.jpg?sign=d23eb1652de59087ecd12ffedd8610b6&t=1698231911'
        },
        {
          title:'10月28日专题论坛日程',
          expend:false,
          picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E4%B8%93%E9%A2%98%E8%AE%BA%E5%9D%9B%E6%97%A5%E7%A8%8B28.jpg?sign=3551d8757fda0fbba6f52f07f921270c&t=1698232074'
        },
        {
          title:'10月29日专题论坛日程',
          expend:false,
          picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E4%B8%93%E9%A2%98%E8%AE%BA%E5%9D%9B%E6%97%A5%E7%A8%8B.jpg?sign=f9506758d35e32c73bafba264af30f72&t=1698232090'
        },
      ],
      organizationContent:[
        { 
          type:'black',
          expend:false,
          title:'主办单位：',
          text: [
            {
              text:'中国自动化学会'
            }
          ]
        },
        { 
          expend:false,
          title:'承办单位：',
          type:'blue',
          text: [
            {
              text:'湖州市人民政府'
            },
            {
              text:'工业控制技术全国重点实验室',
              text2:'（浙江大学等）',
            },
            {
              text:'人机混合增强智能全国重点实验室',
              text2:'（西安交通大学）',
            },
            {
              text:'流程工业综合自动化全国重点实验室',
              text2:'（东北大学）',
            },
            {
              text:'机器人视觉感知与控制技术国家工程研究中心',
              text2:'（湖南大学）',
            },
            {
              text:'计算机辅助设计与图形系统全国重点实验室',
              text2:'（浙江大学）',
            },
            {
              text:'机器人学国家重点实验室',
              text2:'（中国科学院沈阳自动化研究所）',
            },
            {
              text:'自主智能无人系统全国重点实验室',
              text2:'（北京理工大学等）',
            },
            {
              text:'国家流程制造智能调控技术创新中心',
              text2:'（华东理工大学）',
            },
            {
              text:'国家冷轧板带装备及工艺工程技术研究中心',
              text2:'（燕山大学）',
            },
            {
              text:'精密电子制造技术与装备全国重点实验室',
              text2:'（广东工业大学）',
            },
            {
              text:'工业自动化国家工程研究中心',
              text2:'（浙江大学）',
            },
            {
              text:'国家计算机集成制造系统工程技术研究中心',
              text2:'（清华大学）',
            },
            {
              text:'工业智能与系统教育部重点实验室',
              text2:'（中南大学）',
            },
            {
              text:'智能感知与自主控制教育部工程研究中心',
              text2:'（北京工业大学）',
            },
            {
              text:'智能网络与网络安全教育部重点实验室',
              text2:'（西安交通大学）',
            },
            {
              text:'工业装备监测与控制教育部工程研究中心',
              text2:'（大连理工大学）',
            },
            {
              text:'高效轧制与智能制造国家工程研究中心',
              text2:'（北京科技大学）',
            },
            {
              text:'晶体生长设备与系统集成国家地方联合国家工程中心',
              text2:'（西安理工大学）',
            },
            {
              text:'上海电气自动化集团有限公司',
            },
            {
              text:'和利时科技集团有限公司',
            },
            {
              text:'上海宝信软件股份有限公司',
            },
            {
              text:'全国信标委软件与系统工程分委会',
            },
            {
              text:'北京华航唯实机器人科技股份有限公司',
            },
            {
              text:'湖州工业控制技术研究院',
            },

          ]
        },
        {
          expend:false,
          title:'协办单位：',
          type:'blue',
          text: [
            {
              text:'新一代工业互联网安全技术集成攻关大平台',
              text2:'（浙江大学）',
            },
            {
              text:'流体动力基础件与机电系统全国重点实验室',
              text2:'（浙江大学）',
            },
            {
              text:'智能控制系统与智能装备教育部工程研究中心',
              text2:'（燕山大学）',
            },
            {
              text:'工业控制系统安全技术国家工程实验室',
              text2:'（浙江大学）',
            },
            {
              text:'智能感知与系统教育部工程研究中心',
              text2:'（浙江工业大学）',
            },
            {
              text:'浙江省嵌入式系统联合重点实验室',
              text2:'（浙江工业大学）',
            },
            {
              text:'智能决策与信息系统技术国家地方联合工程研究中心',
              text2:'（合肥工业大学）',
            },
            {
              text:'过程优化与智能决策教学部重点实验室',
              text2:'（合肥工业大学）',
            },
            {
              text:'智能过程系统工程教育部工程研究中心',
              text2:'（北京化工大学）',
            },
            {
              text:'复杂产品制造系统技术全国重点实验室',
              text2:'（航天云网科技发展有限责任公司）',
            },
            {
              text:'工业过程先进控制教育部重点实验室',
              text2:'（江南大学）',
            },
            {
              text:'食品科学与技术全国重点实验室',
              text2:'（江南大学）',
            },
            {
              text:'粮食发酵与食品生物制造国家工程研究中心',
              text2:'（江南大学）',
            },
            {
              text:'机器智能与系统控制教育部重点实验室',
              text2:'（山东大学）',
            },
            {
              text:'土木工程防灾减灾全国重点实验室',
              text2:'（同济大学）',
            },
            {
              text:'企业数字化教育部工程研究中心',
              text2:'（同济大学）',
            },
            {
              text:'先进控制与智能装备省重点实验室',
              text2:'（哈尔滨工业大学）',
            },
            {
              text:'自主无人系统技术教育部工程研究中心',
              text2:'（安徽大学）',
            },
            {
              text:'新能源控制国家地方联合工程中心',
              text2:'（山东大学）',
            },
            {
              text:'检测仪表与自动化系统集成技术教育部工程研究中心',
              text2:'（杭州电子科技大学）',
            },
            {
              text:'浙江省工业软件产业技术联盟',
            },
            {
              text:'智能过程系统工程教育部工程研究中心',
              text2:'（北京化工大学）',
            },
            {
              text:'工业信息物理融合系统省部共建协同创新中心',
              text2:'（浙江大学）',
            },
            {
              text:'图像信息处理与智能控制教育部重点实验室',
              text2:'（华中科技大学）',
            },
            
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'顾问委员会：',
          text: [
            {
              text:'孙优贤、吴  澄、郑南宁、张育林、柴天佑'
            },
            {
              text:'王天然、包为民、费爱国、桂卫华、钱  锋'
            },
            {
              text:'陈  杰、王耀南、管晓宏、郑裕国、段广仁'
            },
            {
              text:'邬贺铨、潘云鹤、高  文、陈  纯、吴建平'
            },
            {
              text:'唐立新、杨善林、谭建荣、杨华勇、王成山'
            },
            {
              text:'房建成、魏毅寅、李东旭、蒋昌俊、沈学民'
            },
            {
              text:'郭毅可、崔曙光、任少波、方守恩、郑庆华'
            },
            {
              text:'薛安克、陈  新、刘  丁、王成红、周东华'
            },
            {
              text:'李少远、于海斌、褚  健、乔俊飞、陈积明'
            },
            {
              text:'鲁仁全、夏元清、华长春、方勇纯、贾廷纲'
            },
            {
              text:'杨建军、钱卫东、孙彦广、刘亚芳、田正宏'
            },
            {
              text:'王晓霖'
            },
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'大会主席：',
          text: [
            {
              text:'孙优贤、郑南宁'
            }
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'副主席：',
          text: [
            {
              text:'柴天佑、王天然、桂卫华、钱 锋、陈 杰'
            },
            {
              text:'王耀南、管晓宏、段广仁、谭建荣、杨华勇'
            }
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'大会组织委员会主席：',
          text: [
            {
              text:'任少波'
            }
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'副主席：',
          text: [
            {
              text:'邵之江、程  鹏、金建祥、许  超、杨  倩'
            }
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'大会程序委员会主席：',
          text: [
            {
              text:'柴天佑'
            }
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'副主席：',
          text: [
            {
              text:'苏宏业、杜文莉、阳春华、于海斌、丁进良'
            },
            {
              text:'赵  骥、王  伟、周 昆、孙  健、刘  丁'
            },
            {
              text:'华长春、曾志刚、董海荣、孙彦广、宋晓明'
            },
            {
              text:'周郭许、钱卫东'
            },
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'委员：',
          text: [
            {
              text:'安  豆、白玉磊、白振华、包珂申、蔡昕烨'
            },
            {
              text:'曹建福、曾  鹏、柴  利、陈  辞、陈国梁'
            },
            {
              text:'陈积明、陈立平、陈  曦、陈晓方、陈晓武'
            },
            {
              text:'陈志文、程  鹏、代学武、邓  方、翟庆明'
            },
            {
              text:'丁进良、丁伟利、董 博、杜胜利、杜文莉'
            },
            {
              text:'方  浩、方  遒、房小兆、冯恩波、冯  运'
            },
            {
              text:'甘明刚、高国光、高曙明、高伟男、戈黎红'
            },
            {
              text:'顾  锞、郭海博、郭  楠、郭  强、郭  宇'
            },
            {
              text:'郭增军、韩德强、韩红桂、韩中洋、何安瑞'
            },
            {
              text:'胡  兵、胡文山、华长春、黄科科、黄伟超'
            },
            {
              text:'黄文君、黄旭民、贾  超、江一鸣、姜沛林'
            },
            {
              text:'蒋朝辉、焦尚彬、金自立、荆丰伟、康嘉文'
            },
            {
              text:'康  强、赖冠宇、兰文华、雷  娜、李春富'
            },
            {
              text:'李东鹤、李  栋、李繁飙、李  辉、李  清'
            },
            {
              text:'李  戎、李文静、李文鹏、李晓刚、李勇刚'
            },
            {
              text:'李渝哲、李  昱、李  智、李仲衡、梁莉莉'
            },
            {
              text:'梁桥康、梁  琼、刘  涵、刘检华、刘  进'
            },
            {
              text:'刘  强、刘全利、刘  爽、刘腾飞、刘  烃'
            },
            {
              text:'刘卫鹏、刘意杨、刘  勇、刘玉生、刘振宇'
            },
            {
              text:'芦  华、罗  毅、骆德欢、马  寰、马  锴'
            },
            {
              text:'马小博、蒙  西、穆凌霞、欧阳博、潘福成'
            },
            {
              text:'庞中华、裴文良、彭功状、彭开香、彭  松'
            },
            {
              text:'彭伟星、齐  亮、钱卫东、乔俊飞、秦凯运'
            },
            {
              text:'尚  婷、邵  健、沈  超、沈  俊、沈玉玲'
            },
            {
              text:'侍洪波、宋  冰、宋学官、苏宏业、苏  伟'
            },
            {
              text:'苏  洲、隋天举、孙  备、孙继超、孙  健'
            },
            {
              text:'孙为军、孙希明、孙优贤、谭浩然、汤  健'
            },
            {
              text:'唐  漾、陶  飞、陶  钧、佟德辉、童若锋'
            },
            {
              text:'王  鼎、王  东、王  峰、王  钢、王军义'
            },
            {
              text:'王庆东、王少波、王天宇、王文海、王文卿'
            },
            {
              text:'王晓鹏、王笑波、王  旭、王雅琳、王亚卡'
            },
            {
              text:'王长明、王 志、吴亚丽、吴毅平、肖 雄'
            },
            {
              text:'谢 核、辛 菁、徐  赤、徐  端、徐  岗'
            },
            {
              text:'颜  志、杨春节、杨翠丽、杨海荣、杨明磊'
            },
            {
              text:'杨秦敏、杨清宇、杨  荃、杨荣妮、杨  涛'
            },
            {
              text:'杨  旭、杨延西、杨祖元、叶  萌、于秀明'
            },
            {
              text:'俞  立、袁礼伟、袁小锋、张瀚文、张和明'
            },
            {
              text:'张  辉、张  萌、张文安、张雪涛、张旸旸'
            },
            {
              text:'张勇军、赵吉斌、赵  珺、赵彦龙、甄  然'
            },
            {
              text:'郑  帅、钟  瑾、钟伟锋、钟伟民、周  灿'
            },
            {
              text:'周  磊、周  平、朱  珂、庄  严'
            },
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'大会软件展示委员会主席：',
          text: [
            {
              text:'章颢缤'
            },
            
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'副主席：',
          text: [
            {
              text:'王文海、杨春节、徐正国'
            },
            
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'国家重大专项编写委员会主席：',
          text: [
            {
              text:'孙优贤、陈  杰'
            },
            
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'副主席：',
          text: [
            {
              text:'柴天佑、桂卫华、钱 锋、谭建荣、杨华勇'
            },
            {
              text:'王耀南、管晓宏'
            },
            
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'委员：',
          text: [
            {
              text:'周  昆、何春明、华长春、贾廷纲、刘  丁'
            },
            {
              text:'刘振宇、骆德欢、乔俊飞、宋智广、孙  健'
            },
            {
              text:'谭浩然、谢胜利、辛景民、阳春华、杨春节'
            },
            {
              text:'于海斌、于秀明、张  萌、张文安、张勇军'
            },
            {
              text:'赵  骥、赵  珺、钟伟民、苏宏业、邵之江'
            },
            {
              text:'贺诗波、丁进良'
            },
            
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'大会秘书处秘书长：',
          text: [
            {
              text:'张 楠、罗 芳、邓瑞龙'
            },
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'副秘书长：',
          text: [
            {
              text:'王 坛、贺诗波'
            },
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'大会总务处总务长：',
          text: [
            {
              text:'杨 倩、潘 良'
            },
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'副总务长：',
          text: [
            {
              text:'章颢缤、喻 洁、林 庆'
            },
          ]
        },
      ]
    },
    showSchedule() {
      wx.vibrateShort()
      this.setData({
        schedule:true,
        organization:false
      })
    },
    showOrganization() {
      wx.vibrateShort()
      this.setData({
        organization:true,
        schedule:false
      })
    },
    ifExpend(e) {
      wx.vibrateShort()
      const index = e.currentTarget.dataset.index
      const organizationContent = this.data.organizationContent
      const newOrganizationContent = organizationContent.map((v,i) => {
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
        organizationContent: newOrganizationContent
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