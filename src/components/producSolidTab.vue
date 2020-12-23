<template>
   <div class="product-left-tab">
        <div class="title-ch"> 产品中心</div>
        <div class="title-en"> PRODUCT CENTER</div>
          <router-link to="/pipe">
            <div class="tab-list pipe">
              <div class="licon"></div>
              <div>智慧管网</div>
            </div>
          </router-link>
        <router-link to="/water">
          <div class="tab-list water">
            <div class="licon"></div>
            <div>智慧水务</div>
          </div>
        </router-link>
        <router-link to="/gas">
          <div class="tab-list gas">
            <div class="licon"></div>
            <div>智慧气田</div>
          </div>
        </router-link>
        <router-link to="/firecontrol">
          <div class="tab-list gas">
            <div class="licon"></div>
            <div>智慧消防</div>
          </div>
        </router-link>
      </div>
</template>

<script>
export default {
  name: 'producSolidTab'
}
</script>

<style scoped>
.title-ch{
  color: #006DD2;
  font-size: 30px;
  background-color: #F8F8F8;
  font-weight: bold;
  padding-left: 10px;
}
.title-en{
  color: #BCBCBC;
  padding-left: 10px;
  font-size: 16px;
  background-color: #F8F8F8;
  font-weight: bold;
}
.licon{
  width: 20px;
  height: 5px;
  background-color: #fff;
  margin: 0 5px;
}
.tab-list{
  height: 50px;
  line-height: 50px;
  background-color: orange;
  margin-top: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  width: 180px;
}
</style>
