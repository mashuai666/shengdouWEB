import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import productCenter from '../views/productCenter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/productCenter',
    name: 'productCenter',
    component: productCenter
  }
]

const router = new VueRouter({
  routes
})

export default router
