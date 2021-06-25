import Vue from 'vue'
import './plugins/axios'
import App from './layout/App.vue'
import router from './router'
import store from './store'
import './quasar'
import axios from 'axios'


//Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
//Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs


// Vue.prototype.$all = function () {    
//   alert('working!!!')
// }

Vue.config.productionTip = false

new Vue({
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
