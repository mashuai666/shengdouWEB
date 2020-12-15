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
    <div class="product-center-bgc">
        <div class="product-center main">
          <div class="product-center-list">
            <div class="product-center-img">
              <img src="../assets/productImg/product1.png" alt="">
            </div>
            <div class="product-center-title">
              <el-button type="primary">智能井盖</el-button>
            </div>
          </div>
          <div class="product-center-list">
            <div class="product-center-img">
              <img src="../assets/productImg/product1.png" alt="">
            </div>
            <div class="product-center-title">
              <el-button type="primary">智能井盖</el-button>
            </div>
          </div>
          <div class="product-center-list">
            <div class="product-center-img">
              <img src="../assets/productImg/product1.png" alt="">
            </div>
             <div class="product-center-title">
              <el-button type="primary">智能井盖</el-button>
            </div>
          </div>
          <div class="product-center-list">
            <div class="product-center-img">
              <img src="../assets/productImg/product1.png" alt="">
            </div>
            <div class="product-center-title">
              <el-button type="primary">智能井盖</el-button>
            </div>
          </div>
        </div>
        <div class="dark"></div>
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
        src: '/img/bannerA.eaffac64.jpg',
        describe: '第一张',
        id: 1
      }, {
        src: '/img/bannerA.eaffac64.jpg',
        describe: '第二张',
        id: 2
      }, {
        src: '/img/bannerA.eaffac64.jpg',
        describe: '第三张',
        id: 3
      }, {
        src: '/img/bannerA.eaffac64.jpg',
        describe: '第四张',
        id: 4
      }]
    }
  }
}
</script>

<style>
.banner{
    width: 100%;
    display: table-cell;
    vertical-align: middle;
    height: 650px;
}
.nav{
  height: 130px;
  width: 1300px;
  margin: 0 auto;
}
.nav img{
    line-height: 100px;
    height: 100px;
    padding: 15px 0;
    vertical-align: middle;
    margin-left: 50px;
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
.product-center-bgc{
    background: url('../assets/productImg/productBgc.jpg') no-repeat top left;
    width: 100%;
    height: 500px;
    position: relative;
}
.product-center{
    display: flex;
    height: 500px;
    align-items: center;
    justify-content: space-around;
    position: relative;
    z-index: 1;
}

.product-center-list{
    text-align: center;
}
.product-center-img img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
.product-center-title{
    margin-top: 20px;
}
.dark{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    background-color: #000;
    opacity: .8;
    z-index: 0;
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
