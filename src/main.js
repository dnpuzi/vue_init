// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import axios from 'axios'
import { Notification, MessageBox, Message } from 'element-ui';
import css from 'tfciw.css'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios
Vue.prototype.$notify = Notification;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;

Vue.prototype.$css = css

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
