<template>
  <div>
    <!-- banner -->
    <div class="block">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in banner" :key="item.id">
          <img v-lazy="item.src" alt="" class="banner">
          <!-- <img src="../assets/img/bannerA.jpg" alt=""> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 关于我们 -->
    <div class="section-title">
        <div>ABOUT US</div>
        <div>关于我们</div>
    </div>
    <div class="about-us main clearf right_l_scroll" id="aaa">
        <div class="about-us-img fl">
            <img src="../assets/img/aboutUs1.jpg" alt="" class="about-us-img-1">
            <img src="../assets/img/aboutUs2.jpg" alt="" class="about-us-img-2">
        </div>
        <div class="about-us-content fr">
            <h2>西安圣豆电子信息技术有限公司</h2>
            <p>公司成立于2015年7月，在公司发展壮大的5年里，我们始终为客户提供好的产品和技术支持、 健全的售后服务。</p>
            <p>主要产品有智能井盖控制器、智能井盖锁、空气环境监测仪、液位监测仪、气田甲醇加注控制系统、污泥界面仪；营业额平均每年递增100%。</p>
            <p>我们的团队由博士、硕士、学士组成，具备多年跨国上市公司的研发、测试、生产管理经验。</p>
            <p>我们提供工业物联网解决方案及相关产品，包括软件、硬件、传感器的设计开发。已经获得发明专利1项，实用新型专利7项，软件著作权证书3项。</p>
            <p>圣豆愿携手合作伙伴并进，开启物联黄金时代。</p>
       </div>
    </div>
    <!-- 产品中心 -->
    <div class="section-title ">
        <div>Product Center</div>
        <div>产品中心</div>
    </div>
      <div class="product-service main right_l_scroll">
      <el-carousel :interval="4000" type="card" height="500px" indicator-position="none">
        <el-carousel-item v-for="item in product" :key="item.id" class="cardItem" >
          <img v-lazy="item.src" alt="">
          <h3>{{ item.name }}</h3>
          <div class="product-detail" style="white-space: pre-wrap;">
          {{ item.detail }}
          </div>
      </el-carousel-item>
  </el-carousel>
       <el-button class="moreDetail" type="primary" @click="toproduct">查看更多</el-button>
   </div>
    <!-- 团队成员 -->
    <div class="section-title ">
        <div>Team Members</div>
        <div>团队成员</div>
    </div>
    <div class="team-members main right_l_scroll">
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
    <div class="section-title ">
        <div>Cooperative Enterprise</div>
        <div>合作企业</div>
    </div>
    <div class="cooperative-enterprise main right_l_scroll">
      <img src="../assets/img/company3.png" alt="">
      <img src="../assets/img/company1.png" alt="">
      <img src="../assets/img/company4.png" alt="">
      <img src="../assets/img/company2.jpg" alt="">
      <img src="../assets/img/company5.jpg" alt="">
    </div>
    <!-- 公司位置 -->
    <div class="section-title ">
        <div>Company Location</div>
        <div>公司位置</div>
    </div>
    <div class="map main right_l_scroll">
        <img src="../assets/img/map.png" class="map_img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banner: [{
        src: require('../assets/img/swiper1.png'),
        describe: '第一张',
        id: 1
      }, {
        src: require('../assets/img/swiper2.png'),
        describe: '第二张',
        id: 2
      }, {
        src: require('../assets/img/swiper3.png'),
        describe: '第三张',
        id: 3
      }, {
        src: require('../assets/img/swiper4.png'),
        describe: '第四张',
        id: 4
      }],
      product: [{
        name: '智慧管网',
        detail: '利用健全的管网地理信息系统与先进的管网传感监测网络协助管网管理部门快速发现管网系统的潜在问题，精准诊断管网问题所在的结点与地点，减少管网维修与维护的人力物力成本，为管网整体系统的扩展规划与调整优化提供直观的、准确的、系统的数据信息支持',
        src: require('../assets/img/a_product.png'),
        id: 1
      }, {
        name: '智慧消防',
        detail: '智慧消防是一种先进的解决方案，与传统消防相比，注重打通各系统间的信息孤岛、提升感知预警能力和应急指挥智慧能力。通过更早发现、更快处理，将火灾风险和影响降到最低。',
        src: require('../assets/img/b_product.png'),
        id: 2
      }, {
        name: '智慧水务',
        detail: '智慧水务通过数采仪、无线网络、水质水压表等在线监测设备实时感知城市供排水系统的运行状态，并采用可视化的方式有机整合水务管理部门与供排水设施，形成"城市水务物联网"，并可将海量水务信息进行及时分析与处理，并做出相应的处理结果辅助决策建议',
        src: require('../assets/img/c_product.png'),
        id: 3
      }, {
        name: '智慧气田',
        detail: '该系统能够有效节约30%左右的甲醇的生产消耗；以上气田计算，一年节约1.2亿元的生产消耗，配套带有气田远程甲醇加注控制系统移动端管理软件',
        src: require('../assets/img/d_product.png'),
        id: 4
      }]
    }
  },
  mounted () {
  },
  methods: {
    toproduct () {
      this.$router.push({ path: '/productCenter' })
    }
  }
}
</script>

<style scoped>
.banner{
    width: 100%;
    display: table-cell;
    vertical-align: middle;
    height: 100%;
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
.about-us{
    height: 450px;
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
    transition: all .5s;
}
.team-members-detail:hover{
  color: #31416D;
   margin-top: 7px;
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
/* 公司位置 */
.map_img{
  width: 800px;
  margin: 0 auto;
  display: block;
  box-shadow: 10px 10px 5px #888888;
}
</style>
