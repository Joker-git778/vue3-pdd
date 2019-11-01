import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "normalize.css";
import "./common/stylus/mixins.styl";
import fastclick from "fastclick";
import LyTab from 'ly-tab';

Vue.use(LyTab);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    fastclick,
    render: h => h(App)
}).$mount('#app')