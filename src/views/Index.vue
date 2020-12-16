<template>
  <div>
    <!-- banner -->
    <div class="block">
      <el-carousel height="600px">
        <el-carousel-item v-for="item in banner" :key="item.id">
          <img :src="item.src" alt="" class="banner">
          <!-- <img src="../assets/img/bannerA.jpg" alt=""> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 关于我们 -->
    <div class="section-title">
        <div>ABOUT US</div>
        <div>关于我们</div>
    </div>
    <div class="about-us main clearf">
        <div class="about-us-img fl">
            <img src="../assets/img/aboutUs1.jpg" alt="" class="about-us-img-1">
            <img src="../assets/img/aboutUs2.jpg" alt="" class="about-us-img-2">
        </div>
        <div class="about-us-content fr">
            <h2>西安圣豆电子信息技术有限公司</h2>
            <p>公司成立于2015年，在公司发展壮大的5年里，我们始终为客户提供好的产品和技术支持、 健全的售后服务。</p>
            <p>我们是一家专业从事物联网软硬件产品研发、生产和销售于一体的科技 类公司。自2014年4月创建以来，公司秉承“以产品成就客户、以 质量满意客户、以服务帮助客户”的理念，凭借雄厚的技术实力和资源优势，致力于智能化粮库系统、数字煤场系统及远程物联监测系统等多个领域。公司目前已拥有从研发、销售到服务的完整体系。</p>
            <p>近年来，天通物联与清华大学、西安交通大学、西安电子科技大学、西北工业大 学等国内高校进行了广泛的合作，在电子测控和智能化管理平台方面都取得了显著的成果，公司凭借精英型的技术和商务团队，不断汲取和探索远程物联网行业的最新发展 动向，融入到新产品的开发中，并拥有多项自主知识产权。
我们所希望的智能不再只是一条符号串，一段代码或者指令；而是一个“触手可及”的世界。它的出现可以 使我们的世界实现无缝的链接，让我们时刻感知世界，穿梭未来。它开始的创新智慧生活，是未来的工作体验和生活空间，从这里开始，抛开繁琐，让我们去体验生活 和工作的简单从容。未来已至，触手可及。这正是我们所需要的！</p>
        </div>
    </div>
    <!-- 产品中心 -->
    <div class="section-title">
        <div>Product Center</div>
        <div>产品中心</div>
    </div>
      <div class="product-service main">
      <el-carousel :interval="4000" type="card" height="500px" indicator-position="none">
        <el-carousel-item v-for="item in product" :key="item" class="cardItem" >
          <img :src="item.src" alt="">
          <h3>{{ item.name }}</h3>
          <div class="product-detail" style="white-space: pre-wrap;">
          {{ item.detail }}
          </div>
      </el-carousel-item>
  </el-carousel>
       <el-button class="moreDetail" type="primary" @click="toproduct">查看更多</el-button>
   </div>
    <!-- 团队成员 -->
    <div class="section-title">
        <div>Team Members</div>
        <div>团队成员</div>
    </div>
    <div class="team-members main">
        <div class="team-members-list">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/img/LF.png" class="image team-members-img">
              <div  class="team-members-detail">
                <div>刘 丰</div>
                <div>圣豆电子创始人 CEO</div>
                <div>西安电子科技大学 硕士导师</div>
                <div>长安大学 硕士导师</div>
                <div>湖南省退伍军人创新创业指导老师</div>
                <div>曾任Intel公司研发部经理</div>
                <div>曾任英飞凌科技高级工程师</div>
                <div>曾任湖南康通电子高级副总经理</div>
              </div>
            </el-card>
        </div>
        <div class="team-members-list">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/img/XLZ.png" class="image team-members-img">
              <div  class="team-members-detail">
               <div>刘洋岐</div>
               <div>技术合伙人 首席系统构架师</div>
               <div>软硬件全栈设计师</div>
               <div>智灸发明人 持续创业者</div>
               <div>德国红点设计奖设计师</div>
               <div>澳洲塔斯马尼亚大学学士</div>
              </div>
            </el-card>
        </div>
        <div class="team-members-list">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/img/SBS.png" class="image team-members-img">
              <div  class="team-members-detail">
                 <div>史鑫龙</div>
                 <div>联合创始人 硬件总工</div>
                 <div>曾任德州仪器工程师</div>
                 <div>曾任华为工程师</div>
                 <div>西安电子科技大学硕士、博士</div>
              </div>
            </el-card>
        </div>
        <div class="team-members-list">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/img/WG.png" class="image team-members-img">
              <div  class="team-members-detail">
                 <div>王青泉</div>
                 <div>联合创始人</div>
                 <div>销售总监&结构工程师</div>
                 <div>市政行业创业经验丰富</div>
                 <div>长安大学 学士</div>
              </div>
            </el-card>
        </div>
    </div>
    <!-- 合作企业 -->
    <div class="section-title">
        <div>Cooperative Enterprise</div>
        <div>合作企业</div>
    </div>
    <div class="cooperative-enterprise main">
      <img src="../assets/img/company3.png" alt="">
      <img src="../assets/img/company1.png" alt="">
      <img src="../assets/img/company4.png" alt="">
      <img src="../assets/img/company2.jpg" alt="">
      <img src="../assets/img/company5.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banner: [{
        src: require('../assets/img/bannerA.jpg'),
        describe: '第一张',
        id: 1
      }, {
        src: require('../assets/img/bannerA.jpg'),
        describe: '第二张',
        id: 2
      }, {
        src: require('../assets/img/bannerA.jpg'),
        describe: '第三张',
        id: 3
      }, {
        src: require('../assets/img/bannerA.jpg'),
        describe: '第四张',
        id: 4
      }],
      product: [{
        name: 'SD1901 不锈钢无钥匙远程开锁智能井盖',
        detail: '根据城市通信人井（不局限于通信人井）分布特点，通过NB-IoT组网快速实现城市井盖智能实时云监测物联网系统。终端实时采集井盖工作状态数据，对非法开启、异动等异常状态及时报警。手机APP/云平台可实时报告井盖状态，施工导航，无钥匙远程开锁，自动上锁，非法开启报警等功能。',
        src: require('../assets/img/bannerA.jpg'),
        id: 1
      }, {
        name: 'SD2001-A 井盖智能监控终端（翻倾/移位）',
        detail: '监测井盖翻倾、移位',
        src: require('../assets/productImg/products1.png'),
        id: 2
      }, {
        name: 'SD2001-B 井盖智能监控终端（翻倾/水位/气体）',
        detail: '监测井盖翻倾、水位超限、甲烷气体',
        src: require('../assets/img/bannerA.jpg'),
        id: 3
      }, {
        name: 'SD2001-C 无线智能垃圾桶监测终端',
        detail: '智慧垃圾桶解决方案城市垃圾桶物联网开箱满桶报警物联网解决方案，监测是否扣盖，垃圾高度。',
        src: require('../assets/img/bannerA.jpg'),
        id: 4
      }, {
        name: 'SD2001-D 市政用无线智能温湿度监测终端',
        detail: '智慧城市道路区域温湿度传感器，预警道路结冰、道路周边空气质量、道路照明监测',
        src: require('../assets/img/bannerA.jpg'),
        id: 5
      }, {
        name: 'SD1801 无线智能物联网液位仪',
        detail: '本系统将基于我公司SD1600污泥监测系统来研制，目前为汉中污水厂专门定制研发,测量距离0.3~5米。',
        src: require('../assets/img/bannerA.jpg'),
        id: 6
      }, {
        name: 'SD1902 无线智能空气噪声环境监测仪',
        detail: '可用于环境监测，温度、湿度、噪声、风速、风向、PM2.5等',
        src: require('../assets/img/bannerA.jpg'),
        id: 7
      }, {
        name: 'SD20TSM-01H(BLE&LoRa) 无线智能消防栓监测终端',
        detail: '无线智能消防栓监测终端是一款具有无线通讯功能的高精度智能仪表，利用各种智能传感器和低功耗物联网通讯技术，将消防栓的状态信息、水压、报警等数据通过无线网络实时发送给监控中心，监控中心对数据进行存储、分析、查询、报警处理等功能，帮助用户实现对消防栓及时高效的监管。',
        src: require('../assets/img/bannerA.jpg'),
        id: 8
      }, {
        name: 'SD1800 无线智能物联网污泥界面仪',
        detail: '中控可视化和语音报警系统，采用水下结构+嵌入式数据采集通信系统+光学传感器+机械自动清洁装置',
        src: require('../assets/img/bannerA.jpg'),
        id: 9
      }, {
        name: 'SD1903 气田远程甲醇加注控制系统',
        detail: '该系统能够有效节约30%左右的甲醇的生产消耗；以上气田计算，一年节约1.2亿元的生产消耗',
        src: require('../assets/img/bannerA.jpg'),
        id: 10
      }]
    }
  },
  methods: {
    toproduct () {
      this.$router.push({ path: '/productCenter' })
      console.log('11')
    }
  }
}
</script>

