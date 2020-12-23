import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 要设置的全局变量
    // productList 设备卡片上的信息
    productList: {
      proSD1901: {
        name: '不锈钢无钥匙远程开锁智能井盖',
        // 设备小卡片介绍
        cardDetail: '根据城市通信人井（不局限于通信人井）分布特点，通过NB-IoT组网快速实现城市井盖智能实时云监测物联网系统。产品基于NB-IOT通讯传输技术，将人、井、云平台三方有效互联。终端实时采集井盖工作状态数据，对非法开启、异动等异常状态及时报警。手机APP/云平台可实时报告井盖状态，施工导航，无钥匙远程开锁，自动上锁，非法开启报警等功能。',
        // 设备小卡片的封面图片
        cardImg: require('../assets/productImg/SD19011.png')
      },
      proSD2001A: {
        name: '井盖智能监控终端（翻倾/移位）',
        cardDetail: '支持Coap, MQTT, LWM2M, TCP等多协议的系统和物联网终端。直接对接电信天翼物联，中移物联的one-NET协议，京东物联，阿里云，华为云等平台。',
        cardImg: require('../assets/productImg/SD2001A1.png')
      },
      proSD2001B: {
        name: '管网智能监控终端（翻倾、水位、气体)',
        cardDetail: '支持Coap, MQTT, LWM2M, TCP等多协议的系统和物联网终端。直接对接电信天翼物联，中移物联的one-NET协议，京东物联，阿里云，华为云等平台。',
        cardImg: require('../assets/productImg/SD2001B1.png')
      },
      proSD2001C: {
        name: '无线智能垃圾桶监测终端',
        cardDetail: '支持Coap, MQTT, LWM2M,TCP 等多协议的系统和物联网终端。直接对接电信天翼物联，中移物联的one-NET协议，京东物联，阿里云，华为云等平台。',
        cardImg: require('../assets/productImg/SD2001C1.png')
      },
      proSD2001D: {
        name: '市政用无线智能温湿度监测终端',
        cardDetail: '支持Coap, MQTT, LWM2M,TCP 等多协议的系统和物联网终端。直接对接电信天翼物联，中移物联的one-NET协议，京东物联，阿里云，华为云等平台。',
        cardImg: require('../assets/productImg/SD2001D1.png')
      },
      proSD1801: {
        name: '无线智能物联网液位仪',
        cardDetail: '本系统将基于我公司SD1600污泥监测系统来研制，目前为汉中污水厂专门定制研发。测量距离0.3~5米。系统包含：监测传感器：数据盒内采样传输电路及其程',
        cardImg: require('../assets/productImg/SD18011.png')
      },
      proSD1902: {
        name: '无线智能空气噪声环境监测仪',
        cardDetail: '电源：220V交流电源供电,网络频段：GSM/NBIOT/GPRS 900/1800 MHz，最大工作电流：1A',
        cardImg: require('../assets/productImg/SD19021.png')
      },
      proSD1902B: {
        name: '4G二沉池泥位显示大屏',
        cardDetail: '电源：12V直流电源供电,无线通信网络：4G CAT1,显示二沉池数量：1~4个,最大工作电流：1A',
        cardImg: require('../assets/productImg/SD1902B1.png')
      },
      proSD20TSM01H: {
        name: '无线智能消防栓监测终端',
        cardDetail: '无线智能消防栓监测终端是一款锂亚电池供电、具有无线通讯功能的高精度智能仪表，利用各种智能传感器和低功耗物联网通讯技术，实现对消防栓的倾斜、碰撞、水压、高低压报警等情况进行监控，将消防栓的状态信息、水压、报警等数据通过无线网络实时发送给监控中心，监控中心对数据进行存储、分析、查询、报警处理等功能，并及时安',
        cardImg: require('../assets/productImg/SD20TSM01H1.png')
      },
      proSD1800: {
        name: '无线智能物联网污泥界面仪',
        cardDetail: '城市污水处理厂的沉淀池的作用主要是去除SS中的可沉固体物质，去除效率可达90%以上。 一般情况下，刮泥机将泥刮入泥斗，再用污泥泵从泥斗中排泥。沉淀池的污泥界面分布对于沉淀池的运行至关重要。传统的监测污泥界面的方法是用管式取样器来取样测量，不仅操作麻烦，而且不能实现连续测量。',
        cardImg: require('../assets/productImg/SD18001.png')
      },
      proSD1903: {
        name: '气田远程加注控制系统',
        cardDetail: '该系统能够有效节约30%左右的甲醇的生产消耗；以上气田计算，一年节约1.2亿元的生产消耗。',
        cardImg: require('../assets/productImg/SD19031.png')
      }
    }
  },
  getters: {
    // get方法 获取变量
    getproductlist (state) {
      return state.productList
    }
  },
  mutations: {
    // set方法 修改变量
    setDevicelist (state, value) {
      state.productList = value
    }
  }
})
