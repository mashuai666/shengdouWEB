<template>
  <div>
    <img src="../assets/img/bannerA.jpg" alt="" class="product-center-bgimg">
     <!-- 产品服务 -->
    <div class="section-title">
        <div>Technical Support</div>
        <div>技术支持</div>
    </div>
    <div class="technical-support main">
        <div class="jk">软件技术</div>
        <img src="../assets/img/ruanjianjs.png" alt="">
        <div class="line"></div>
        <div class="jk">硬件技术</div>
        <img src="../assets/img/yingjianjs.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.product-center-bgimg{
    width: 100%;
}
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
