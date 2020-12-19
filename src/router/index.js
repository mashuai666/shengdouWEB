import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import productCenter from '../views/productCenter.vue'
import technology from '../views/technology.vue'
import idea from '../views/idea.vue'
import experience from '../views/experience.vue'
import error from '../views/error.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
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
    },
    {
      path: '*',
      name: 'error',
      redirect: '/error'
    },
    {
      path: '/error',
      name: 'error',
      component: error
    }
  ]
})

export default router
