/*
 * @Description: router模块
 * @Author: Fore-Zhang
 * @Date: 2020-02-10 16:54:56
 * @LastEditTime: 2020-03-27 19:22:36
 * @LastEditors: 项目组长
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  // {
  //   name: 'home',
  //   path: '/',
  //   component: () => import('@/views/home')
  // },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login')
  },
    {
      name: 'Layout',
      path: '/',
      component: () => import('@/views/Layout')
    },
]
const router = new VueRouter({
  routes
})

export default router
