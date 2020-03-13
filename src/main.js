/*
 * @Description:配置文件
 * @Author: DA-HUA
 * @Date: 2020-02-10 16:54:56
 * @LastEditTime: 2020-03-13 20:50:10
 * @LastEditors: 小刀
 */
import Vue from 'vue';
// 引用element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
// 引用路由
import router from './router';
// 公共样式
import './styles/style.less'

Vue.config.productionTip = false
// 引用全部ElementUI
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
