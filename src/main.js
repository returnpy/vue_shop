import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
// 导入基本样式
import './assets/css/base.css'
import './plugins/element.js'
import router from './router'


axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
