/*
 * @Description: router模块
 * @Author: Fore-Zhang
 * @Date: 2020-02-10 16:54:56
 * @LastEditTime: 2020-03-28 22:24:35
 * @LastEditors: 项目组长
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [{
    name: 'login',
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    // name: 'Layout',
    path: '/',
    component: () => import('@/views/Layout'),
    children: [{
        name: 'home',
        path: '',
        component: () => import('@/views/home')
      },
      {
        name: 'user',
        path: '/user',
        component: () => import('@/views/user')
      },
    ]

  },
]
const router = new VueRouter({
  routes
})

export default router
