<template>
  <div>
    <topImg :src='require("../assets/img/swiper6.png")'></topImg>
    <!-- 公司理念 -->
    <div class="section-title">
        <div>Company History</div>
        <div>公司历程</div>
    </div>
    <div class="company_history main right_l_scroll">
      <el-card shadow="hover" class="elcard">
        <div class="company_history_list clearf">
          <div class="company_history_img fl">
            <img src="../assets/img/hist1.png" alt="">
          </div>
          <div class="company_history_content fl">
            <h3>2017 年</h3>
            <ul>
              <li>世界上第一台污泥界面仪</li>
              <li>1项发明专利</li>
              <li>5项实用新型专利</li>
              <li>1项软件著作权证书</li>
            </ul>
          </div>
        </div>
      </el-card>
       <el-card shadow="hover" class="elcard">
        <div class="company_history_list clearf">
          <div class="company_history_img fl">
            <img src="../assets/img/hist2.png" alt="">
          </div>
          <div class="company_history_content fl">
            <h3>2018 年</h3>
            <ul>
              <li>物联网液位仪</li>
              <li>变频功率分析仪移动系统V1.0</li>
              <li>1项软件著作权证书</li>
            </ul>
          </div>
        </div>
      </el-card>
       <el-card shadow="hover" class="elcard">
        <div class="company_history_list clearf">
          <div class="company_history_img fl">
            <img src="../assets/img/hist3.png" alt="">
          </div>
          <div class="company_history_content fl">
            <h3>2019 年</h3>
            <ul>
              <li>气田远程加注控制系统</li>
              <li>环境空气质量监测系统</li>
              <li>智能井盖（锁）系统</li>
              <li>1项发明专利</li>
              <li>1项实用新型专利</li>
              <li>1项软件著作权证书</li>
            </ul>
          </div>
        </div>
      </el-card>
       <el-card shadow="hover" class="elcard">
        <div class="company_history_list clearf">
          <div class="company_history_img fl">
            <img src="../assets/img/hist4.png" alt="">
          </div>
          <div class="company_history_content fl">
            <h3>2020 年</h3>
            <ul>
              <li>智能Nbiot数据采集终端</li>
              <li>Nbiot + BT组网核心模组</li>
              <li>2项实用新型专利</li>
              <li>1项发明专利</li>
              <li>1项外观设计专利</li>
            </ul>
          </div>
        </div>
      </el-card>
    </div>
    <!-- 专利证书 -->
    <div class="section-title">
        <div>Patent Certificate</div>
        <div>专利证书</div>
    </div>
    <div class="patent-certificate main right_l_scroll">
      <el-carousel trigger="click" height="350px" :interval="2000" indicator-position="none">
      <el-carousel-item v-for="item in patent" :key="item.id">
        <div class="patent-certificate-list">
          <img v-lazy="item.patentlista" alt="">
          <img v-lazy="item.patentlistb" alt="">
          <img v-lazy="item.patentlistc" alt="">
          <img v-lazy="item.patentlistd" alt="">
        </div>
      </el-carousel-item>
    </el-carousel>
    </div>
  </div>
</template>

<script>
import topImg from '@/components/topImg.vue'
export default {
  data () {
    return {
      patent: [{
        id: 0,
        patentlista: require('../assets/img/zhuanli1.jpg'),
        patentlistb: require('../assets/img/zhuanli2.jpg'),
        patentlistc: require('../assets/img/zhuanli3.jpg'),
        patentlistd: require('../assets/img/zhuanli4.jpg')
      }, {
        id: 1,
        patentlista: require('../assets/img/zhuanli5.jpg'),
        patentlistb: require('../assets/img/zhuanli6.jpg'),
        patentlistc: require('../assets/img/zhuanli7.jpg'),
        patentlistd: require('../assets/img/zhuanli8.jpg')
      }, {
        patentlista: require('../assets/img/zhuanli9.jpg'),
        patentlistb: require('../assets/img/zhuanli10.jpg')
      }]
    }
  },
  components: {
    topImg
  }

}
</script>

<style scoped>
.elcard{
  width: 49%;
}
.elcard:nth-child(3),.elcard:nth-child(4){
  margin-top: 10px;
}
.company_history{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.company_history_img img{
  width: 200px;
  height: 200px;
}
.company_history_content{
  margin-left: 40px;
}
.company_history_content h3 {
  text-align: center;
}
.company_history_content ul {
  list-style-type: disc;
  text-align: left;
}
.company_history_content ul li{
  line-height: 30px;
}
.patent-certificate-list{
  display: flex;
  justify-content: space-around;
}
.patent-certificate-list img{
  width: 22%;
}
</style>
