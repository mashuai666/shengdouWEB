<template>
  <div>
    <topImg :src='require("../assets/img/swiper6.png")'></topImg>
     <!-- 产品服务 -->
    <div class="section-title">
        <div>Technical Support</div>
        <div>技术支持</div>
    </div>
    <div class="technical-support main">
        <div class="jk">软件技术</div>
        <img src="../assets/img/ruanjianjs.png" alt="" class="right_l_scroll">
        <div class="line"></div>
        <div class="jk">硬件技术</div>
        <img src="../assets/img/yingjianjs.png" alt="" class="right_l_scroll">
    </div>
  </div>
</template>

<script>
import topImg from '@/components/topImg.vue'
export default {
  components: {
    topImg
  }
}
</script>

<style scoped>
.technical-support img{
    display: block;
    margin:0 auto;
}
.jk{
    background-color: #256499;
    font-size: 24px;
    height: 33px;
    width: 110px;
    border-radius: 0 20px 20px 0;
    color: #fff;
    padding-left: 10px;
}
.line{
    width: 100%;
    height: 1px;
    background-color: #ccc;
    margin: 10px 0;
}
</style>
