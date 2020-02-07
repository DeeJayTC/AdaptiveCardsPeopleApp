import Vue from 'vue'
import App from './App.vue'
import AdaptiveCards from 'adaptivecards-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(AdaptiveCards);
Vue.config.productionTip = false




new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
