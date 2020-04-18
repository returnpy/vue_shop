import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from '../components/goods/Category'
import Params from '../components/goods/Params'
import Home from '../components/Home'
import Login from '../components/Login'
import Rights from '../components/power/Rights'
import Roles from '../components/power/Roles'
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
