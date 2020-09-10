import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import BootstrapVue from 'bootstrap-vue'
//@ts-ignore
import VueConfetti from 'vue-confetti'
Vue.use(VueConfetti)
Vue.use(BootstrapVue)
new Vue({
  render: h => h(App),
}).$mount('#app')

