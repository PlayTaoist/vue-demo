// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import qs from 'qs'
import Axios from 'axios'
import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
Vue.use(MintUI)
// import { Swipe, SwipeItem } from 'mint-ui';
// import { Button } from 'mint-ui';
// import { Lazyload } from 'mint-ui';
// Vue.use(Lazyload);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.component(Header.name, Header)

import router from './router'

import App from './App'

Vue.prototype.$axios = Axios
Vue.prototype.HOST = "/api"
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
Vue.config.productionTip = false
import moment from 'moment'
Vue.filter('datetimeFormat', function (time, formatString = 'YYYY-MM-DD HH:mm:ss') {
  return moment(time).format(formatString);
})
/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router
}).$mount('#app');
