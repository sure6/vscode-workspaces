import Vue from "vue";
import App from "./App";
import obj from "./plugin"

Vue.config.productionTip=false;
Vue.use(obj);

new Vue({
    render:h=>h(App)
}).$mount("#app")