<template>
  <div>
    <topImg :src='require("../assets/img/swiper5.png")'></topImg>
    <!-- 产品服务 -->
    <div class="section-title">
        <div>Product Service</div>
        <div>产品服务</div>
    </div>
    <div class="product-server main">
      <!-- 左边tab栏 -->
      <producSolidTab class="right_l_scroll"></producSolidTab>
      <!-- 右边内容区域 -->
      <div class="product-right-content">
        <!-- 智慧管网 -->
        <div class="list right_l_scroll">
          <div class="list-tit"><span>智慧管网</span>/PRODUCT</div>
          <div class="list-con">
             <productList :title='this.$store.getters.getproductlist.proSD1901.name' :detail='this.$store.getters.getproductlist.proSD1901.cardDetail' :img='this.$store.getters.getproductlist.proSD1901.cardImg' :num='this.$store.getters.getproductlist.proSD1901.id'></productList>
             <productList :title='this.$store.getters.getproductlist.proSD2001A.name' :detail='this.$store.getters.getproductlist.proSD2001A.cardDetail' :img='this.$store.getters.getproductlist.proSD2001A.cardImg' :num='this.$store.getters.getproductlist.proSD2001A.id'></productList>
             <productList :title='this.$store.getters.getproductlist.proSD2001B.name' :detail='this.$store.getters.getproductlist.proSD2001B.cardDetail' :img='this.$store.getters.getproductlist.proSD2001B.cardImg' :num='this.$store.getters.getproductlist.proSD2001B.id'></productList>
             <productList :title='this.$store.getters.getproductlist.proSD1801.name' :detail='this.$store.getters.getproductlist.proSD1801.cardDetail' :img='this.$store.getters.getproductlist.proSD1801.cardImg' :num='this.$store.getters.getproductlist.proSD1801.id'></productList>
             <!-- <div class="none"></div> -->
          </div>
        <div class="more" title="查看更多产品" alt="查看更多产品"><router-link to="/pipe">>>></router-link></div>
        </div>
         <!-- 智慧消防 -->
        <div class="list right_l_scroll">
          <div class="list-tit"><span>智慧消防</span>/PRODUCT</div>
          <div class="list-con">
             <productList :title='this.$store.getters.getproductlist.proSD20TSM01H.name' :detail='this.$store.getters.getproductlist.proSD20TSM01H.cardDetail' :img='this.$store.getters.getproductlist.proSD20TSM01H.cardImg' :num='this.$store.getters.getproductlist.proSD20TSM01H.id'></productList>
             <productList :title='this.$store.getters.getproductlist.proSD1902.name' :detail='this.$store.getters.getproductlist.proSD1902.cardDetail' :img='this.$store.getters.getproductlist.proSD1902.cardImg' :num='this.$store.getters.getproductlist.proSD1902.id'></productList>
             <!-- <div class="none"></div> -->
          </div>
        <div class="more" title="查看更多产品" alt="查看更多产品"><router-link to="/firecontrol">>>></router-link></div>
        </div>
         <!-- 智慧水务 -->
        <div class="list right_l_scroll">
          <div class="list-tit"><span>智慧水务</span>/PRODUCT</div>
          <div class="list-con">
             <productList :title='this.$store.getters.getproductlist.proSD1801.name' :detail='this.$store.getters.getproductlist.proSD1801.cardDetail' :img='this.$store.getters.getproductlist.proSD1801.cardImg' :num='this.$store.getters.getproductlist.proSD1801.id'></productList>
             <productList :title='this.$store.getters.getproductlist.proSD20TSM01H.name' :detail='this.$store.getters.getproductlist.proSD20TSM01H.cardDetail' :img='this.$store.getters.getproductlist.proSD20TSM01H.cardImg' :num='this.$store.getters.getproductlist.proSD20TSM01H.id'></productList>
             <!-- <div class="none"></div> -->
          </div>
        <div class="more" title="查看更多产品" alt="查看更多产品"><router-link to="/water">>>></router-link></div>
        </div>
         <!-- 智慧气田 -->
        <div class="list right_l_scroll">
          <div class="list-tit"><span>智慧气田</span>/PRODUCT</div>
          <div class="list-con">
             <productList :title='this.$store.getters.getproductlist.proSD1903.name' :detail='this.$store.getters.getproductlist.proSD1903.cardDetail' :img='this.$store.getters.getproductlist.proSD1903.cardImg' :num='this.$store.getters.getproductlist.proSD1903.id'></productList>
             <productList :title='this.$store.getters.getproductlist.proSD1800.name' :detail='this.$store.getters.getproductlist.proSD1800.cardDetail' :img='this.$store.getters.getproductlist.proSD1800.cardImg' :num='this.$store.getters.getproductlist.proSD1800.id'></productList>
             <productList :title='this.$store.getters.getproductlist.proSD1801.name' :detail='this.$store.getters.getproductlist.proSD1801.cardDetail' :img='this.$store.getters.getproductlist.proSD1801.cardImg' :num='this.$store.getters.getproductlist.proSD1801.id'></productList>
             <productList :title='this.$store.getters.getproductlist.proSD1902B.name' :detail='this.$store.getters.getproductlist.proSD1902B.cardDetail' :img='this.$store.getters.getproductlist.proSD1902B.cardImg' :num='this.$store.getters.getproductlist.proSD1902B.id'></productList>
             <!-- <div class="none"></div> -->
          </div>
        <div class="more" title="查看更多产品" alt="查看更多产品"><router-link to="/gas">>>></router-link></div>
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
    // console.log(this.$store.getters.getproductlist)
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
.more{
  position: relative;
  left: 50%;
  margin-left: -50px;
  width: 100px;
  text-align: center;
}

.more:hover{
  animation:mo 1.5s linear infinite;
}
@keyframes mo{
  0%,100%,54%{
    transform: translateX(0);
  }
  18%,36%{
    transform: translateX(4px);
  }
  27%{
    transform: translateX(1px);
  }
}
.more a{
  color: #30A4BB !important;
  font-size: 20px;
  letter-spacing: 5px;
  font-weight: bold;
}
.none{
  width: 379px;
  height: 218px;
}
</style>
