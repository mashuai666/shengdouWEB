import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'
import './assets/css/element.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'
import store from './module/vuex.js'

Vue.use(ElementUI)
Vue.use(VueLazyload)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
