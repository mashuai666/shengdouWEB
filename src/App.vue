<template>
  <div id="app">
      <!-- 导航菜单 以及 LOGO -->
    <div class="nav clearf">
      <a href="javascript:;">
        <img src="./assets/img/LOGO.png" alt="" class="fl">
      </a>
      <el-menu :default-active="activeIndex2" class="el-menu-demo fr" mode="horizontal" @select="handleSelect"  text-color="#000" active-text-color="#0F8799">
      <el-menu-item index="1">
       <router-link to='/index'>首页</router-link>
        </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <router-link to='/productCenter'>产品中心</router-link>
          </template>
        <el-menu-item index="2-1">污水界面仪</el-menu-item>
        <el-menu-item index="2-2">智能井盖</el-menu-item>
        <el-menu-item index="2-3">气田</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" >解决方案</el-menu-item>
      <el-menu-item index="4">
        <a target="_blank">经典案例</a>
      </el-menu-item>
      <el-menu-item index="5" >技术支持</el-menu-item>
      <el-menu-item index="6" >公司理念</el-menu-item>
      <el-menu-item index="7" >新闻中心</el-menu-item>
      </el-menu>
    </div>
    <!-- 内容区域 -->
    <router-view></router-view>

    <!-- 底部通用 -->
    <div class="bottom-comm">
      <div class="map_bg main">
        <img src="./assets/img/map_bg.png" class="main" alt="">
      </div>
      <div class="map main">
        <img src="./assets/img/map.png" class="map_img" alt="">
      </div>
      <div class="bot-nav">
        <div class="main">
          <ul class="clearf bot-nav-ul">
            <!-- 首页 -->
            <li class="fl">
              <ul>
                <li>公司首页</li>
                <li><a href="javascript:;">关于我们</a></li>
                <li><a href="javascript:;">产品中心</a></li>
                <li><a href="javascript:;">团队成员</a></li>
                <li><a href="javascript:;">合作企业</a></li>
              </ul>
            </li>
            <div class="lline"></div>
            <!-- 产品中心 -->
            <li class="fl">
              <ul>
                <li>产品中心</li>
                <li>产品中心</li>
                <li>团队成员</li>
                <li>合作企业</li>
              </ul>
            </li>
            <div class="lline"></div>
            <!-- 解决方案 -->
             <li class="fl">
              <ul>
                <li>关于我们</li>
                <li>产品中心</li>
                <li>团队成员</li>
                <li>合作企业</li>
              </ul>
            </li>
            <div class="lline"></div>
            <!-- 经典案例 -->
             <li class="fl">
              <ul>
                <li>关于我们</li>
                <li>产品中心</li>
                <li>团队成员</li>
                <li>合作企业</li>
              </ul>
            </li>
            <div class="lline"></div>
            <!-- 技术支持 -->
             <li class="fl">
              <ul>
                <li>关于我们</li>
                <li>产品中心</li>
                <li>团队成员</li>
                <li>合作企业</li>
              </ul>
            </li>
            <div class="lline"></div>
            <!-- 公司理念 -->
             <li class="fl">
              <ul>
                <li>关于我们</li>
                <li>产品中心</li>
                <li>团队成员</li>
                <li>合作企业</li>
              </ul>
            </li>
            <div class="lline"></div>
            <!-- 新闻中心 -->
             <li class="fl">
              <ul>
                <li>关于我们</li>
                <li>产品中心</li>
                <li>团队成员</li>
                <li>合作企业</li>
              </ul>
            </li>
            <div class="bot-nav-contact fr">
              <div class="phone">177******** 177********</div>
              <div class="address">西安市雁塔区瑞鑫·摩天城四号楼二单元80401</div>
              <div class="e-mail">*************@***.com</div>
              <div class="ercode">
                <img src="./assets/img/aboutUs1.jpg" alt="" style="width:100px;height:100px">
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

/* 底部通栏 */
.map_img{
  width: 800px;
  margin: 0 auto;
  display: block;
  margin-top: -20px;
}
.bottom-comm .bot-nav{
  height: 250px;
  width: 100%;
  background-color: #4B545D;
  margin-top: -50px;
  overflow: hidden;
  /* background-image: url('../assets/img/bottom_bg.png'); */
  /* background-size: cover; */
}
.bot-nav-ul{
  margin-top: 80px;
}
.bot-nav-ul,.bot-nav-ul a{
  font-size: 12px;
  color: #fff;
}
.bot-nav-ul a{
  margin-top: 10px;
  display: block;
}
.lline{
  width: 2px;
  height: 80px;
  background-color: #8CAABE;
  float: left;
  margin: 0 20px;
}
.phone,.address,.e-mail{
  width: 300px;
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding-left: 50px;
  background-position-y: center !important;
}
.phone{
  background: url('./assets/img/bot_icon1.png') no-repeat;
}
.address{
  background: url('./assets/img/bot_icon2.png') no-repeat;
}
.e-mail{
  background: url('./assets/img/bot_icon3.png') no-repeat;
}
.ercode{
  position: relative;
  top: 100px;
}
</style>
