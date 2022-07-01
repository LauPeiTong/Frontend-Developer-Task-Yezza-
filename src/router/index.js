import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/calendar',
    name: 'calendar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "calendar" */ '../views/Calendar.vue')
  },
  {
    path: '/request',
    name: 'request',
    component: () => import(/* webpackChunkName: "request" */ '../views/Request.vue')
  },
  {
    path: '/client',
    name: 'client',
    component: () => import(/* webpackChunkName: "client" */ '../views/Client.vue')
  },
  {
    path: '/menu',
    name: ' menu',
    component: () => import(/* webpackChunkName: "menu" */ '../views/Menu.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
