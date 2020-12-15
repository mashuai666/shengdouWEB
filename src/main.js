import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'
import './assets/css/element.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
