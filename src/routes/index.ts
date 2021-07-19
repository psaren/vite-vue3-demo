import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/pages/login'
import Home from '@/pages/home'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
