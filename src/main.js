// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index'
import 'font-awesome/css/font-awesome.min.css'
import vuex from './store/store'
import i18n from './i18n/index'
Vue.prototype.$api = api

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  vuex,
  components: { App },
  template: '<App/>'
})
