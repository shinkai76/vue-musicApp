import 'babel-polyfill'
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import 'common/less/index.less'
import fastclick from 'fastclick'
import axios from 'axios'
import VueJsonp from 'vue-jsonp'

Vue.use(VueJsonp)
Vue.use(Mint)
fastclick.attach(document.body) // 消除手机端300毫秒的点击延迟
Vue.prototype.HOST = '/api'
Vue.prototype.$ajax = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
