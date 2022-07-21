import Vue from 'vue'
import App from './App.vue'

import router from "./router/index"
import VueRouter from 'vue-router'

Vue.config.productionTip=false;

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
