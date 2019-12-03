// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 将api的接口库放在这里
import api from './api/index'
import 'font-awesome/css/font-awesome.min.css'
import vuex from './store/store'
import i18n from './i18n/index'

// 这个手机端开发进行监控请求和输出
import vConsole from 'vconsole'

Vue.prototype.$api = api
Vue.config.productionTip = false

// 注意这个到时生产环境不要输出，可以打包的时候注释或者根据环境if else
var vc = new vConsole();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  vuex,
  components: { App },
  template: '<App/>'
})
