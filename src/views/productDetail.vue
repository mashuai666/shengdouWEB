<template>
  <!-- 设备详情界面 -->
  <div>
    <topImg :src='require("../assets/img/swiper6.png")'></topImg>
    <!-- 设备详情 -->
    <div class="section-title">
        <div>Product Detail</div>
        <div>产品详情</div>
    </div>
    <div class="product-detail main">
      <!-- 左边tab栏 -->
      <producSolidTab></producSolidTab>
      <!-- 右边详情页 -->
      <div class="product-content">
        <h3>{{productDetail.name}}</h3>
        <!-- 设备简介 -->
        <div class="detail"></div>
        <!-- 设备图片 -->
        <img v-lazy='productDetail.cardImg' alt="" class="img">
        <!-- 设备参数 -->
        <div class="message"></div>
        <!-- 厂商信息 -->
        <div class="manufacturer">
          <div class="a manufacturer-list"></div>
          <div class="b manufacturer-list"></div>
          <div class="c manufacturer-list"></div>
          <div class="d manufacturer-list"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topImg from '@/components/topImg.vue'
import producSolidTab from '@/components/producSolidTab.vue'
export default {
  data () {
    return {
      productDetail: ''
    }
  },
  components: {
    producSolidTab,
    topImg
  },
  mounted () {
    this.product()
    this.content()
  },
  methods: {
    // 获取该界面的设备信息
    product () {
      var that = this
      var productId = this.$route.query.productId
      // 设备全部列表信息
      var productList = this.$store.getters.getproductlist
      // console.log(productList)
      // 遍历设备列表 查找与地址栏参数相同的设备并赋值给data中的productDetail
      for (var key in productList) {
        console.log(key + '---' + productList[key].id)
        if (productId === productList[key].id) {
          that.productDetail = productList[key]
        }
      }
      // 检测地址栏的参数是不是空的，如果为空则证明没有这个设备，返回产品中心
      if (this.productDetail !== null && this.productDetail !== '' && this.productDetail !== undefined) {
        // console.log('这不是空的')
      } else {
        // console.log('这是空的')
        this.$router.push('/productCenter')
      }
    },
    // 设置界面的显示信息
    content () {
      // console.log(this.productDetail.message)
      document.querySelector('.detail').innerHTML = this.productDetail.productDetail
      document.querySelector('.message').innerHTML = this.productDetail.message
      document.querySelector('.a').innerHTML = this.productDetail.manufacturer.a
      document.querySelector('.b').innerHTML = this.productDetail.manufacturer.b
      document.querySelector('.c').innerHTML = this.productDetail.manufacturer.c
      document.querySelector('.d').innerHTML = this.productDetail.manufacturer.d
    }
  }
}
</script>

<style scoped>
.product-detail{
    display: flex;
}
.product-content{
  background-color:#F8F8F8;
  margin-left: 20px;
  width: 800px;
  padding: 10px;
}
.product-content h3{
  text-align: center;
  color: #006DD2;
}
.detail{
  text-indent: 2em;
}
.manufacturer{
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.manufacturer-list{
  width: 50%;
}
.img{
  width: 300px;
  height: 300px;
  display: block;
  margin: 10px auto;
}
</style>
