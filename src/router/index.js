import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register'),
    meta: { transitionName: 'slide', title: 'Профиль организации', login: 'false'}
  },
  {
    path: '/register/add/',
    name: 'add',
    component: () => import('../views/AddTradingPlace'),
    meta: { transitionName: 'slide', title: 'Торговая точка', login: 'false'}
  },
  {
    path: '/register/add/add-user',
    name: 'add-user',
    component: () => import('../views/AddUser'),
    meta: { transitionName: 'slide', title: 'Ответсвенное лицо', login: 'false'}
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile'),
    meta: { transitionName: 'slide', title: 'Профиль'}
  },
  {
    path: '/journal',
    name: 'journal',
    component: () => import('../views/Journal'),
    meta: { transitionName: 'slide', title: 'Журнал операций'}
  },
  {
    path: '/buy',
    name: 'buy',
    component: () => import('../views/Buy'),
    meta: { transitionName: 'slide', title: 'Покупка'}
  },
  {
    path: '/buy/buy-add',
    name: 'buyAdd',
    component: () => import('../views/BuyAdd'),
    meta: { transitionName: 'slide', title: 'Покупка'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
