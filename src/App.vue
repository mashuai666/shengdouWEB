<template>
  <div id="app">
    <el-backtop class="toTop"  v-show="!(path === '/error')">
      UP
    </el-backtop>
      <!-- 导航菜单 以及 LOGO -->
    <div class="nav clearf" v-show="!(path === '/error')">
      <a href="/index">
        <img src="./assets/img/LOGO.png" alt="" class="fl">
      </a>
      <el-menu router :default-active="$route.path" class="el-menu-demo fr" mode="horizontal" text-color="#000" active-text-color="#409EFF">
      <el-menu-item index="/index">首页</el-menu-item>
      <el-menu-item index="/productCenter">产品中心</el-menu-item>
      <el-menu-item index="/experience">公司历程</el-menu-item>
      <el-menu-item index="/technology">技术支持</el-menu-item>
      <el-menu-item index="/idea">公司理念</el-menu-item>
      </el-menu>
    </div>
    <!-- 内容区域 -->
    <router-view></router-view>

    <!-- 底部通用 -->
    <div class="bottom-comm"  v-show="!(path === '/error')">
      <div class="bottom-comm-all">
        <div class="main bottom-comm-main">
        <div class="bottom-left">
          <h3>Our contact way</h3>
          <h4>我们的联系方式</h4>
          <p>联系QQ：***********</p>
          <p>联系邮箱：*****@***.com</p>
          <p>联系电话：******* ******</p>
          <p>联系地址：西安市碑林区太白立交西北角瑞鑫摩天城2栋4单元8层</p>
          <div class="ercode">
            <img src="./assets/img/ercodea.png" alt="">
            <img src="./assets/img/ercodea.png" alt="">
          </div>
        </div>
        <div class="bottom-right">
          <h3>Feedback to us</h3>
          <h4>对我们的反馈</h4>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="您的姓名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="您的电话" prop="phone">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="您的意见" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交意见</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        </div>
      </div>
      <div class="copyright">
        Copyright © 2020 2020西安圣豆电子信息技术有限公司
      </div>
    </div>
    <a class="qqTouch" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1251618937&site=qq&menu=yes"  v-show="!(path === '/error')"><img border="0" src="http://wpa.qq.com/pa?p=2:1251618937:53" alt="点击使用QQ与我交谈~" title="点击使用QQ与我交谈~"/></a>
  </div>
</template>

<script>
require('./assets/js/scrollAnimation.js')
export default {
  data () {
    return {
      path: '',
      ruleForm: {
        name: '',
        phone: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '姓名是必填项', trigger: 'blur' },
          { min: 2, max: 5, message: '请填写正确的姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '联系电话是必填项', trigger: 'blur' },
          { min: 11, max: 11, message: '请填写正确的电话', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请填写您的意见', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('您的反馈提交成功，我们会及时阅读并处理')
        } else {
          console.log('提交出错了!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  mounted () {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0)
    })
    this.path = this.$route.path
    console.log(this.$route.path)
  },
  watch: {
    $route (to, from) {
      this.path = to.path
    }
  }
}
</script>

<style scoped>
#app{
  width: 100%;
  height: 100%;
}
.nav{
  height: 100px;
  width: 1200px;
  margin: 0 auto;
}
.nav img{
    height: 96px;
    padding: 2px;
    vertical-align: middle;
    margin-left: 50px;
}
.el-menu.el-menu--horizontal{
  border-bottom: 0;
  margin-top: 15px;
}
/* 底部通栏 */
.bottom-comm{
  margin-top: 80px;
}

.bottom-comm-all{
  width: 100%;
  color: #fff;
  background-color: #409EFF;
  background: url('./assets/img/bottom_bgt.jpg');
  background-size: 100% 100%;
  padding-top: 20px;
  margin-top: -20px;
}
.bottom-comm-main{
  display: flex;
  justify-content: space-around;
}
.bottom-left h3, .bottom-right h3{
  padding-bottom: 0;
  margin-bottom: 0;
  color: #19B2B0;
}
.bottom-left h4, .bottom-right h4{
  margin-top: 0;
  padding-top: 0;
}
.ercode{
  display: flex;
  justify-content: space-around;
}
.ercode img{
  width: 100px;
}
.copyright{
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #2B2F30;
  text-align: center;
  color: #ccc;
  font-size: 12px;
}
.qqTouch{
  position:fixed;
  bottom:100px;
  left: 10px;
  z-index: 5;
}
.qqTouch:hover{
  /* animation: tb 1s ease  infinite alternate; */
  animation:tb 1.5s linear infinite;
}
@keyframes tb{
  0%,100%,54%{
    transform: translateY(0);
  }
  18%,36%{
    transform: translateY(-4px);
  }
  27%{
    transform: translateY(-1px);
  }
}
</style>
