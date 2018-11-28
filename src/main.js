// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Axios from 'axios'
import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui';
import { Button } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
import router from './router'

import App from './App'

Vue.prototype.$axios = Axios
Vue.prototype.HOST = "/api"

Vue.config.productionTip = false
 
Vue.component(Header.name, Header)

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router
}).$mount('#app');
