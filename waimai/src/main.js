import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './mock/mockServer'
import VueLazyload from 'vue-lazyload'
import Header from './components/Header/Header.vue'
import 'mint-ui/lib/style.css'
import './fiters' // 加载过滤器
import Start from './components/Start/Start.vue'
import * as API from './api/index.js'
Vue.config.productionTip = false
Vue.prototype.$API = API
Vue.component('Start', Start)
Vue.use(VueLazyload)
Vue.component('Header', Header)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
