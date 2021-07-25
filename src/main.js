import Vue from 'vue'
import App from './App.vue'
import router from './Router'
Vue.config.productionTip = false
Vue.prototype.$urlAPI = "http://localhost:3000"
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
