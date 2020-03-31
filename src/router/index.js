import Vue from 'vue'
import VueRouter from 'vue-router'

import home from 'views/home/home'
import cart from 'views/cart/cart'
import classify from 'views/classify/classify'
import profile from 'views/profile/profile'
import detail from 'views/detail/Detail'

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
  },
  {
    path: '/detail/:id',
    component: detail
  }
  
]

const router = new VueRouter({
  routes
})

export default router
