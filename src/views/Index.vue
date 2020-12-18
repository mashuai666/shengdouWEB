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
        name: 'SD1901 不锈钢无钥匙远程开锁智能井盖',
        detail: '根据城市通信人井（不局限于通信人井）分布特点，通过NB-IoT组网快速实现城市井盖智能实时云监测物联网系统。终端实时采集井盖工作状态数据，对非法开启、异动等异常状态及时报警。手机APP/云平台可实时报告井盖状态，施工导航，无钥匙远程开锁，自动上锁，非法开启报警等功能。',
        src: require('../assets/img/a_product.png'),
        id: 1
      }, {
        name: 'SD2001-C 无线智能垃圾桶监测终端',
        detail: '智慧垃圾桶解决方案城市垃圾桶物联网开箱满桶报警物联网解决方案，监测是否扣盖，垃圾高度。',
        src: require('../assets/img/b_product.png'),
        id: 2
      }, {
        name: 'SD1801 无线智能物联网液位仪',
        detail: '本系统将基于我公司SD1600污泥监测系统来研制，目前为汉中污水厂专门定制研发,测量距离0.3~5米。',
        src: require('../assets/img/c_product.png'),
        id: 3
      }, {
        name: 'SD1903 气田远程甲醇加注控制系统',
        detail: '该系统能够有效节约30%左右的甲醇的生产消耗；以上气田计算，一年节约1.2亿元的生产消耗',
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
