import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: () => import('../views/Start'),
    meta: { transitionName: 'slide', title: 'Старт', login: 'false'}
  },
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
    meta: { title: 'Профиль'}
  },
  {
    path: '/journal',
    name: 'journal',
    component: () => import('../views/Journal'),
    meta: { title: 'Журнал операций'}
  },
  {
    path: '/buy',
    name: 'buy',
    component: () => import('../views/Buy'),
    meta: { title: 'Покупка'}
  },
  {
    path: '/sell',
    name: 'sell',
    component: () => import('../views/Sell'),
    meta: { title: 'Продажа'}
  },
  {
    path: '/cash',
    name: 'cash',
    component: () => import('../views/CashTransactions'),
    meta: { title: 'Кассовые операции'}
  },
  {
    path: '/cash/admission',
    name: 'admission',
    component: () => import('../views/Admission'),
    meta: { transitionName: 'slide', title: 'Поступления'}
  }
  ,
  {
    path: '/stock',
    name: 'stock',
    component: () => import('../views/Stock'),
    meta: {title: 'Склад'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
