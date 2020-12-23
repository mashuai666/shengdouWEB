<template>
    <div class="pro-list">
               <div class="pro-list-img">
                 <img :src='img' alt="">
               </div>
               <div class="pro-list-right">
                 <div>{{title}}</div>
                 <div>{{detail}}</div>
                 <div>查看详情</div>
               </div>
             </div>
</template>

<script>
export default {
  name: 'productList',
  props: {
    img: String,
    title: String,
    detail: String
  }
}
</script>

<style scoped>

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
  height: 200px;
  position: relative;
}
.pro-list-right div:nth-child(1){
  font-size: 16px;
}
.pro-list-right div:nth-child(2){
  font-size: 13px;
  padding-top: 10px;
  text-indent: 2em;
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #999999;
}
.pro-list-right div:nth-child(3){
  padding-top: 10px;
  font-size: 14px;
  cursor: pointer;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  width: 100px;
  text-align: center;
  bottom: 15px;
}
</style>
