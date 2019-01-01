import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('@/views/Authentications/Login')
const Register = () => import('@/views/Authentications/Register')
const DefaultContainer = () => import('@/containers/DefaultContainer')

const Dashboard = () => import('@/views/Dashboard')


// Views - Components
const Cards = () => import('@/views/base/Cards')
const Switches = () => import('@/views/base/Switches')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/cards',
          name: 'Cards',
          component: Cards
        },
        {
          path: '/switches',
          name: 'Switches',
          component: Switches
        },
        {
          path: '/tabs',
          name: 'Tabs',
          component: Tabs
        },
        {
          path: '/breadcrumbs',
          name: 'Breadcrumbs',
          component: Breadcrumbs
        },
      ]  
    },  
   {
    path: '/register',
    name: 'Register',
    component: Register,
   },
   {
    path: '/login',
    name: 'Login',
    component: Login,
   }
  ]
})

