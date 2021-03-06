import Vue from 'vue'
import VueRouter from 'vue-router'
import Add from '../components/goods/Add'
import Category from '../components/goods/Category'
import GoodsList from '../components/goods/List'
import Params from '../components/goods/Params'
import Home from '../components/Home'
import Login from '../components/Login'
import Order from '../components/order/Order'
import Rights from '../components/power/Rights'
import Roles from '../components/power/Roles'
import Report from '../components/report/Report'
import Users from '../components/user/Users'
import Welcome from '../components/Welcome'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          component: Welcome
        },
        {
          path: '/users',
          component: Users
        },
        {
          path: '/rights',
          component: Rights
        },
        {
          path: '/roles',
          component: Roles
        },
        {
          path: '/categories',
          component: Category
        },
        {
          path: '/params',
          component: Params
        },
        {
          path: '/goods',
          component: GoodsList
        },
        {
          path: '/goods/add',
          component: Add
        },
        {
          path: '/orders',
          component: Order
        },
        {
          path: '/reports',
          component: Report
        }
      ]
    },
    {
      path: '/welcome',
      component: Welcome
    }
  ]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  }
 
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) {
    return next('/login')
  }
  next()
})

export default router
