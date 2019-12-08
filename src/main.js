import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

import "normalize.css";
import "./common/stylus/mixins.styl";
import fastclick from "fastclick";
import LyTab from 'ly-tab';

import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';

// 引入字体图标文件
import "./common/css/style.css";

// vant
import { Toast, Notif } from 'vant';
import { ActionSheet } from 'vant';
import { DatetimePicker } from 'vant';
import { Popup } from 'vant';
import 'vant/lib/index.css';
Vue.use(Popup);
Vue.use(ActionSheet);
Vue.use(DatetimePicker);
Vue.use(Toast, Notif);

Vue.use(LyTab);
Vue.use(vuescroll);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    fastclick,
    render: h => h(App)
}).$mount('#app')