import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home/home.vue'
import cart from '../views/cart/cart.vue'
import classify from '../views/classify/classify.vue'
import profile from '../views/profile/profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/classify',
    component: classify
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/cart',
    component: cart
  }
]

const router = new VueRouter({
  routes
})

export default router
