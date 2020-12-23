<template>
  <div>
    <topImg :src='require("../assets/img/swiper2.png")'></topImg>
    <!-- 智慧管网 -->
    <div class="section-title">
        <div>Smart Network</div>
        <div>智慧管网</div>
    </div>
    <div class="product-server main">
      <!-- 左边tab栏 -->
      <producSolidTab></producSolidTab>
      <!-- 右边内容区域 -->
      <div class="product-right-content">
        <!-- 热门推荐 -->
        <div class="hot">
          <div class="list-tit" style="width:235px"><span>热门推荐</span>/HOT RECOMMEND</div>
          <div class="hot-con">
            <div class="hot-con-img">
              <img :src='this.$store.getters.getproductlist.proSD1901.cardImg' alt="">
            </div>
            <div class="hot-right-con">
              <div>{{this.$store.getters.getproductlist.proSD1901.name}}</div>
              <div>{{this.$store.getters.getproductlist.proSD1901.cardDetail}}</div>
              <div>咨询热线 1**********</div>
            </div>
          </div>
        </div>
        <!-- 智慧管网 -->
        <div class="list">
          <div class="list-tit"><span>智慧管网</span>/PRODUCT</div>
          <div class="list-con">
             <productList :title='this.$store.getters.getproductlist.proSD1901.name' :detail='this.$store.getters.getproductlist.proSD1901.cardDetail' :img='this.$store.getters.getproductlist.proSD1901.cardImg'></productList>
             <productList :title='this.$store.getters.getproductlist.proSD2001A.name' :detail='this.$store.getters.getproductlist.proSD2001A.cardDetail' :img='this.$store.getters.getproductlist.proSD2001A.cardImg'></productList>
             <productList :title='this.$store.getters.getproductlist.proSD2001B.name' :detail='this.$store.getters.getproductlist.proSD2001B.cardDetail' :img='this.$store.getters.getproductlist.proSD2001B.cardImg'></productList>
             <productList :title='this.$store.getters.getproductlist.proSD1801.name' :detail='this.$store.getters.getproductlist.proSD1801.cardDetail' :img='this.$store.getters.getproductlist.proSD1801.cardImg'></productList>
             <productList :title='this.$store.getters.getproductlist.proSD2001D.name' :detail='this.$store.getters.getproductlist.proSD2001D.cardDetail' :img='this.$store.getters.getproductlist.proSD2001D.cardImg'></productList>
             <productList :title='this.$store.getters.getproductlist.proSD2001C.name' :detail='this.$store.getters.getproductlist.proSD2001C.cardDetail' :img='this.$store.getters.getproductlist.proSD2001C.cardImg'></productList>
             <productList :title='this.$store.getters.getproductlist.proSD1902.name' :detail='this.$store.getters.getproductlist.proSD1902.cardDetail' :img='this.$store.getters.getproductlist.proSD1902.cardImg'></productList>
             <div class="none"></div>
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
    console.log(this.$store.getters.getproductlist)
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
  font-size: 14px;
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
