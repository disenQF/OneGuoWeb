import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Cate from './views/Cate.vue'
import EatFood from './views/EatFood.vue'
import Cart from './views/Cart.vue'
import Me from './views/Me.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
          path: '/cart',
          name: 'cart',
          component: Cart
      },
      {
          path: '/cate',
          name: 'cate',
          component: Cate
      },
      {
          path: '/me',
          name: 'me',
          component: Me
      },
      {
          path: '/eat',
          name: 'eat',
          component: EatFood
      },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    
  ]
})
