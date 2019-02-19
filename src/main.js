import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'

// @ is an alias to /src
import '@/assets/css/style.bundle.min.css' /* metronic */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios)
Vue.use(Vuesax)
var app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
