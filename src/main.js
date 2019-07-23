// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import mixins from './mixins'
Vue.mixin(mixins)
Vue.use(Vuex)

//初始化css
import './assets/css/index.css'
import './assets/css/style.css'


//使用mint-ui框架
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);
import { Picker } from 'mint-ui';
Vue.component(Picker.name, Picker);

//vue-resource http请求
import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App: resolve => {require(['./App'], resolve)}
  }
})


