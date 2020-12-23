<template>
  <div>
       <topImg :src='require("../assets/img/swiper6.png")'></topImg>
       <!-- 公司理念 -->
    <div class="section-title">
        <div>Corporate philosophy</div>
        <div>公司理念</div>
    </div>
    <img src="../assets/img/idea1.png" alt="" class="right_l_scroll">
    <img src="../assets/img/idea2.png" alt="" style="marginTop:50px" class="right_l_scroll">
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
img{
    width: 100%;
}
</style>
