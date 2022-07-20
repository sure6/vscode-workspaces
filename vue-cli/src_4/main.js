import Vue from "vue";
import App from "./App";

Vue.config.productionTip=false;

new Vue({
    beforeCreate(){
        Vue.prototype.$bus=this // 安装全局事件总线(Global Event Bus)
    },
    render:h=>h(App)
}).$mount("#app")