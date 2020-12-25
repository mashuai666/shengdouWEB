<template>
  <div>
    <topImg :src='require("../assets/img/swiper2.png")'></topImg>
    <!-- 智慧水务 -->
    <div class="section-title">
        <div>Smart Water</div>
        <div>智慧水务</div>
    </div>
    <div class="product-server main">
      <!-- 左边tab栏 -->
      <producSolidTab class="right_l_scroll"></producSolidTab>
      <!-- 右边内容区域 -->
      <div class="product-right-content">
        <!-- 热门推荐 -->
        <div class="hot right_l_scroll">
          <div class="list-tit" style="width:235px"><span>热门推荐</span>/HOT RECOMMEND</div>
          <router-link to="/productDetail?productId=SD1801" title="点击查看产品详情" alt="点击查看产品详情">
            <div class="hot-con">
              <div class="hot-con-img">
                <img v-lazy='this.$store.getters.getproductlist.proSD1801.cardImg' alt="">
              </div>
              <div class="hot-right-con">
                <div>{{this.$store.getters.getproductlist.proSD1801.name}}</div>
                <div>{{this.$store.getters.getproductlist.proSD1801.cardDetail}}</div>
                <div>咨询热线 13720755705</div>
              </div>
            </div>
          </router-link>
        </div>
        <!-- 智慧水务 -->
        <div class="list right_l_scroll">
          <div class="list-tit"><span>智慧水务</span>/PRODUCT</div>
          <div class="list-con">
             <productList :title='this.$store.getters.getproductlist.proSD1801.name' :detail='this.$store.getters.getproductlist.proSD1801.cardDetail' :img='this.$store.getters.getproductlist.proSD1801.cardImg' :num='this.$store.getters.getproductlist.proSD1801.id'></productList>
             <productList :title='this.$store.getters.getproductlist.proSD20TSM01H.name' :detail='this.$store.getters.getproductlist.proSD20TSM01H.cardDetail' :img='this.$store.getters.getproductlist.proSD20TSM01H.cardImg' :num='this.$store.getters.getproductlist.proSD20TSM01H.id'></productList>
             <!-- <div class="none"></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topImg from '@/components/topImg.vue'
import productList from '@/components/productList.vue'
import producSolidTab from '@/components/producSolidTab.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    productList,
    producSolidTab,
    topImg
  },
  mounted () {
  }
}
</script>

<style scoped>
.product-server{
  display: flex;
}
.product-right-content{
  background-color:#F8F8F8;
  margin-left: 20px;
  width: 800px;
  padding: 10px;
}

.hot-con{
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ececec;
  color: #000;
}

.hot-con-img{
  width: 400px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
.hot-con-img img{
  width: 250px;
  height: 250px;
  transition: all .5s;
}
.hot-con-img img:hover{
  width: 280px;
  height: 280px;
}
.hot-right-con{
  width: 350px;
}
.hot-right-con div:nth-child(1){
  color:#fff;
  padding: 5px 0 5px 10px;
  background-color: #006DD2;
  font-size: 20px;
}
.hot-right-con div:nth-child(2){
  margin-top: 10px;
  background-color: #fff;
  font-size: 15px;
  letter-spacing: 1px;
  text-indent: 2em;
  padding: 10px;
  height: 187px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hot-right-con div:nth-child(3){
  color:#fff;
  padding: 5px 10px 5px 0px;
  background-color: #006DD2;
  font-size: 20px;
  text-align: right;
  margin-top: 10px;
}
.list-tit{
  font-size: 16px;
  border: 1px solid #006DD2;
  border-left-width: 10px;
  border-radius: 0 10px 10px 0;
  color: #BCBCBC;
  background-color: #fff;
  padding: 10px;
  width: 170px;
}
.list-tit span{
  font-size: 20px;
  color: #006DD2;
}

.list-con{
  margin:10px 0 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.pro-list{
  display: flex;
  background-color: #fff;
  border: 1px solid #ececec;
  margin-top: 10px;
}
.pro-list-img img{
  width: 190px;
  height: 190px;
  margin: 10px;
  border: 1px solid #ececec;
}
.pro-list-right{
  width: 165px;
  margin-top: 10px;
}
.pro-list-right div:nth-child(1){
  font-size: 16px;
}
.pro-list-right div:nth-child(2){
  font-size: 13px;
  padding-top: 10px;
}
.pro-list-right div:nth-child(3){
  padding-top: 10px;
  font-size: 14px;
}

.none{
  width: 379px;
  height: 218px;
}
</style>