<style scoped>
.banner{
    width: 100%;
    display: table-cell;
    vertical-align: middle;
    height: 650px;
}
/* banner的一些样式 */
.el-carousel__button{
    height: 8px;
    width: 50px;
}
.el-carousel__arrow{
    background-color: white;
    color: black;
    font-size: 20px;
}
.el-carousel__arrow:hover{
    background-color: black;
    color: white;
}
.el-carousel__arrow--left{
    left: 50px;
}
.el-carousel__arrow--right{
    right: 50px;
}
.el-menu.el-menu--horizontal{
    margin-top: 30px;
    margin-left: 30px;
}
.about-us-img{
    position: relative;
    width: 510px;
}
.about-us-img img{
    width: 500px;
    height: 400px;
}
.about-us-img-1{
    position: absolute;
    left: 0px;
    top: 0px;
}
.about-us-img-2{
    position: absolute;
    left: 20px;
    top: 20px;
    border: 3px solid #fff;
}
.about-us-content{
    width: 420px;
    margin-top: -22px;
}
.about-us-content h2{
    letter-spacing: 2px;
}
.about-us-content p{
    font-size: 14px;
    text-indent: 2em;
}
/* 产品中心 */
.product-center-bgimg{
  width: 100%;
}
.cardItem>img{
  width: 100%;
  height: 300px;
}
.cardItem{
  width: 496px;
}
.cardItem>h3{
  text-align: center;
}
.cardItem>.product-detail{
  font-size: 14px;
  text-indent: 2rem;
  padding: 0 20px;
}
.moreDetail{
  display: block;
  position: relative;
  bottom: 10px;
  left: 50%;
  margin-left: -56px;
  z-index: 5;
  margin-top: -37px;
}
.cardItem:nth-child(2n) {
  background-color: #E4E7ED;
}
.cardItem:nth-child(2n+1) {
  background-color: #EBEEF5;
}
/* 团队成员 */
.team-members{
    display: flex;
    justify-content: space-between;
}

.team-members-list .team-members-img{
    width: 210px;
    height: 215px;
}
.team-members-detail{
    margin-top: 10px;
    width: 210px;
    font-size: 14px;
    text-align: center;
    height: 160px;
}
.team-members-detail div:nth-child(1){
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
}
/* 合作企业 */
.cooperative-enterprise img{
  height: 50px;
  margin:0 0px 0 10px;
}
</style>
