<template>
  <div class="err">
      <div class="errtext">
          抱歉，您访问的界面被这个睡觉的孩子弄丢了~<br>
          <span class="toindex">{{time}}秒后返回首页。。。</span>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: 5
    }
  },
  methods: {
    toindex () {
      var that = this
      var setinterval = setInterval(() => {
        if (that.time !== 0) {
          that.time--
        } else {
          var span = document.querySelector('.toindex')
          span.innerHTML = '正在返回！'
          this.$router.push({ path: '/index' })
          clearInterval(setinterval)
        }
      }, 1000)
    }
  },
  mounted () {
    this.toindex()
  }
}
</script>

<style scoped>
.err{
    width: 100%;
    height: 100%;
    background: url('../assets/img/errorbg.gif') no-repeat;
    background-position: center top;
    background-color: #FDFDFD;
}
.errtext{
    text-align: center;
    letter-spacing: 2px;
    position: absolute;
    left: 50%;
    bottom: 150px;
    font-size: 30px;
    margin-left: -332px;
}
.toindex{
    font-size: 14px;
    color: #252525;
}
</style>
