var a = window.innerHeight
sc()
function sc () {
  // 距离顶部高度
  var b = document.documentElement.scrollTop
  var list = document.querySelectorAll('.right_l_scroll')
  console.log(list)
  list.forEach(function (item) {
    var c = item.offsetTop
    item.style.opacity = '0'
    item.style.animation = 'right_l 1s forwards'
    item.style.animationPlayState = 'paused'
    if (a + b > c) {
      item.style['animation-play-state'] = 'running'
      console.log('添加')
    }
  })
}
window.addEventListener('scroll', sc)
