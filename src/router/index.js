import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import productCenter from '../views/productCenter.vue'
import technology from '../views/technology.vue'
import idea from '../views/idea.vue'
import experience from '../views/experience.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/productCenter',
    name: 'productCenter',
    component: productCenter
  },
  {
    path: '/technology',
    name: 'technology',
    component: technology
  },
  {
    path: '/idea',
    name: 'idea',
    component: idea
  },
  {
    path: '/experience',
    name: 'experience',
    component: experience
  }
]

const router = new VueRouter({
  routes
})

export default router
