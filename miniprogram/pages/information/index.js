// pages/information/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      schedule:false,
      organization:true,
      expend:false,
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
              text:'机器人视觉感知与控制技术国家工程研究中心',
              text2:'（湖南大学）',
            },
            {
              text:'计算机辅助设计与图形系统全国重点实验室',
              text2:'（浙江大学）',
            },
            {
              text:'机器人视觉感知与控制技术国家工程研究中心',
              text2:'（湖南大学）',
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
              text:'杨建军、钱卫东、孙彦广、田正宏、王晓霖'
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
              text:'柴天佑、王天然、桂卫华、钱锋、陈杰'
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
              text:'赵  骥、王  伟、周昆、孙  健、刘  丁'
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
              text:'郭强、何安瑞、荆丰伟、彭功状、彭开香'
            },
            {
              text:'邵健、肖雄、杨荃、张瀚文、张勇军'
            },
            {
              text:'蔡昕烨、韩中洋、康强、刘全利、隋天举'
            },
            {
              text:'孙希明、王东、王天宇、赵珺、庄严'
            },
            {
              text:'代学武、丁进良、高伟男、李渝哲、李智'
            },
            {
              text:'刘强、刘腾飞、王笑波、杨涛、周平'
            },
            {
              text:'柴利、陈积明、程鹏、黄文君、苏宏业'
            },
            {
              text:'孙优贤、王文海、王亚卡、徐赤、杨春节'
            },
            {
              text:'白玉磊、陈辞、董博、房小兆、黄旭民'
            },
            {
              text:'康嘉文、赖冠宇、孙为军、杨祖元、钟伟锋'
            },
            {
              text:'高国光、兰文华、李春富、李戎、李昱'
            },
            {
              text:'梁琼、孙继超、叶萌、翟庆明、朱珂'
            },
            {
              text:'包珂申、杜文莉、冯恩波、侍洪波、宋冰'
            },
            {
              text:'唐漾、王峰、王长明、杨明磊、钟伟民'
            },
            {
              text:'方遒、冯运、江一鸣、梁桥康、欧阳博'
            },
            {
              text:'彭伟星、谭浩然、谢核、颜志、袁礼伟'
            },
            {
              text:'张辉、曾鹏、金自立、李  栋、刘卫鹏'
            },
            {
              text:'刘意杨、潘福成、彭  松、王  旭、王军义'
            },
            {
              text:'杨  旭、赵吉斌、陈立平、高曙明、雷娜'
            },
            {
              text:'刘检华、刘玉生、刘振宇、宋学官、陶飞'
            },
            {
              text:'童若锋、徐岗、黄伟超、焦尚彬、梁莉莉'
            },
            {
              text:'刘涵、穆凌霞、尚婷、王文卿、吴亚丽'
            },
            {
              text:'辛菁、杨延西、李清、张和明、贾超'
            },
            {
              text:'李文鹏、苏伟、于秀明、张旸旸、郭海博'
            },
            {
              text:'郭宇、姜沛林、李仲衡、罗毅、佟德辉'
            },
            {
              text:'王志、张雪涛、赵彦龙、郑帅、陈晓武'
            },
            {
              text:'胡兵、李辉、骆德欢、钱卫东、秦凯运'
            },
            {
              text:'陶钧、吴毅平、徐端、杨海荣、戈黎红'
            },
            {
              text:'刘进、芦华、马寰、齐亮、沈俊、沈玉玲'
            },
            {
              text:'王庆东、王少波、钟瑾、安豆、曹建福'
            },
            {
              text:'韩德强、李东鹤、刘烃、马小博、沈超'
            },
            {
              text:'苏洲、杨清宇、张萌、白振华、丁伟利'
            },
            {
              text:'郭增军、华长春、李晓刚、刘  爽、马  锴'
            },
            {
              text:'裴文良、甄  然、周  磊、俞立、张文安'
            },
            {
              text:'杜胜利、顾锞、郭楠、韩红桂、李文静'
            },
            {
              text:'蒙西、乔俊飞、汤健、王鼎、杨翠丽'
            },
            {
              text:'陈晓方、陈志文、黄科科、蒋朝辉、李繁飙'
            },
            {
              text:'李勇刚、孙备、王雅琳、袁小锋、周灿'
            },
            {
              text:'陈国梁、邓方、方浩、甘明刚、胡文山'
            },
            {
              text:'庞中华、孙健、王钢、王晓鹏、杨荣妮'
            },
            {
              text:'陈曦、杨秦敏、刘勇'
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
              text:'柴天佑、桂卫华、钱锋、谭建荣、杨华勇'
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
              text:'张楠、罗芳、邓瑞龙'
            },
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'副秘书长：',
          text: [
            {
              text:'王坛、贺诗波'
            },
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'大会总务处总务长：',
          text: [
            {
              text:'杨倩、潘良'
            },
          ]
        },
        { 
          type:'black',
          expend:false,
          title:'副总务长：',
          text: [
            {
              text:'章颢缤、喻洁、林庆'
            },
          ]
        },
      ]
    },
    showSchedule() {
      this.setData({
        schedule:true,
        organization:false
      })
    },
    showOrganization() {
      this.setData({
        organization:true,
        schedule:false
      })
    },
    ifExpend(e) {
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